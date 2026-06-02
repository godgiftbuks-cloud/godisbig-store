// ─────────────────────────────────────────────────────────────────────────
//  SOCIAL — update the brand's social handles/links here (used everywhere:
//  footer, the "Join the collective" CTA, etc.). Placeholder URLs for now.
// ─────────────────────────────────────────────────────────────────────────

export type Platform = "instagram" | "tiktok" | "youtube" | "x";

export type Social = {
  name: string;
  platform: Platform;
  handle: string;
  href: string;
};

export const socials: Social[] = [
  { name: "Instagram", platform: "instagram", handle: "@godisbig", href: "https://instagram.com/godisbig" },
  { name: "TikTok", platform: "tiktok", handle: "@godisbig", href: "https://www.tiktok.com/@godisbig" },
  { name: "YouTube", platform: "youtube", handle: "GodIsBig", href: "https://www.youtube.com/@godisbig" },
  { name: "X", platform: "x", handle: "@godisbig", href: "https://x.com/godisbig" },
];
