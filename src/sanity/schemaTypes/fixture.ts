import { defineField, defineType } from 'sanity'

export const fixture = defineType({
    name: 'fixture',
    title: 'Match Fixture',
    type: 'document',
    icon: () => '⚽',
    fields: [
        defineField({
            name: 'opponent',
            title: 'Opponent Team',
            type: 'string',
            description: 'Who are we playing against? (e.g., "Charlton Youth")',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ageGroup',
            title: 'Our Team',
            type: 'string',
            description: 'Which Nepzum FC squad is playing?',
            options: {
                list: [
                    { title: 'U7-U8 Juniors', value: 'U7-U8' },
                    { title: 'U9-U10 Development', value: 'U9-U10' },
                    { title: 'U11-U12 Academy', value: 'U11-U12' },
                    { title: 'U13-U16 Youth', value: 'U13-U16' },
                ],
                layout: 'dropdown',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Match Date & Time',
            type: 'datetime',
            description: 'When is kick-off?',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'isHome',
            title: 'Home Match?',
            type: 'boolean',
            description: 'Toggle ON if we are playing at home.',
            initialValue: true,
        }),
        defineField({
            name: 'location',
            title: 'Venue',
            type: 'string',
            description: 'Where is the match? (Auto-filled for home games)',
            initialValue: 'Plumstead Common',
        }),
        defineField({
            name: 'competition',
            title: 'Competition',
            type: 'string',
            description: 'What competition is this?',
            options: {
                list: [
                    { title: 'League Match', value: 'League' },
                    { title: 'Cup Match', value: 'Cup' },
                    { title: 'Friendly', value: 'Friendly' },
                    { title: 'Tournament', value: 'Tournament' },
                ],
            },
            initialValue: 'League',
        }),
        defineField({
            name: 'result',
            title: 'Match Result (After Game)',
            type: 'object',
            description: 'Fill this in after the match is played.',
            fields: [
                {
                    name: 'ourScore',
                    type: 'number',
                    title: 'Our Score',
                    description: 'How many goals did Nepzum FC score?',
                },
                {
                    name: 'theirScore',
                    type: 'number',
                    title: 'Their Score',
                    description: 'How many goals did the opponent score?',
                },
            ],
            options: {
                collapsible: true,
                collapsed: true,
            }
        }),
    ],
    preview: {
        select: {
            opponent: 'opponent',
            ageGroup: 'ageGroup',
            date: 'date',
            isHome: 'isHome',
            ourScore: 'result.ourScore',
            theirScore: 'result.theirScore',
        },
        prepare({ opponent, ageGroup, date, isHome, ourScore, theirScore }) {
            const hasResult = ourScore !== undefined && theirScore !== undefined;
            const resultText = hasResult ? ` (${ourScore}-${theirScore})` : '';
            const homeAway = isHome ? '🏠' : '✈️';

            return {
                title: `${homeAway} vs ${opponent}${resultText}`,
                subtitle: `${ageGroup || 'TBD'} • ${date ? new Date(date).toLocaleDateString('en-GB') : 'Date TBD'}`,
            }
        },
    },
    orderings: [
        {
            title: 'Upcoming Matches',
            name: 'dateAsc',
            by: [{ field: 'date', direction: 'asc' }],
        },
    ],
})
