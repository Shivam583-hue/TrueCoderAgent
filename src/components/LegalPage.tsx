import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>
        <section className="legal-page">
          <div className="wrap legal-wrap">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="section-title">{title}</h1>
            <p className="legal-updated">Last updated {updated}</p>
            <div className="legal-body">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
