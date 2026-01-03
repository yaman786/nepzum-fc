import { type SchemaTypeDefinition } from 'sanity'

import { post } from './post'
import { fixture } from './fixture'
import { player } from './player'
import { coach } from './coach'
import { program } from './program'
import { pricing } from './pricing'
import { gallery } from './gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, fixture, player, coach, program, pricing, gallery],
}
