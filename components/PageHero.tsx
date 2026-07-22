import type { ReactNode } from "react";

interface PageHeroProps {
  kicker: string;
  title: string;
  children?: ReactNode;
}

export default function PageHero({ kicker, title, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container prose">
        <div className="kicker">{kicker}</div>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
