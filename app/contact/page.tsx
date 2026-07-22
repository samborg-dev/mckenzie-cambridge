import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Get in touch">
        <p>[Placeholder — reach out with any questions and we&apos;ll respond as soon as we can.]</p>
      </PageHero>

      <section>
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <div className="ic"><MapPin size={24} /></div>
              <h3>Visit</h3>
              <p>
                <span className="ph">[Street address]</span>
                <br />
                <span className="ph">[City, State ZIP]</span>
              </p>
            </div>
            <div className="card">
              <div className="ic"><Phone size={24} /></div>
              <h3>Call</h3>
              <p><span className="ph">[Phone number]</span></p>
            </div>
            <div className="card">
              <div className="ic"><Mail size={24} /></div>
              <h3>Email</h3>
              <p><span className="ph">[contact email]</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="container">
          <div className="founder" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div className="kicker">Send a message</div>
              <h2>We&apos;d love to hear from you</h2>
              <form className="form" action="#" method="post">
                <label>Your name
                  <input type="text" placeholder="Jane Doe" required />
                </label>
                <label>Email
                  <input type="email" placeholder="you@example.com" required />
                </label>
                <label>Message
                  <textarea placeholder="Tell us a little about your family and your questions…" />
                </label>
                <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }}>
                  Send inquiry
                </button>
              </form>
            </div>
            <ImagePlaceholder label="Map / campus location" style={{ aspectRatio: "1 / 1" }} />
          </div>
        </div>
      </section>
    </>
  );
}
