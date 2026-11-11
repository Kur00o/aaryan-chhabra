import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Choreography from "@/components/Choreography";

/* Self-hosted (OFL) so builds never depend on a network fetch.
   One family does the shouting and the talking: Archivo, pushed to 125% width for display. */
const archivo = localFont({
  src: [{ path: "./fonts/Archivo-Variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  fallback: ["Helvetica Neue", "system-ui", "sans-serif"],
});

/* Mono only where it's literally a terminal. */
const mono = localFont({
  src: [{ path: "./fonts/JetBrainsMono-Variable.woff2", weight: "100 800", style: "normal" }],
  variable: "--font-jbm",
  display: "swap",
  fallback: ["ui-monospace", "Menlo", "monospace"],
});

const title = "Aaryan Chhabra — I build what thinks for itself.";
const description =
  "Computer Science undergrad at MIT-WPU, Pune. Autonomous agents, open-source tools, and the occasional agentic pentester.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: { title, description, type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#0099FF",
  viewportFit: "cover",
};

/* Runs before paint: hides hero pieces only when motion will actually play,
   and un-hides them after 2.5s if the motion script never arrives. */
const motionGate = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.classList.add('js-motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('js-motion')},2500)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionGate }} />
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Nav />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Choreography />
      </body>
    </html>
  );
}
