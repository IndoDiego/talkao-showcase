// Prefixes a public-folder path with the configured basePath so static export
// works when the site is hosted under a sub-path (e.g. talkao.com/ecosystem).
// Keep in sync with next.config.ts → basePath.
const BASE_PATH = "/ecosystem";

export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
