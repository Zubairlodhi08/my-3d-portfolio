import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data/profile";
import HeroCanvas from "./Character/HeroCanvas";
import "./styles/Landing.css";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".landing-panel", { y: 24, opacity: 0, duration: 0.7 })
        .from(
          ".landing-code-line",
          { opacity: 0, x: -12, stagger: 0.08, duration: 0.4 },
          "-=0.3"
        )
        .from(
          ".landing-heading",
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.2"
        )
                .from(".landing-actions a", { y: 12, opacity: 0, stagger: 0.08 }, "-=0.3")
        .from(".landing-canvas", { opacity: 0, duration: 1 }, "-=0.8");

      gsap.to(".landing-canvas", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".landing",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".landing-heading", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".landing",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope }
  );

  return (
    <section id="top" className="landing" ref={scope}>
      <div className="container landing-grid">
        <div className="landing-copy">
          <div className="file-panel landing-panel">
            <div className="file-tab-bar">
              <span className="file-tab-dots">
                <span />
                <span />
                <span />
              </span>
              <span className="file-tab-name">intro.ts</span>
            </div>
            <pre className="landing-code">
              {/* Added inline styles here to force Bold Black on the entire block */}
              <code style={{ fontWeight: "bold", color: "black" }}>
                <span className="landing-code-line">
                  <span style={{ color: "red" }}>name</span>: "{profile.name}",
                </span>
                <span className="landing-code-line">
                  <span style={{ color: "red" }}>role</span>: "{profile.role}",
                </span>
                <span className="landing-code-line">
                  <span style={{ color: "red" }}>focus</span>: [
                  {profile.focus.map((f, i) => (
                    <span key={f}>
                      "{f}"
                      {i < profile.focus.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  ],
                </span>
              </code>
            </pre>
          </div>

          <h1 className="landing-heading">
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
            {profile.tagline}
          </h1>

          <div className="landing-actions">
            <a href="#work" className="btn btn-solid">
              see the work
            </a>
            <a href={`mailto:${profile.email}`} className="btn">
              get in touch
            </a>
          </div>
        </div>

        <div className="landing-canvas" aria-hidden="true">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}