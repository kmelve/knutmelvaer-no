import PicoSanity from 'picosanity'

import { config } from './config'

export const sanityClient = new PicoSanity(config)

export const getClient = () => sanityClient

