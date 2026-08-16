import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — TrueCoder",
  description: "What happens to your data when you visit the TrueCoder website.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy policy." updated="August 13, 2026">
      <p className="legal-disclaimer">
        This is a basic policy written for a solo, open-source project. It
        describes this website in plain terms — it isn&apos;t a substitute
        for professional legal advice.
      </p>

      <div>
        <h2>What this page covers</h2>
        <p>
          This describes what happens to your data when you visit this
          website, the online preview for TrueCoder, an open-source terminal
          coding agent. It does not describe how the TrueCoder application
          itself handles data once you&apos;ve installed it — that runs
          entirely on your own machine, outside our control, and is covered
          in the project&apos;s README and source on GitHub.
        </p>
      </div>

      <div>
        <h2>What we collect</h2>
        <p>
          This site uses{" "}
          <a href="https://vercel.com/docs/analytics" target="_blank" rel="noopener noreferrer">
            Vercel Analytics
          </a>{" "}
          to see how many people visit and which pages they read. It&apos;s
          cookieless and doesn&apos;t use persistent identifiers to track you
          across sites — it aggregates page views by page, referrer, and a
          rough device or location category. We don&apos;t run any other
          analytics or advertising on this site.
        </p>
        <p>
          There&apos;s no account to create and nothing to sign up for on
          this site, so we don&apos;t collect emails, passwords, or profile
          data through it.
        </p>
      </div>

      <div>
        <h2>Cookies and local storage</h2>
        <p>
          This site doesn&apos;t set cookies for tracking or advertising.
          Your light/dark theme choice is saved in your browser&apos;s{" "}
          <code className="mono">localStorage</code> so it persists between
          visits — that stays on your device and is never sent to us.
        </p>
      </div>

      <div>
        <h2>If you email us</h2>
        <p>
          The security contact in the footer reaches a real inbox. If you
          email us — to report a vulnerability or for any other reason —
          we&apos;ll have your email address and whatever you wrote, for as
          long as it takes to deal with it.
        </p>
      </div>

      <div>
        <h2>Links to other sites</h2>
        <p>
          Links to GitHub and other third-party services on this site are
          governed by those services&apos; own privacy policies, not this
          one.
        </p>
      </div>

      <div>
        <h2>The TrueCoder software</h2>
        <p>
          TrueCoder the CLI tool is separate software that you install and
          run locally. Its sessions, audit logs, memory, and credentials are
          stored on your own machine, and any prompts you send are relayed
          directly to whichever model provider you configure, subject to
          that provider&apos;s own terms. None of that data passes through
          this website. See the{" "}
          <a
            href="https://github.com/Shivam583-hue/TrueCoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            project&apos;s README
          </a>{" "}
          for the specifics.
        </p>
      </div>

      <div>
        <h2>Changes</h2>
        <p>
          If this policy changes, we&apos;ll update the date at the top of
          this page.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about this policy can go to{" "}
          <a href="mailto:shivamshivamshivam456@gmail.com">
            shivamshivamshivam456@gmail.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
