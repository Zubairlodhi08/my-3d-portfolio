import { capabilities } from "../data/whatIDo";
import { useReveal } from "../hooks/useReveal";
import TiltCard from "./TiltCard";
import "./styles/WhatIDo.css";

export default function WhatIDo() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="what-i-do" className="section what-i-do alt-bg">
      <div className={`container reveal ${visible ? "is-visible" : ""}`} ref={ref}>
        <div className="section-head">
          <h2>What I do</h2>
          <span className="section-index">02</span>
        </div>

        <div className="capability-grid">
          {capabilities.map((cap) => (
            <TiltCard key={cap.title} className="capability-card">
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
