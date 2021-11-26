import imageUrlBuilder from "@sanity/image-url";
import {
  SanityImageObject,
  ImageUrlBuilderOptions,
} from "@sanity/image-url/lib/types/types";

import { sanityClient } from "./getClient";

export const urlFor = (source: SanityImageObject) =>
  imageUrlBuilder(sanityClient).image(source);
