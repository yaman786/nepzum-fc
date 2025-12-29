import { type SchemaTypeDefinition } from 'sanity'

import { post } from './post'
import { fixture } from './fixture'
import { player } from './player'
import { program } from './program'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, fixture, player, program],
}
