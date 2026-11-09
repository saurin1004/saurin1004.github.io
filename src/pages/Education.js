import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Seo from "../components/Seo";
import { PageHead, Reveal, TechIcon, logoSrc } from "../components/ui";
import { certifications, codingProfiles, degrees } from "../portfolio";

export default function Education() {
  return (
    <>
      <Seo
        title="Education"
        path="/education"
        description="Saurin Prajapati's education: M.S. Computer Science at Arizona State University, B.Tech at Nirma University, plus certifications."
      />
      <PageHead
        eyebrow="education"
        title="Always learning"
        lead="Graduate study in distributed systems, security and machine learning, on top of a computer-engineering foundation."
      />

      <section className="container">
        {degrees.map((d) => (
          <Reveal key={d.school} className="card degree">
            <img className="degree-logo" src={logoSrc(d.logo)} alt="" />
            <div>
              <h3>
                <a href={d.url} target="_blank" rel="noopener noreferrer">
                  {d.school}
                </a>
              </h3>
              <div className="degree-meta">
                <span>{d.degree}</span>
                <span className="mono">{d.duration}</span>
                <span className="gpa">GPA {d.gpa}</span>
              </div>
              <div className="course-label">Coursework</div>
              <div className="tag-list">
                {d.coursework.map((c) => (
                  <span key={c} className="tag">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="section container">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">certifications</div>
            <h2 className="section-title">Certifications</h2>
            <p className="section-sub">
              {certifications.length} courses and credentials, each linked to
              its verification page.
            </p>
          </div>
        </Reveal>
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal key={`${c.title}-${i}`} delay={(i % 3) * 60}>
              <a
                className="card card-hover cert"
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logoSrc(c.logo)} alt="" />
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.issuer}</p>
                </div>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">practice</div>
            <h2 className="section-title">Competitive programming</h2>
          </div>
        </Reveal>
        <Reveal className="profile-row">
          {codingProfiles.map((p) => (
            <a
              key={p.name}
              className="card card-hover profile-link"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TechIcon icon={p.icon} color={p.color} size={22} />
              {p.name}
              <FiArrowUpRight aria-hidden="true" className="muted" />
            </a>
          ))}
        </Reveal>
      </section>
    </>
  );
}
