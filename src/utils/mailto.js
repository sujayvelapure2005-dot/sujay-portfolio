/** Build a mailto: href from a contact form's fields (no backend required). */
export function buildMailto({ to, subject, body }) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${encodeURIComponent(to)}${qs ? `?${qs}` : ""}`;
}

/** Small helper to call a function or fall back to a URL. */
export function openExternal(url, target = "_blank") {
  window.open(url, target, "noopener,noreferrer");
}