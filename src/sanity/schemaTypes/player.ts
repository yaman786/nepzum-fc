import { defineField, defineType } from 'sanity'

export const player = defineType({
    name: 'player',
    title: 'Player Profile',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'squad',
            title: 'Squad / Age Group',
            type: 'string',
            options: {
                list: [
                    { title: 'U7-U8 (Juniors)', value: 'U7-U8' },
                    { title: 'U9-U10 (Development)', value: 'U9-U10' },
                    { title: 'U11-U12 (Academy)', value: 'U11-U12' },
                    { title: 'U13-U16 (Youth)', value: 'U13-U16' },
                    { title: 'Coaching Staff', value: 'Coach' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
        }),
        defineField({
            name: 'number',
            title: 'Jersey Number',
            type: 'number',
        }),
        defineField({
            name: 'photo',
            title: 'Profile Photo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'bio',
            title: 'Biography',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
})
