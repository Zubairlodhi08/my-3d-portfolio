import { career } from "../data/career";
import { useReveal } from "../hooks/useReveal";
import "./styles/Career.css";

export default function Career() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="career" className="section career">
      <div className={`container reveal ${visible ? "is-visible" : ""}`} ref={ref}>
        <div className="section-head">
          <h2>Career</h2>
          <span className="section-index">03</span>
        </div>

        <ol className="timeline">
          {career.map((entry) => (
            <li key={entry.role + entry.org} className="timeline-entry">
              <span className="timeline-period">{entry.period}</span>
              <div className="timeline-body">
                <h3>
                  {entry.role} <span className="timeline-org">{entry.org}</span>
                </h3>
                <p>{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
