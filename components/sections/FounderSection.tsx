import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

interface FounderSectionProps {
  soft?: boolean;
  id?: string;
  showCta?: boolean;
}

export default function FounderSection({ soft, id, showCta }: FounderSectionProps) {
  return (
    <section id={id} className={soft ? "soft" : undefined}>
      <div className="container">
        <div className="founder">
          <ImagePlaceholder label="Founder headshot" />
          <div>
            <div className="kicker">Meet the founder</div>
            <blockquote className="quote">
              &ldquo;[Placeholder — a short, memorable quote from the founder about why they are
              starting this school.]&rdquo;
            </blockquote>
            <h3 style={{ fontSize: "1.4rem" }}><span className="ph">[Founder Name]</span></h3>
            <p style={{ fontWeight: 600, color: "var(--accent)", marginTop: -8 }}>
              <span className="ph">[Founder title / role]</span>
            </p>
            <p>
              [Placeholder professional biography — a paragraph summarizing the founder&apos;s
              educational background, leadership experience, and the journey that led to starting
              this school.]
            </p>
            {showCta && (
              <Link href="/about#founder" className="btn btn-ghost">
                Read the full bio
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
