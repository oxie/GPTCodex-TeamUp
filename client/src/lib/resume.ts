const assetPath = "assets/ValentinPetrov-CV-last-2024-3.pdf";

const baseUrl = import.meta.env.BASE_URL ?? "/";
const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const normalizedPath = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;

export const resumeUrl = `${normalizedBase}${normalizedPath}`;
