import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/work";
import { useReveal } from "../hooks/useReveal";
import TiltCard from "./TiltCard";
import "./styles/Work.css";

export default function Work() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="section work">
      <div className={`container reveal ${visible ? "is-visible" : ""}`} ref={ref}>
        <div className="section-head">
          <h2>Selected work</h2>
          <span className="section-index">05</span>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <TiltCard key={project.title} className="work-card">
              <div className="work-card-top">
                <h3>{project.title}</h3>
                <span className="work-year">{project.year}</span>
              </div>

              <p>{project.description}</p>

              <div className="work-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="work-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live <FiArrowUpRight />
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Code <FiGithub />
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
