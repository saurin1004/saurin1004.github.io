import React, { useMemo, useState } from "react";
import { FiGithub, FiSearch } from "react-icons/fi";
import Seo from "../components/Seo";
import ProjectCard from "../components/ProjectCard";
import { PageHead, Reveal, useGithubRepoCount } from "../components/ui";
import {
  featuredProjects,
  githubFallbackRepoCount,
  otherProjects,
  profile,
  projects,
} from "../portfolio";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState("All");
  const repoCount = useGithubRepoCount(profile.handle, githubFallbackRepoCount);

  const techs = useMemo(() => {
    const counts = {};
    projects.forEach((p) =>
      p.languages.forEach((l) => {
        counts[l.name] = (counts[l.name] || 0) + 1;
      })
    );
    return [
      "All",
      ...Object.keys(counts)
        .filter((k) => counts[k] > 1)
        .sort((a, b) => counts[b] - counts[a]),
    ];
  }, []);

  const q = query.trim().toLowerCase();
  const filtering = q !== "" || tech !== "All";
  const matches = projects.filter((p) => {
    const text = `${p.name} ${p.title || ""} ${p.description} ${(
      p.highlights || []
    ).join(" ")} ${p.languages.map((l) => l.name).join(" ")} ${(
      p.labels || []
    ).join(" ")}`.toLowerCase();
    return (
      (!q || text.includes(q)) &&
      (tech === "All" || p.languages.some((l) => l.name === tech))
    );
  });

  return (
    <>
      <Seo
        title="Projects"
        path="/projects"
        description="Projects by Saurin Prajapati: a queue-driven autoscaler, a real-time multi-device habit tracker, Kafka and Cassandra streaming, search and ML deployments."
      />
      <PageHead
        eyebrow="projects"
        title="Things I've built"
        lead="Distributed systems, real-time sync, streaming pipelines and ML deployments. The featured three are the ones I'd walk you through first."
      />
      <section className="container">
        <div className="toolbar">
          <label className="search">
            <FiSearch aria-hidden="true" />
            <input
              type="search"
              placeholder="Search projects"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search projects"
            />
          </label>
          <div className="chips" role="group" aria-label="Filter by technology">
            {techs.map((t) => (
              <button
                type="button"
                key={t}
                className="chip"
                aria-pressed={tech === t}
                onClick={() => setTech(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {filtering ? (
          matches.length === 0 ? (
            <p className="empty">No projects match that filter yet.</p>
          ) : (
            <div className="project-grid">
              {matches.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )
        ) : (
          <>
            <h2 className="subsection-title" style={{ marginTop: 8 }}>
              Featured
            </h2>
            <div className="featured-grid">
              {featuredProjects.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProjectCard project={p} featured />
                </Reveal>
              ))}
            </div>
            <h2 className="subsection-title">More projects</h2>
            <div className="project-grid">
              {otherProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </>
        )}

        <Reveal
          style={{ marginTop: 32, display: "flex", justifyContent: "center" }}
        >
          <a
            href={profile.githubProfile}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" /> All {repoCount} public repos on
            GitHub
          </a>
        </Reveal>
      </section>
    </>
  );
}
