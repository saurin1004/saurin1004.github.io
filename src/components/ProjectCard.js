import React from "react";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

const year = (p) => new Date(p.createdAt).getFullYear();

/* One project. `featured` shows the headline, highlights and both links. */
export default function ProjectCard({ project: p, featured = false }) {
  const labels = p.labels || [];
  if (!featured) {
    return (
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card card-hover project-card"
      >
        <div className="project-top">
          <span>{year(p)}</span>
          <FiArrowUpRight aria-hidden="true" />
        </div>
        <h3>{p.name}</h3>
        {labels.length > 0 && (
          <div className="label-row">
            {labels.map((l) => (
              <span className="label" key={l}>
                {l}
              </span>
            ))}
          </div>
        )}
        <p>{p.description}</p>
        <div className="tag-list">
          {p.languages.map((l) => (
            <span className="tag" key={l.name}>
              {l.name}
            </span>
          ))}
        </div>
      </a>
    );
  }

  return (
    <article className="card project-card featured-card">
      <div className="project-top">
        <span className="featured-index">0{p.featured} · featured</span>
        <span>{year(p)}</span>
      </div>
      <h3>{p.title || p.name}</h3>
      <p className="featured-repo mono">{p.name}</p>
      <p>{p.description}</p>
      {p.highlights && (
        <ul className="highlights">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <div className="tag-list">
        {p.languages.map((l) => (
          <span className="tag" key={l.name}>
            {l.name}
          </span>
        ))}
      </div>
      <div className="featured-links">
        {p.demo && (
          <a
            className="btn btn-primary"
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink aria-hidden="true" /> Live demo
          </a>
        )}
        <a
          className="btn"
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub aria-hidden="true" /> Code
        </a>
      </div>
    </article>
  );
}
