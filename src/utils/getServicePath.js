// src/utils/getServicePath.js
// Maps a service title to its detail route based on language and keywords.
// Consolidates duplicated logic across components and prevents drift.

export function getServicePath(title, isAr) {
  const lower = (title || "").toLowerCase();
  if (isAr) {
    if (lower.includes("cloud") || lower.includes("devops")) return "/خدمات-هندسة-السحابة-ودفوبس";
    if (lower.includes("ui") || lower.includes("ux")) return "/خدمات-تصميم-واجهات-وتجربة-المستخدم";
    if (lower.includes("web")) return "/خدمات-تطوير-الويب";
  } else {
    if (lower.includes("cloud") || lower.includes("devops")) return "/cloud-devops-services";
    if (lower.includes("ui") || lower.includes("ux")) return "/ui-ux-design-services";
    if (lower.includes("web")) return "/web-development-services";
  }
  return "/services";
}
