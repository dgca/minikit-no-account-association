const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header:
      "eyJmaWQiOjYxNjIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg4NTIxQkZFNjgwOTVDYURBYTFEZWZGZjJjN0NjNTMyNGJlMzcyRThmIn0",
    payload:
      "eyJkb21haW4iOiJtaW5pa2l0LW5vLWFjY291bnQtYXNzb2NpYXRpb24udmVyY2VsLmFwcCJ9",
    signature:
      "R7K+rLf38jCJka1KccS3xtQqNESdKWqK3bv6H6eOChRMtK09TgxsEXEGmq0MukMoFHZfgEEwrfIMG6G2RWFJ3hw=",
  },
  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "minikit-no-account-association",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
