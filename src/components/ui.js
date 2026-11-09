import React, { useEffect, useRef, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

/* Live public-repo count from the GitHub API, cached for an hour per visitor
   (the unauthenticated API allows 60 requests per hour per IP). */
const REPO_CACHE_KEY = "gh-public-repos";
export function useGithubRepoCount(username, fallback) {
  const [count, setCount] = useState(() => {
    try {
      const cached = JSON.parse(sessionStorage.getItem(REPO_CACHE_KEY));
      if (cached && Date.now() - cached.t < 3600 * 1000) return cached.n;
    } catch (e) {
      /* storage unavailable */
    }
    return fallback;
  });
  useEffect(() => {
    let cancelled = false;
    try {
      const cached = JSON.parse(sessionStorage.getItem(REPO_CACHE_KEY));
      if (cached && Date.now() - cached.t < 3600 * 1000) return undefined;
    } catch (e) {
      /* ignore */
    }
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        if (cancelled || typeof data.public_repos !== "number") return;
        setCount(data.public_repos);
        try {
          sessionStorage.setItem(
            REPO_CACHE_KEY,
            JSON.stringify({ n: data.public_repos, t: Date.now() })
          );
        } catch (e) {
          /* ignore */
        }
      })
      .catch(() => {
        /* keep the fallback */
      });
    return () => {
      cancelled = true;
    };
  }, [username]);
  return count;
}

/* Fade/slide an element in the first time it scrolls into view. */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* Tech logo from the Iconify API. Multicolour sets render as <img>,
   monochrome sets are masked so they pick up a brand colour or the text colour. */
const MULTICOLOR = ["logos:", "devicon:", "material-icon-theme:"];
export function TechIcon({ icon, color, size = 16, label }) {
  const [prefix, name] = icon.split(":");
  const src = `https://api.iconify.design/${prefix}/${name}.svg`;
  if (MULTICOLOR.some((p) => icon.startsWith(p))) {
    return (
      <img
        src={src}
        width={size}
        height={size}
        alt={label || ""}
        loading="lazy"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        flex: "none",
        backgroundColor: color || "currentColor",
        WebkitMask: `url(${src}) center / contain no-repeat`,
        mask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
}

const SOCIAL_ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
  leetcode: SiLeetcode,
  hackerrank: SiHackerrank,
};
export function SocialIcon({ name, ...rest }) {
  const Icon = SOCIAL_ICONS[name] || FiGithub;
  return <Icon aria-hidden="true" {...rest} />;
}

/* The SP monogram used as the site's mark and favicon. */
export function Mark({ className = "brand-mark" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="var(--text)" />
      <path
        d="M27.5 22.5c-1.6-2-4-3-6.8-3-4 0-6.7 2.2-6.7 5.4 0 7.4 13.7 4.6 13.7 12.4 0 3.5-3 6.2-7.4 6.2-3.2 0-5.9-1.3-7.6-3.6"
        fill="none"
        stroke="var(--bg)"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <path
        d="M34.5 44V20h7.6c4.6 0 7.6 2.8 7.6 7s-3 7-7.6 7h-7.6"
        fill="none"
        stroke="var(--bg)"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="52" cy="44" r="3.2" fill="var(--accent)" />
    </svg>
  );
}

export function PageHead({ eyebrow, title, lead, children }) {
  return (
    <header className="page-head container">
      <Reveal>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="page-title">
          {title}
          <span className="dot">.</span>
        </h1>
        {lead && <p className="page-lead">{lead}</p>}
        {children}
      </Reveal>
    </header>
  );
}

/* Turn a Google Drive "view" link into embed + direct download links. */
export function driveLinks(url) {
  const match = /\/d\/([^/]+)/.exec(url || "");
  if (!match) return { preview: url, download: url };
  const id = match[1];
  return {
    preview: `https://drive.google.com/file/d/${id}/preview`,
    download: `https://drive.google.com/uc?export=download&id=${id}`,
  };
}

export function logoSrc(file) {
  try {
    return require(`../assets/logos/${file}`);
  } catch (e) {
    return "";
  }
}
