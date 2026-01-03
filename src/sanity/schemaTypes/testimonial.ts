import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'author',
            title: 'Parent Name',
            type: 'string',
            description: 'e.g. Sarah M.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'e.g. Parent of U9 player',
            initialValue: 'Parent',
        }),
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.required().max(200),
        }),
        defineField({
            name: 'rating',
            title: 'Rating (1-5)',
            type: 'number',
            options: {
                list: [5, 4, 3, 2, 1]
            },
            initialValue: 5,
            validation: (rule) => rule.required().min(1).max(5),
        }),
    ],
    preview: {
        select: {
            title: 'author',
            subtitle: 'role',
        },
    },
})
