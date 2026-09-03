import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { useReveal } from "../hooks/useReveal";
import { profile } from "../data/profile";
import "./styles/Contact.css";

export default function Contact() {
  const year = new Date().getFullYear();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section contact alt-bg">
      <div className={`container reveal ${visible ? "is-visible" : ""}`} ref={ref}>
        <div className="section-head">
          <h2>Get in touch</h2>
          <span className="section-index">06</span>
        </div>

        <p className="contact-lead">
          Have a dashboard, report, or data project in mind? My inbox is
          open.
        </p>

        <a href={`mailto:${profile.email}`} className="contact-email">
          {profile.email}
        </a>

        <div className="contact-footer">
          <div className="contact-socials">
            {profile.social.github && (
              <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
            )}
            {profile.social.linkedin && (
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            )}
            {profile.social.whatsapp && (
              <a href={profile.social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            )}
            {profile.social.upwork && (
              <a href={profile.social.upwork} target="_blank" rel="noreferrer" aria-label="Upwork">
                <SiUpwork />
              </a>
            )}
          </div>
          <span className="contact-meta">
            © {year} {profile.name} · {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
