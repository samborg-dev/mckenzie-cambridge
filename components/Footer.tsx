import Link from "next/link";
import Crest from "@/components/Crest";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <Crest size={44} />
              <span className="wordmark">
                <span className="wm-name">McKenzie Cambridge</span>
                <span className="wm-sub" style={{ color: "var(--gold-bright)" }}>
                  Preparatory Academy
                </span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "36ch" }}>
              <em>Crescimus Discendo, Ducimus Intellectu</em> — a new preparatory academy opening{" "}
              <span className="ph">[target date]</span> in <span className="ph">[location]</span>.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About &amp; Vision</Link></li>
              <li><Link href="/academics">Academics</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hello@example.com" className="ph">[contact email]</a></li>
              <li><a href="#" className="ph">[Instagram]</a></li>
              <li><a href="#" className="ph">[Facebook]</a></li>
              <li><a href="#" className="ph">[LinkedIn]</a></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li className="ph">[Street address]</li>
              <li className="ph">[City, State ZIP]</li>
              <li className="ph">[Phone number]</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} McKenzie Cambridge Preparatory Academy. All rights reserved.</span>
          <span>Proof of concept · placeholder content</span>
        </div>
      </div>
    </footer>
  );
}
