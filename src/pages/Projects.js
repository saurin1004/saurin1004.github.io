import React, { useMemo, useState } from "react";
import { FiArrowUpRight, FiGithub, FiSearch } from "react-icons/fi";
import Seo from "../components/Seo";
import { PageHead, Reveal, useGithubRepoCount } from "../components/ui";
import { githubFallbackRepoCount, profile, projects } from "../portfolio";

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

  const shown = projects.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      `${p.name} ${p.description} ${p.languages.map((l) => l.name).join(" ")}`
        .toLowerCase()
        .includes(q);
    const matchesTech =
      tech === "All" || p.languages.some((l) => l.name === tech);
    return matchesQuery && matchesTech;
  });

  return (
    <>
      <Seo
        title="Projects"
        path="/projects"
        description="Projects by Saurin Prajapati: cloud autoscaling, blockchain, search and machine learning."
      />
      <PageHead
        eyebrow="projects"
        title="Things I've built"
        lead="A hand-picked selection of cloud pipelines, blockchain apps, search and ML deployments. Filter by tech or search for something specific."
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

        {shown.length === 0 ? (
          <p className="empty">No projects match that filter yet.</p>
        ) : (
          <div className="project-grid">
            {shown.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover project-card"
              >
                <div className="project-top">
                  <span>
                    {new Date(p.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <FiArrowUpRight aria-hidden="true" />
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="tag-list">
                  {p.languages.map((l) => (
                    <span className="tag" key={l.name}>
                      {l.name}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
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
