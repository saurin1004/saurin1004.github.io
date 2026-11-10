import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiCopy,
  FiFileText,
  FiHome,
  FiMenu,
  FiMoon,
  FiSearch,
  FiSend,
  FiSun,
  FiX,
} from "react-icons/fi";
import { Mark, SocialIcon } from "./ui";
import { profile, socialLinks } from "../portfolio";

export const NAV = [
  { to: "/", label: "Home", icon: FiHome, exact: true },
  { to: "/experience", label: "Experience", icon: FiBriefcase },
  { to: "/projects", label: "Projects", icon: FiCode },
  { to: "/education", label: "Education", icon: FiBookOpen },
  { to: "/resume", label: "Résumé", icon: FiFileText },
  { to: "/contact", label: "Contact", icon: FiSend },
];

const isMac =
  typeof navigator !== "undefined" &&
  /Mac|iPhone|iPad/.test(navigator.platform);

/* ---------- theme ---------- */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta)
      meta.setAttribute("content", theme === "dark" ? "#0c0f14" : "#f6f4ef");
  }, [theme]);
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage blocked: theme still switches for this visit */
      }
      return next;
    });
  }, []);
  return [theme, toggle];
}

/* ---------- toast ---------- */
export function useToast() {
  const [msg, setMsg] = useState(null);
  const timer = useRef();
  const show = useCallback((text) => {
    setMsg(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(null), 1800);
  }, []);
  const node = msg ? (
    <div className="toast" role="status">
      {msg}
    </div>
  ) : null;
  return [show, node];
}

export function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  return Promise.resolve();
}

/* ---------- nav ---------- */
export function Nav({ theme, onToggleTheme, onOpenPalette }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Main">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label={`${profile.name}, home`}>
          <Mark />
          <span className="brand-name">
            saurin<b>.</b>prajapati
          </span>
        </Link>
        <ul className={`nav-links ${open ? "open" : ""}`} id="nav-links">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                exact={item.exact}
                activeClassName="active"
                isActive={
                  item.to === "/"
                    ? (match, loc) => ["/", "/home"].includes(loc.pathname)
                    : undefined
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="cmdk-trigger"
            onClick={onOpenPalette}
            aria-label="Open command menu"
          >
            <FiSearch aria-hidden="true" />
            <span className="cmdk-label">Jump to…</span>
            <span className="kbd">{isMac ? "⌘K" : "Ctrl K"}</span>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
            title="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="icon-btn menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ---------- footer ---------- */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built by
          me in {profile.location.split(",")[0]}.
        </p>
        <div className="footer-links">
          {socialLinks.slice(0, 3).map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.name}
            </a>
          ))}
          <a
            href={profile.sourceRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`icon-btn to-top ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
    >
      <FiArrowUp />
    </button>
  );
}

/* ---------- command palette (⌘K / Ctrl+K) ---------- */
export function CommandPalette({ open, onClose, onToggleTheme, toast }) {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const actions = useMemo(() => {
    const ext = (url) => () =>
      window.open(url, "_blank", "noopener,noreferrer");
    return [
      ...NAV.map((n) => ({
        group: "Pages",
        label: n.label,
        icon: n.icon,
        run: () => history.push(n.to),
      })),
      {
        group: "Actions",
        label: "Copy email address",
        icon: FiCopy,
        hint: profile.email,
        run: () => copyText(profile.email).then(() => toast("Email copied")),
      },
      {
        group: "Actions",
        label: "Toggle light / dark theme",
        icon: FiSun,
        run: onToggleTheme,
      },
      ...socialLinks
        .filter((s) => !s.link.startsWith("mailto"))
        .map((s) => ({
          group: "Elsewhere",
          label: s.name,
          icon: (p) => <SocialIcon name={s.icon} {...p} />,
          hint: "↗",
          run: ext(s.link),
        })),
      {
        group: "Elsewhere",
        label: "View this site's source",
        icon: FiArrowUpRight,
        hint: "↗",
        run: ext(profile.sourceRepo),
      },
    ];
  }, [history, onToggleTheme, toast]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) =>
      `${a.group} ${a.label}`.toLowerCase().includes(q)
    );
  }, [actions, query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
    }
  }, [open]);
  useEffect(() => setIndex(0), [query]);

  // Keep the highlighted item visible while moving with the arrow keys.
  useEffect(() => {
    const list = listRef.current;
    if (!open || !list) return;
    if (index === 0) {
      list.scrollTop = 0; // also reveals the first group heading
      return;
    }
    const item = list.querySelector(`#cmdk-${index}`);
    if (!item) return;
    // If the item starts a group, keep its heading in view too.
    const heading = item.previousElementSibling;
    const top =
      heading && heading.classList.contains("cmdk-group") ? heading : item;
    if (top.offsetTop < list.scrollTop) {
      list.scrollTop = top.offsetTop - 8;
    } else if (
      item.offsetTop + item.offsetHeight >
      list.scrollTop + list.clientHeight
    ) {
      list.scrollTop =
        item.offsetTop + item.offsetHeight - list.clientHeight + 8;
    }
  }, [index, open]);

  if (!open) return null;

  const run = (a) => {
    onClose();
    a.run();
  };
  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[index]) {
      e.preventDefault();
      run(results[index]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  let lastGroup = null;
  return (
    <div
      className="cmdk-overlay"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="cmdk"
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
      >
        <div className="cmdk-input">
          <FiSearch aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Where to? Try “projects” or “email”"
            aria-label="Search commands"
            aria-controls="cmdk-list"
            aria-activedescendant={results[index] ? `cmdk-${index}` : undefined}
          />
          <span className="kbd">esc</span>
        </div>
        <ul className="cmdk-list" id="cmdk-list" role="listbox" ref={listRef}>
          {results.length === 0 && <li className="cmdk-group">No matches</li>}
          {results.map((a, i) => {
            const Icon = a.icon;
            const header =
              a.group !== lastGroup ? (
                <li
                  className="cmdk-group"
                  role="presentation"
                  key={`g-${a.group}`}
                >
                  {a.group}
                </li>
              ) : null;
            lastGroup = a.group;
            return (
              <React.Fragment key={`${a.group}-${a.label}`}>
                {header}
                <li
                  id={`cmdk-${i}`}
                  role="option"
                  aria-selected={i === index}
                  className="cmdk-item"
                  onMouseMove={() => setIndex(i)}
                  onClick={() => run(a)}
                >
                  <Icon aria-hidden="true" />
                  {a.label}
                  {a.hint && <span className="hint">{a.hint}</span>}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
        <div className="cmdk-foot">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
