import React from "react";
import Seo from "../components/Seo";
import { PageHead, Reveal, logoSrc } from "../components/ui";
import { experience } from "../portfolio";

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience"
        path="/experience"
        description="Saurin Prajapati's work experience: Wikimedia Foundation, Sutra Management and Tecblic."
      />
      <PageHead
        eyebrow="experience"
        title="Where I've worked"
        lead="Backend services, event pipelines and ML integrations, shipped to production across four countries."
      />
      <section className="container">
        {experience.map((group) => (
          <div key={group.group}>
            <h2 className="tl-group-title">{group.group}</h2>
            <ol className="timeline">
              {group.items.map((job) => (
                <Reveal
                  as="li"
                  className="tl-item"
                  key={`${job.company}-${job.start}`}
                >
                  <img className="tl-logo" src={logoSrc(job.logo)} alt="" />
                  <article className="card tl-card">
                    <div className="tl-top">
                      <h3 className="tl-title">
                        {job.title} <span className="muted">@</span>{" "}
                        {job.url ? (
                          <a
                            className="tl-company"
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {job.company}
                          </a>
                        ) : (
                          <span className="tl-company">{job.company}</span>
                        )}
                      </h3>
                      <span className="tl-dates">
                        {job.start} –{" "}
                        <span className={job.end === "Present" ? "now" : ""}>
                          {job.end}
                        </span>
                      </span>
                    </div>
                    <p className="tl-location">{job.location}</p>
                    <ul className="tl-points">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <div className="tag-list">
                      {job.stack.map((s) => (
                        <span className="tag" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </>
  );
}
