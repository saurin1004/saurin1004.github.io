import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Seo from "../components/Seo";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <section className="container notfound">
      <Seo title="Not found" path={pathname} />
      <div className="code">404 · GET {pathname}</div>
      <h1>This route returned nothing.</h1>
      <p>
        The page you're looking for doesn't exist. Press{" "}
        <span className="kbd">/</span> to search, or head home.
      </p>
      <Link to="/" className="btn btn-primary">
        <FiArrowLeft aria-hidden="true" /> Back home
      </Link>
    </section>
  );
}
