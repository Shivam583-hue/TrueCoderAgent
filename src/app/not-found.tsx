import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <main>
        <section className="notfound">
          <div className="wrap notfound-wrap">
            <span className="eyebrow">404 · route not found</span>
            <h1 className="section-title notfound-title">
              This path was never approved.
            </h1>
            <p className="lede">
              Whatever you were looking for isn&apos;t part of this site.
              Nothing ran, nothing changed, and there&apos;s nothing to audit.
            </p>

            <div className="code-window notfound-window">
              <div className="term-bar">
                <span className="term-dot" />
                <span className="term-dot" />
                <span className="term-dot" />
                <span className="term-title">truecoder · zsh</span>
              </div>
              <pre>
                <code>
                  <span className="c1">$ </span>
                  <span className="c2">cd {"{"}requested-page{"}"}</span>
                  {"\n"}
                  <span className="c1">policy   </span>
                  <span className="notfound-denied">denied</span>
                  {"\n"}
                  <span className="c1">reason   </span>route_not_found
                  {"\n"}
                  <span className="c1">audit    </span>recorded, no changes made
                </code>
              </pre>
            </div>

            <Link className="btn btn-primary notfound-cta" href="/">
              Back to a route that exists →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
