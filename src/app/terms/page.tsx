import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

const REPO_URL = "https://github.com/Shivam583-hue/TrueCoder";

export const metadata: Metadata = {
  title: "Terms of Service — TrueCoder",
  description: "The basic terms for using the TrueCoder website and software.",
};

export default function TermsOfService() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of service." updated="August 13, 2026">
      <p className="legal-disclaimer">
        This is a basic set of terms written for a solo, open-source project.
        It covers the essentials in plain language — it isn&apos;t a
        substitute for professional legal advice.
      </p>

      <div>
        <h2>Acceptance</h2>
        <p>
          By using this website, you agree to these terms. There&apos;s no
          account here to delete, so if you don&apos;t agree, the real
          remedy is simply to stop using the site.
        </p>
      </div>

      <div>
        <h2>What this site is</h2>
        <p>
          This is an informational site for TrueCoder, an open-source
          terminal coding agent. It doesn&apos;t process payments, doesn&apos;t
          require sign-up, and doesn&apos;t collect anything beyond what the{" "}
          <Link href="/privacy">privacy policy</Link> describes.
        </p>
      </div>

      <div>
        <h2>The TrueCoder software</h2>
        <p>
          TrueCoder is released under the MIT License. Once you have a copy
          of the source, the license in the repository — not this page —
          governs what you can do with it. In short: it&apos;s provided AS
          IS, without warranty of any kind, and the maintainer isn&apos;t
          liable for damages arising from its use. Read the{" "}
          <a href={`${REPO_URL}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer">
            LICENSE file
          </a>{" "}
          in the repository for the exact terms.
        </p>
      </div>

      <div>
        <h2>Acceptable use of this site</h2>
        <p>
          Don&apos;t try to disrupt, scrape abusively, or gain unauthorized
          access to this website or the infrastructure behind it. Everything
          here is provided in good faith for people evaluating or using
          TrueCoder.
        </p>
      </div>

      <div>
        <h2>Intellectual property</h2>
        <p>
          The text, design, and visual identity of this website belong to
          the TrueCoder project. The &quot;TrueCoder&quot; name and any
          associated marks are used to identify the project; nothing here
          grants trademark rights. The underlying software is licensed
          separately, as described above.
        </p>
      </div>

      <div>
        <h2>Third-party links</h2>
        <p>
          This site links to GitHub and other external services. We don&apos;t
          control them and aren&apos;t responsible for their content,
          availability, or policies.
        </p>
      </div>

      <div>
        <h2>No warranty</h2>
        <p>
          This website is provided as-is, without warranties of any kind,
          express or implied. We don&apos;t guarantee it will be available,
          error-free, or uninterrupted.
        </p>
      </div>

      <div>
        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, the maintainer isn&apos;t liable
          for indirect, incidental, or consequential damages arising from
          your use of this site or the TrueCoder software.
        </p>
      </div>

      <div>
        <h2>Changes to these terms</h2>
        <p>
          These terms may change as the project evolves. The date at the top
          of this page reflects the last change.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about these terms can go to{" "}
          <a href="mailto:shivamshivamshivam456@gmail.com">
            shivamshivamshivam456@gmail.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
