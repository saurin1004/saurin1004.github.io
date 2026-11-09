import React from "react";
import { FiArrowUpRight, FiCopy, FiMapPin, FiSend } from "react-icons/fi";
import Seo from "../components/Seo";
import { PageHead, Reveal, SocialIcon } from "../components/ui";
import { copyText } from "../components/Layout";
import { profile, socialLinks } from "../portfolio";

export default function Contact({ toast }) {
  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Get in touch with Saurin Prajapati by email, LinkedIn or GitHub."
      />
      <PageHead
        eyebrow="contact"
        title="Say hello"
        lead="Whether it's a role, a project or a question about something I've built, my inbox is open."
      />
      <section className="container">
        <Reveal className="card contact-hero">
          <span className="eyebrow" style={{ marginBottom: 0 }}>
            email
          </span>
          <div className="contact-email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="hero-cta" style={{ marginTop: 0 }}>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <FiSend aria-hidden="true" /> Write an email
            </a>
            <button
              type="button"
              className="btn"
              onClick={() =>
                copyText(profile.email).then(() => toast("Email copied"))
              }
            >
              <FiCopy aria-hidden="true" /> Copy address
            </button>
          </div>
          <p
            className="muted"
            style={{ display: "flex", gap: 8, alignItems: "center" }}
          >
            <FiMapPin aria-hidden="true" /> {profile.location}
          </p>
        </Reveal>

        <div className="contact-grid">
          {socialLinks
            .filter((s) => !s.link.startsWith("mailto"))
            .map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <a
                  className="card card-hover social-card"
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon name={s.icon} />
                  <div>
                    <div className="name">{s.name}</div>
                    <div className="handle">@{s.handle}</div>
                  </div>
                  <FiArrowUpRight className="go" aria-hidden="true" />
                </a>
              </Reveal>
            ))}
        </div>
      </section>
    </>
  );
}
