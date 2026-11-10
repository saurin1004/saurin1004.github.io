import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCopy, FiFileText } from "react-icons/fi";
import Seo from "../components/Seo";
import {
  Reveal,
  SocialIcon,
  TechIcon,
  logoSrc,
  useGithubRepoCount,
} from "../components/ui";
import { copyText } from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import {
  about,
  experience,
  profile,
  featuredProjects,
  skills,
  socialLinks,
  stats,
  githubFallbackRepoCount,
} from "../portfolio";

function Terminal() {
  const latest = experience[0].items[0];
  const K = ({ children }) => <span className="t-key">"{children}"</span>;
  const S = ({ children }) => <span className="t-str">"{children}"</span>;
  return (
    <div className="terminal" aria-label="Profile summary">
      <div className="terminal-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>~/saurin — zsh</span>
      </div>
      <div className="terminal-body">
        <span className="t-prompt">❯</span> cat whoami.json{"\n"}
        {"{\n"}
        {"  "}
        <K>name</K>: <S>{profile.name}</S>,{"\n"}
        {"  "}
        <K>role</K>: <S>{latest.title}</S>,{"\n"}
        {"  "}
        <K>at</K>: <S>{latest.company}</S>,{"\n"}
        {"  "}
        <K>studying</K>: <S>M.S. CS @ ASU</S>,{"\n"}
        {"  "}
        <K>gpa</K>: <span className="t-num">4.00</span>,{"\n"}
        {"  "}
        <K>stack</K>: [<S>Java</S>, <S>Python</S>, <S>Kafka</S>,{"\n"}
        {"            "}
        <S>Spring Boot</S>, <S>FastAPI</S>],{"\n"}
        {"  "}
        <K>based_in</K>: <S>Boston, MA</S>,{"\n"}
        {"  "}
        <K>open_to_work</K>:{" "}
        <span className="t-num">{String(profile.openToWork)}</span>
        {"\n"}
        {"}\n"}
        <span className="t-prompt">❯</span> <span className="caret" />
      </div>
    </div>
  );
}

export default function Home({ toast }) {
  const firstName = profile.name.split(" ")[0];
  const recent = experience.flatMap((g) => g.items).slice(0, 3);
  const repoCount = useGithubRepoCount(profile.handle, githubFallbackRepoCount);

  return (
    <>
      <Seo path="/" />

      {/* Hero */}
      <section className="hero container">
        <div className="hero-grid">
          <Reveal>
            <span className="status-pill">
              <span className="pulse" aria-hidden="true" />
              {profile.openToWork ? profile.openTo : profile.currently}
            </span>
            <h1 className="hero-title">
              Hi, I'm {firstName}
              <span className="accent">.</span>
              <br />I build systems that hold up.
            </h1>
            <p className="hero-role">
              {profile.role}
              <span className="sep">/</span>
              {profile.currently.replace(`${profile.role} at `, "")}
              <span className="sep">/</span>
              M.S. CS, ASU
            </p>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                See my work <FiArrowRight aria-hidden="true" />
              </Link>
              <Link to="/resume" className="btn">
                <FiFileText aria-hidden="true" /> Résumé
              </Link>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() =>
                  copyText(profile.email).then(() => toast("Email copied"))
                }
              >
                <FiCopy aria-hidden="true" /> Copy email
              </button>
            </div>
            <div className="hero-socials">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  className="icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Terminal />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="container">
        <Reveal className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">
                {s.id === "repos" ? repoCount : s.value}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* About */}
      <section className="section container" id="about">
        <div className="about-grid">
          <Reveal>
            <div className="eyebrow">about</div>
            <h2 className="section-title">
              Reliable software, built with care for the people using it.
            </h2>
          </Reveal>
          <Reveal className="about-text" delay={100}>
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="section container" id="skills">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">what i do</div>
            <h2 className="section-title">Skills &amp; toolbox</h2>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 90}
              className="card skill-card"
            >
              <span className="skill-index">0{i + 1}</span>
              <h3>{group.title}</h3>
              <p className="summary">{group.summary}</p>
              <ul className="skill-points">
                {group.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="tool-grid">
                {group.tools.map((t) => (
                  <span className="tool" key={t.name}>
                    <TechIcon icon={t.icon} color={t.color} />
                    {t.name}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience preview */}
      <section className="section container">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">experience</div>
            <h2 className="section-title">Where I've worked</h2>
          </div>
          <Link to="/experience" className="link-arrow">
            Full experience <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="mini-list">
          {recent.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <Link to="/experience" className="card card-hover mini-item">
                <img src={logoSrc(job.logo)} alt="" />
                <div>
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </div>
                <span className="tl-dates">
                  {job.start} – {job.end}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects preview */}
      <section className="section container">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">projects</div>
            <h2 className="section-title">Selected work</h2>
          </div>
          <Link to="/projects" className="link-arrow">
            All projects <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="featured-grid">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard project={p} featured />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section container">
        <Reveal className="cta-band">
          <div>
            <h2>Building something that needs to stay up? Let's talk.</h2>
            <p>
              {profile.openToWork
                ? `${profile.openTo}.`
                : "Happy to chat about engineering, ML or anything I've built."}
            </p>
          </div>
          <Link to="/contact" className="btn">
            Get in touch <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
