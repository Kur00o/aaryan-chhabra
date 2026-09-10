"use client";

import { motion, useReducedMotion } from "framer-motion";
import KiraLoop from "./KiraLoop";

const ease = [0.2, 0.8, 0.2, 1] as const;

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.5, ease },
        };

  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div className="flex flex-col gap-6">
          <motion.div className="flex items-center gap-3" {...fadeUp(0.05)}>
            <span className="font-mono text-sm text-coral tracking-widest uppercase">
              aaryan chhabra
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-[#e8e6e0] leading-none"
            {...fadeUp(0.18)}
          >
            I build what{" "}
            <span className="text-coral">thinks</span>{" "}
            for itself.
          </motion.h1>

          <motion.p
            className="font-body text-base md:text-lg text-[#c8c5be] max-w-md leading-relaxed"
            {...fadeUp(0.34)}
          >
            Computer Science undergrad at MIT-WPU. Autonomous agents,
            open-source tools, and the occasional agentic pentester.
          </motion.p>

          <motion.div className="flex gap-4 flex-wrap" {...fadeUp(0.48)}>
            <a
              href="#builds"
              className="inline-block font-body font-medium text-sm px-6 py-3 bg-coral text-bg border border-coral shadow-hard-coral hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
            >
              See my builds
            </a>
            <a
              href="#client-work"
              className="inline-block font-body font-medium text-sm px-6 py-3 bg-transparent text-[#a8a59e] border border-border hover:border-coral hover:text-coral transition-all duration-150"
            >
              Client work
            </a>
          </motion.div>
        </div>

        {/* Right — terminal */}
        <motion.div
          className="w-full"
          initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6 }}
        >
          <div
            className="border border-border-bright p-5 md:p-7 shadow-hard-coral"
            style={{ background: "var(--surface)" }}
          >
            <KiraLoop />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-16 flex flex-col items-start gap-2"
        initial={prefersReduced ? undefined : { opacity: 0 }}
        animate={prefersReduced ? undefined : { opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-px bg-border-bright" />
          <span className="font-mono text-xs text-[#c8c5be] tracking-widest">scroll</span>
        </div>
        <motion.div
          className="w-px h-8 bg-border-bright ml-5"
          animate={prefersReduced ? undefined : { scaleY: [1, 0.3, 1], opacity: [0.25, 0.7, 0.25] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
