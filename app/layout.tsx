import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import CursorDot from "@/components/CursorDot";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-work-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaryan Chhabra — I build what thinks for itself.",
  description:
    "Computer Science undergrad at MIT-WPU. Autonomous agents, open-source tools, and the occasional agentic pentester.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aaryan Chhabra — I build what thinks for itself.",
    description:
      "Computer Science undergrad at MIT-WPU. Autonomous agents, open-source tools, and the occasional agentic pentester.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${workSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg antialiased" style={{ color: "#e8e6e0", backgroundColor: "#0a0a0a" }}>
        <CursorDot />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
