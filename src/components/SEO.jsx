// components/SEO.jsx
import React from "react";

const ensureMetaTag = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const ensureJsonLd = (json) => {
  const scriptId = "seo-jsonld";
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(json);
};

const ensureLink = (rel, href, id) => {
  let link = document.getElementById(id);
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    link.id = id;
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const isLikelyI18nKey = (value) => {
  if (!value || typeof value !== "string") return false;
  const looksLikeKey = value.includes(".") && !/\s/.test(value);
  return looksLikeKey;
};

const SEO = ({ title, description, keywords = [], jsonLd, canonicalPath, alternates }) => {
  React.useEffect(() => {
    if (typeof document === "undefined") return;

    // Avoid setting raw i18n keys before translations load
    if (title && !isLikelyI18nKey(title)) {
      document.title = title;
    }
    if (description && !isLikelyI18nKey(description)) {
      ensureMetaTag("description", description);
    }
    // Normalize keywords to an array safely (supports i18n arrays or comma-separated string)
    const keywordsArray = Array.isArray(keywords)
      ? keywords.filter(Boolean)
      : (typeof keywords === "string"
          ? keywords.split(",").map((k) => k.trim()).filter(Boolean)
          : []);
    if (keywordsArray.length > 0) ensureMetaTag("keywords", keywordsArray.join(", "));

    if (jsonLd) ensureJsonLd(jsonLd);

    // Canonical and alternate links
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    if (canonicalPath) {
      const canonicalUrl = origin + canonicalPath;
      ensureLink("canonical", canonicalUrl, "seo-canonical");
    }
    if (alternates && typeof alternates === "object") {
      Object.entries(alternates).forEach(([lang, path]) => {
        const href = origin + path;
        const id = `seo-alt-${lang}`;
        let link = document.getElementById(id);
        if (!link) {
          link = document.createElement("link");
          link.rel = "alternate";
          link.hreflang = lang === "x-default" ? "x-default" : lang;
          link.id = id;
          document.head.appendChild(link);
        }
        link.setAttribute("href", href);
      });
    }

    return () => {
      const script = document.getElementById("seo-jsonld");
      if (script && script.parentNode) script.parentNode.removeChild(script);
      const canonical = document.getElementById("seo-canonical");
      if (canonical && canonical.parentNode) canonical.parentNode.removeChild(canonical);
      if (alternates && typeof alternates === "object") {
        Object.keys(alternates).forEach((lang) => {
          const el = document.getElementById(`seo-alt-${lang}`);
          if (el && el.parentNode) el.parentNode.removeChild(el);
        });
      }
    };
  }, [
    title,
    description,
    JSON.stringify(keywords),
    JSON.stringify(jsonLd),
    canonicalPath,
    JSON.stringify(alternates)
  ]);

  return null;
};

export default SEO;

