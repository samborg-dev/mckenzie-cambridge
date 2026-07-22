import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionCtaProps {
  href: string;
  label: string;
  variant?: "primary" | "gold" | "ghost";
}

export default function SectionCta({ href, label, variant = "primary" }: SectionCtaProps) {
  return (
    <div style={{ textAlign: "center", marginTop: 34 }}>
      <Link href={href} className={`btn btn-${variant}`}>
        {label} <ArrowRight size={18} />
      </Link>
    </div>
  );
}
