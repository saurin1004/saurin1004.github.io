import React from "react";
import { Helmet } from "react-helmet";
import { profile, seo, siteUrl, socialLinks } from "../portfolio";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  worksFor: { "@type": "Organization", name: "Wikimedia Foundation" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Arizona State University" },
    { "@type": "CollegeOrUniversity", name: "Nirma University" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boston",
    addressRegion: "MA",
    addressCountry: "US",
  },
  sameAs: socialLinks
    .filter((s) => !s.link.startsWith("mailto"))
    .map((s) => s.link),
};

export default function Seo({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} · ${profile.name}` : seo.title;
  const desc = description || seo.description;
  const url = `${siteUrl}${path === "/" ? "/" : path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <script type="application/ld+json">{JSON.stringify(personLd)}</script>
    </Helmet>
  );
}
