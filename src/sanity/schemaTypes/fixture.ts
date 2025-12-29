import { defineField, defineType } from 'sanity'

export const fixture = defineType({
    name: 'fixture',
    title: 'Match Fixture',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Match Title',
            type: 'string',
            description: 'e.g., Nepzum FC vs Bromley',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'opponent',
            title: 'Opponent Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Kick-off Date/Time',
            type: 'datetime',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'isHome',
            title: 'Home Match?',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            initialValue: 'Plumstead Common',
        }),
        defineField({
            name: 'opponentLogo',
            title: 'Opponent Logo',
            type: 'image',
        }),
        defineField({
            name: 'result',
            title: 'Result (Optional)',
            type: 'object',
            fields: [
                { name: 'homeScore', type: 'number', title: 'Home Score' },
                { name: 'awayScore', type: 'number', title: 'Away Score' },
            ],
            options: {
                collapsible: true, // Make it collapsible so it doesn't take up space if not needed
                collapsed: true,
            }
        }),
    ],
    preview: {
        select: {
            title: 'title',
            date: 'date',
        },
        prepare({ title, date }) {
            return {
                title: title,
                subtitle: date ? new Date(date).toLocaleDateString() : 'No date set',
            }
        },
    },
})
