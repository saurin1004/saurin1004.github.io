import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import Seo from "../components/Seo";
import { PageHead, Reveal, driveLinks } from "../components/ui";
import { profile } from "../portfolio";

export default function Resume() {
  const { preview, download } = driveLinks(profile.resumeLink);
  return (
    <>
      <Seo title="Résumé" path="/resume" />
      <PageHead
        eyebrow="résumé"
        title="Résumé"
        lead="The one-page version. Always the latest copy, straight from my Drive."
      >
        <div className="hero-cta">
          <a href={download} className="btn btn-primary">
            <FiDownload aria-hidden="true" /> Download PDF
          </a>
          <a
            href={profile.resumeLink}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink aria-hidden="true" /> Open in Drive
          </a>
        </div>
      </PageHead>
      <section className="container">
        <Reveal>
          <iframe
            className="resume-frame"
            src={preview}
            title={`${profile.name} résumé`}
            loading="lazy"
            allow="autoplay"
          />
        </Reveal>
      </section>
    </>
  );
}
