import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans, Chakra_Petch } from "next/font/google";
import InteractiveGrid from "@/components/InteractiveGrid";
import "./globals.css";
import "./site.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  weight: ["500", "800"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrueCoder: a coding agent with an auditable execution plane",
  description:
    "TrueCoder is a terminal-native coding agent. Every shell command it runs is policy-checked, approved, bounded, sandboxable, and durably recorded before it executes.",
};

const THEME_INIT = `
(function () {
  try {
    var stored = localStorage.getItem('truecoder-theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${ibmPlexSans.variable} ${chakraPetch.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <InteractiveGrid />
        {children}
      </body>
    </html>
  );
}
