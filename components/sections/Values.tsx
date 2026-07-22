import { values } from "@/lib/content";

interface ValuesProps {
  soft?: boolean;
}

export default function Values({ soft }: ValuesProps) {
  return (
    <section className={soft ? "soft" : undefined}>
      <div className="container">
        <div className="section-head center">
          <div className="kicker">What we stand for</div>
          <h2>Core values</h2>
        </div>
        <div className="grid grid-2">
          {values.map(({ Icon, title, body }) => (
            <div className="card" key={title}>
              <div className="ic"><Icon size={22} /></div>
              <h3 style={{ marginBottom: 6 }}>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
