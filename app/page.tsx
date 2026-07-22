import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Landmark,
  GraduationCap,
  ClipboardList,
  Mail,
  type LucideIcon,
} from "lucide-react";
import Crest from "@/components/Crest";
import Gallery from "@/components/sections/Gallery";
import NewsletterBand from "@/components/sections/NewsletterBand";

interface ExploreCard {
  Icon: LucideIcon;
  title: string;
  body: string;
  href: string;
}

const explore: ExploreCard[] = [
  { Icon: Landmark, title: "About us", body: "Our story, mission and vision, core values, and the founder behind the school.", href: "/about" },
  { Icon: GraduationCap, title: "Academics", body: "Programs, specialties, and our approach to teaching and learning.", href: "/academics" },
  { Icon: ClipboardList, title: "Admissions", body: "How to join our founding families, plus key facts at a glance.", href: "/admissions" },
  { Icon: Mail, title: "Contact", body: "Get in touch, visit, or send us a message with your questions.", href: "/contact" },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">
              <Sparkles size={15} /> Now in the planning stages
            </span>
            <h1>
              A preparatory academy for{" "}
              <span style={{ color: "var(--gold-bright)" }}>curious minds</span>
            </h1>
            <p className="lead">
              McKenzie Cambridge Preparatory Academy is a new independent school opening in{" "}
              <span className="ph">[target date]</span>. Follow along and be part of our founding community.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-gold">
                Register your interest <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn btn-ghost">Our vision</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="num ph">[K–12]</div>
                <div className="lbl">Planned grade levels</div>
              </div>
              <div className="stat">
                <div className="num ph">[2026]</div>
                <div className="lbl">Target opening</div>
              </div>
              <div className="stat">
                <div className="num ph">[City]</div>
                <div className="lbl">Intended location</div>
              </div>
            </div>
          </div>
          <div className="hero-crest">
            <Crest size={420} />
          </div>
        </div>
        <div className="container" style={{ position: "relative", paddingBottom: 40 }}>
          <div className="motto" style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
            <div className="lat">Crescimus Discendo, Ducimus Intellectu</div>
            <div className="eng">We grow by learning, we lead with knowledge</div>
          </div>
        </div>
      </section>

      {/* ---------- WELCOME ---------- */}
      <section>
        <div className="container">
          <div className="section-head center">
            <div className="kicker">Welcome</div>
            <h2>A school built around every child</h2>
            <p>
              [Placeholder — one or two welcoming sentences that capture the school&apos;s spirit and
              invite families to explore. Keep it brief; the full story lives on the pages below.]
            </p>
          </div>
        </div>
      </section>

      {/* ---------- EXPLORE HUB ---------- */}
      <section className="soft">
        <div className="container">
          <div className="section-head center">
            <div className="kicker">Explore</div>
            <h2>Find your way around</h2>
          </div>
          <div className="grid grid-2">
            {explore.map(({ Icon, title, body, href }) => (
              <Link key={href} href={href} className="card link-card">
                <div className="ic"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="card-more">
                  Visit page <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MEDIA (only lives here) ---------- */}
      <Gallery />

      {/* ---------- NEWSLETTER (only lives here) ---------- */}
      <NewsletterBand soft />
    </>
  );
}
