const REPO_URL = "https://github.com/Shivam583-hue/TrueCoder";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <a className="brand" href="#top">
            <span className="cursor" aria-hidden="true" />
            TRUE<span className="dim">CODER</span>
          </a>
          <nav className="footer-links">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={`${REPO_URL}/blob/main/docs/ARCHITECTURE.md`} target="_blank" rel="noopener noreferrer">
              Architecture doc
            </a>
            <a href={`${REPO_URL}/actions/workflows/tests.yml`} target="_blank" rel="noopener noreferrer">
              CI status
            </a>
            <a href="mailto:shivamshivamshivam456@gmail.com">Report a vulnerability</a>
          </nav>
        </div>
        <div className="footer-note">
          <span>No license file is committed yet, so default copyright applies.</span>
          <span>© 2026 TrueCoder. Built in the terminal, for the terminal.</span>
        </div>
      </div>
    </footer>
  );
}
