import sanityClient from "@sanity/client";
import { config } from "./config";

export const getServerSideClient = (SANITY_WRITE_TOKEN?: string) => {
  if (!SANITY_WRITE_TOKEN) {
    console.error("No write token");
  }
  return sanityClient({
    ...config,
    token: SANITY_WRITE_TOKEN,
    useCdn: false,
  });
};
