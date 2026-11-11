"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * All motion lives here, keyed off classes and data attributes in server-rendered
 * markup. Every hidden starting state is set by JS (or by the .js-motion gate),
 * so the page reads fine if this never runs.
 *
 * Easing family: expo.out for entrances, power3.inOut for wipes/draws.
 */
export default function Choreography() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const q = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) =>
      Array.from(el.querySelectorAll<T & Element>(s)) as T[];

    /* ── Smooth scroll ─────────────────────────────────────────── */
    let lenis: Lenis | null = null;
    const tick = (t: number) => lenis?.raf(t * 1000);
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.11 });
      window.__lenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    /* ── In-page anchors (through Lenis, focus follows) ────────── */
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href") || "";
      if (id.length < 2) return;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { duration: 1.5 });
      else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      history.pushState(null, "", id);
      const heading = el.querySelector<HTMLElement>("h1, h2") ?? el;
      if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    };
    document.addEventListener("click", onClick);

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const stages = q(".stage");

      if (reduce) {
        stages.forEach((s) => s.classList.add("is-active"));
        return;
      }
      root.classList.add("motion-ready");

      /* ── 1. Load sequence: one orchestrated moment ───────────── */
      const heroLines = q(".hero__title .line");
      q<HTMLElement>(".hcard").forEach((c) => {
        gsap.set(c.querySelector(".hcard__in"), { rotation: parseFloat(c.dataset.rot || "0") });
      });
      gsap
        .timeline({ defaults: { ease: "expo.out", duration: 1.2 } })
        .fromTo(".hero__meta", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 0)
        .fromTo(
          ".hero__title .line > span",
          { yPercent: 115, y: 0 }, // y:0 discards the CSS pre-paint offset
          {
            yPercent: 0,
            stagger: 0.09,
            onComplete: () => heroLines.forEach((l) => l.classList.add("is-done")),
          },
          0.05
        )
        .fromTo(".hero__sub", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.5)
        .fromTo(
          ".hcard",
          { autoAlpha: 0, scale: 0.55, y: 60 },
          { autoAlpha: 1, scale: 1, y: 0, stagger: 0.14, duration: 1.3 },
          0.45
        )
        .fromTo(".hero .sticker", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, 0.7)
        .fromTo(
          ".hero .sticker svg",
          { scale: 0.4, rotation: -120 },
          { scale: 1, rotation: 0, duration: 1.4, transformOrigin: "50% 50%" },
          0.7
        )
        .fromTo(
          ".hero__circle path",
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 1.1, ease: "power3.inOut" },
          0.8
        )
        .fromTo(
          ".hero__curl path, .hero__swoop path",
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.8, ease: "power3.inOut", stagger: 0.18 },
          1.05
        );

      /* Stickers keep turning; hover winds them up. */
      q<HTMLElement>(".sticker").forEach((st) => {
        const ring = st.querySelector(".sticker__ring");
        if (!ring) return;
        const spin = gsap.to(ring, { rotation: 360, svgOrigin: "100 100", repeat: -1, ease: "none", duration: 18 });
        const fast = () => gsap.to(spin, { timeScale: 4, duration: 0.6, ease: "power3.out" });
        const slow = () => gsap.to(spin, { timeScale: 1, duration: 1.2, ease: "power3.out" });
        st.addEventListener("pointerenter", fast);
        st.addEventListener("pointerleave", slow);
        cleanups.push(() => {
          st.removeEventListener("pointerenter", fast);
          st.removeEventListener("pointerleave", slow);
        });
      });

      /* Hero cards: drift with the pointer, straighten up when you reach for them. */
      if (window.matchMedia("(pointer: fine)").matches) {
        const movers = q<HTMLElement>(".hcard").map((c) => {
          const inner = c.querySelector(".hcard__in")!;
          const rot = parseFloat(c.dataset.rot || "0");
          const d = parseFloat(c.dataset.depth || "1");
          const enter = () => gsap.to(inner, { rotation: 0, scale: 1.06, duration: 0.6, ease: "expo.out" });
          const leave = () => gsap.to(inner, { rotation: rot, scale: 1, duration: 0.9, ease: "expo.out" });
          c.addEventListener("pointerenter", enter);
          c.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            c.removeEventListener("pointerenter", enter);
            c.removeEventListener("pointerleave", leave);
          });
          return {
            d,
            x: gsap.quickTo(inner, "x", { duration: 1.1, ease: "power3" }),
            y: gsap.quickTo(inner, "y", { duration: 1.1, ease: "power3" }),
          };
        });
        const onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          movers.forEach((m) => {
            m.x(nx * 40 * m.d);
            m.y(ny * 30 * m.d);
          });
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        cleanups.push(() => window.removeEventListener("pointermove", onMove));
      }

      /* Scrolling out of the hero: type sinks, cards rise. */
      gsap.to(".hero__title", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hcard", {
        yPercent: -70,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      /* ── 2. Reveals, chosen per content type ─────────────────── */
      q<HTMLElement>('[data-reveal="lines"]').forEach((el) => {
        gsap.fromTo(
          q(".line > span", el),
          { yPercent: 115 },
          {
            yPercent: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onComplete: () => q(".line", el).forEach((l) => l.classList.add("is-done")),
          }
        );
      });
      q<HTMLElement>('[data-reveal="fade"]').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } }
        );
      });
      q<HTMLElement>('[data-reveal="wipe"]').forEach((el) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } });
        tl.fromTo(
          el,
          { clipPath: "inset(0% 100% 0% 0% round 28px)" },
          { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.3, ease: "power3.inOut", clearProps: "clipPath" }
        ).fromTo(el.querySelector("svg"), { scale: 1.18 }, { scale: 1, duration: 1.6, ease: "expo.out" }, 0.2);
      });
      q<HTMLElement>('[data-reveal="rows"]').forEach((el) => {
        gsap.fromTo(
          Array.from(el.children),
          { clipPath: "inset(0% 100% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.1,
            ease: "power3.inOut",
            stagger: 0.1,
            clearProps: "clipPath",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });
      q<SVGElement>("[data-draw]").forEach((svg) => {
        gsap.fromTo(
          svg.querySelectorAll("path"),
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power3.inOut",
            stagger: 0.2,
            scrollTrigger: { trigger: svg, start: "top 85%", once: true },
          }
        );
      });

      /* ── 3. Signature: the loop + the client strip ───────────── */
      const loop = document.querySelector<HTMLElement>(".loop")!;
      const termLines = q<HTMLElement>(".loop__term .tline:not(.tline--cursor)");
      const backPaths = q<SVGPathElement>(".loop__back path");
      const cycleN = loop.querySelector(".term__n");
      const setStage = (i: number) => stages.forEach((s, k) => s.classList.toggle("is-active", k === i));

      /* Each stage owns a slice of the scroll; its log lines land inside that slice. */
      const windows: Array<[number, number]> = [
        [0, 0.27],
        [0.27, 0.5],
        [0.5, 0.76],
      ];
      const thresholds = termLines.map((l) => {
        const s = Number(l.dataset.stage);
        const group = termLines.filter((x) => Number(x.dataset.stage) === s);
        const [a, b] = windows[s];
        return a + ((b - a) * (group.indexOf(l) + 0.2)) / group.length;
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        loop.classList.add("is-pinned");
        setStage(0);
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: loop,
            start: "top top",
            end: "+=260%",
            pin: true,
            scrub: 0.6,
            onUpdate: (self) => {
              const p = self.progress;
              termLines.forEach((l, i) => l.classList.toggle("is-on", p >= thresholds[i]));
              setStage(p < windows[1][0] ? 0 : p < windows[2][0] ? 1 : 2);
              if (cycleN) cycleN.textContent = p > 0.95 ? "02" : "01";
            },
          },
        });
        tl.to({}, { duration: 1 }, 0).fromTo(
          backPaths,
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.1, stagger: 0.06, ease: "none" },
          0.8
        );

        /* Client work slides sideways while the section holds still. */
        const work = document.querySelector<HTMLElement>(".work")!;
        const pin = work.querySelector<HTMLElement>(".work__pin")!;
        const track = work.querySelector<HTMLElement>(".work__track")!;
        const viewport = work.querySelector<HTMLElement>(".work__viewport")!;
        work.classList.add("is-pinned");
        const dist = () => {
          const pad = parseFloat(getComputedStyle(viewport).paddingLeft) || 0;
          return Math.max(1, track.scrollWidth + pad * 2 - window.innerWidth);
        };
        gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => "+=" + dist(),
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          loop.classList.remove("is-pinned");
          work.classList.remove("is-pinned");
          termLines.forEach((l) => l.classList.remove("is-on"));
        };
      });

      mm.add("(max-width: 899px)", () => {
        stages.forEach((s) =>
          ScrollTrigger.create({
            trigger: s,
            start: "top 72%",
            once: true,
            onEnter: () => {
              s.classList.add("is-active");
              gsap.fromTo(
                s.querySelectorAll(".stage__log .tline"),
                { autoAlpha: 0, x: -10 },
                { autoAlpha: 1, x: 0, stagger: 0.14, duration: 0.7, ease: "expo.out", delay: 0.35 }
              );
            },
          })
        );
      });

      ScrollTrigger.sort();
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      if (lenis) {
        gsap.ticker.remove(tick);
        lenis.destroy();
        window.__lenis = undefined;
      }
    };
  }, []);

  return null;
}
