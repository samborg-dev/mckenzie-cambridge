import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NewsletterBandProps {
  soft?: boolean;
  /** Show a link through to the full contact page. */
  contactCta?: boolean;
}

export default function NewsletterBand({ soft, contactCta }: NewsletterBandProps) {
  return (
    <section className={soft ? "soft" : undefined}>
      <div className="container">
        <div className="band">
          <h2>Be the first to know</h2>
          <p>
            Join our mailing list for founding updates, open house invitations, and enrollment news.
            [Placeholder — connect this form to <span className="ph">[email platform]</span>.]
          </p>
          <form
            className="form-row"
            style={{ margin: "0 auto", justifyContent: "center" }}
            action="#"
            method="post"
          >
            <input type="email" placeholder="you@example.com" aria-label="Email address" required />
            <button type="submit" className="btn btn-gold">Keep me posted</button>
          </form>
          {contactCta && (
            <p style={{ marginTop: 20, marginBottom: 0 }}>
              <Link href="/contact" style={{ color: "var(--gold-bright)", fontWeight: 600 }}>
                Have a question? Contact us <ArrowRight size={15} style={{ verticalAlign: "-2px" }} />
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
