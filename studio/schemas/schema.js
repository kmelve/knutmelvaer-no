// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import person from './documents/person'
import presentation from './documents/presentation'
import publication from './documents/publication'
import category from './documents/category'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

import * as deck from './deck'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import personReference from './objects/personReference'
import twitter from './objects/twitter'
import codepen from './objects/codepen'
import youtube from './objects/youtube'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    ...Object.values(deck),
    siteSettings,
    post,
    category,
    person,
    codepen,
    presentation,
    publication,
    mainImage,
    personReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    twitter,
    youtube

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
