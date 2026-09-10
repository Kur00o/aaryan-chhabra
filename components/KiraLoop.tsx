"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Animated terminal showing Kira's observe→think→act loop as streaming output.
 * Lines type in one-by-one, then the loop restarts after a pause.
 */

interface Line {
  prefix: string;
  prefixColor: string;
  text: string;
  delay: number; // ms from sequence start
}

const SEQUENCE: Line[] = [
  { prefix: "❯",        prefixColor: "var(--border-bright)", text: "kira --target 10.10.0.1 --mode full", delay: 0 },
  { prefix: "//",       prefixColor: "var(--border-bright)", text: "initialising agent runtime...",        delay: 600 },
  { prefix: "[OBSERVE]",prefixColor: "var(--coral)",         text: "nmap -sV -p- 10.10.0.1",              delay: 1200 },
  { prefix: "✓",        prefixColor: "var(--mint)",          text: "open ports: 22, 80, 443, 8080",       delay: 1950 },
  { prefix: "[THINK]",  prefixColor: "var(--blue)",          text: "reasoning over scan output...",        delay: 2700 },
  { prefix: "✓",        prefixColor: "var(--mint)",          text: "hypothesis: CVE-2024-3094 candidate",  delay: 3500 },
  { prefix: "[ACT]",    prefixColor: "var(--sunflower)",     text: "searchsploit openssh 8.9",             delay: 4300 },
  { prefix: "✓",        prefixColor: "var(--mint)",          text: "3 exploits matched → queued",          delay: 5100 },
  { prefix: "↩",        prefixColor: "var(--coral)",         text: "next cycle: enumerate :8080...",       delay: 5900 },
  { prefix: "▋",        prefixColor: "var(--ink)",           text: "",                                     delay: 6700 },
];

const RESTART_DELAY = 3000; // ms to wait before restarting

export default function KiraLoop() {
  const prefersReduced = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(prefersReduced ? SEQUENCE.length : 0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (prefersReduced) {
      setVisibleCount(SEQUENCE.length);
      return;
    }

    setVisibleCount(0);

    const timers: ReturnType<typeof setTimeout>[] = [];

    SEQUENCE.forEach((line, i) => {
      timers.push(
        setTimeout(() => setVisibleCount(i + 1), line.delay)
      );
    });

    // Restart loop
    const lastDelay = SEQUENCE[SEQUENCE.length - 1].delay + RESTART_DELAY;
    timers.push(
      setTimeout(() => {
        setCycleKey((k) => k + 1);
      }, lastDelay)
    );

    return () => timers.forEach(clearTimeout);
  }, [cycleKey, prefersReduced]);

  return (
    <div
      className="w-full font-mono text-sm leading-relaxed select-none"
      aria-label="Kira's agentic loop terminal output"
      role="img"
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
        <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        <span className="ml-3 text-xs" style={{ color: "var(--border-bright)" }}>
          kira-agent ~ zsh
        </span>
      </div>

      {/* Lines */}
      <div className="flex flex-col gap-1.5">
        <AnimatePresence mode="sync" key={cycleKey}>
          {SEQUENCE.slice(0, visibleCount).map((line, i) => {
            const isCursor = line.prefix === "▋";
            return (
              <motion.div
                key={`${cycleKey}-${i}`}
                initial={prefersReduced ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="flex items-start gap-2.5"
              >
                {/* Prefix */}
                {!isCursor && (
                  <span
                    className="flex-shrink-0 font-bold text-xs mt-0.5 w-16 text-right"
                    style={{ color: line.prefixColor }}
                  >
                    {line.prefix}
                  </span>
                )}

                {/* Text or blinking cursor */}
                {isCursor ? (
                  <span
                    className="cursor-blink ml-[4.5rem] text-base"
                    style={{ color: "var(--coral)" }}
                    aria-hidden="true"
                  >
                    ▋
                  </span>
                ) : (
                  <span style={{ color: "var(--ink)" }}>{line.text}</span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
