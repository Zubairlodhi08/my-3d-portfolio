import { aboutCopy, stats } from "../data/about";
import { useReveal } from "../hooks/useReveal";
import "./styles/About.css";

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about">
      <div className={`container reveal ${visible ? "is-visible" : ""}`} ref={ref}>
        <div className="section-head">
          <h2>About</h2>
          <span className="section-index">01</span>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            {aboutCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
