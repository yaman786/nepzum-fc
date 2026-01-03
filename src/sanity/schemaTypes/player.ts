import { defineField, defineType } from 'sanity'

export const player = defineType({
    name: 'player',
    title: 'Player Profile',
    type: 'document',
    icon: () => '👤',
    fields: [
        defineField({
            name: 'name',
            title: 'Player Name',
            type: 'string',
            description: 'Full name of the player or coach.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Address',
            type: 'slug',
            description: '👆 Click "Generate" to create this from the player name.',
            options: {
                source: 'name',
                slugify: (input: string) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9-]/g, '')
                    .slice(0, 96),
            },
            validation: (rule) => rule.required().error('Click "Generate" to create the URL.'),
        }),
        defineField({
            name: 'squad',
            title: 'Team / Squad',
            type: 'string',
            description: 'Which age group does this player belong to?',
            options: {
                list: [
                    { title: '⚽ U7-U8 Juniors', value: 'U7-U8' },
                    { title: '⚽ U9-U10 Development', value: 'U9-U10' },
                    { title: '⚽ U11-U12 Academy', value: 'U11-U12' },
                    { title: '⚽ U13-U16 Youth', value: 'U13-U16' },
                    { title: '🧑‍🏫 Coaching Staff', value: 'Coach' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            description: 'Upload a headshot or action photo.',
            options: { hotspot: true },
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
            description: 'Playing position (e.g., Goalkeeper, Striker, Midfielder).',
            options: {
                list: [
                    { title: 'Goalkeeper', value: 'Goalkeeper' },
                    { title: 'Defender', value: 'Defender' },
                    { title: 'Midfielder', value: 'Midfielder' },
                    { title: 'Forward', value: 'Forward' },
                    { title: 'Coach', value: 'Coach' },
                ],
            },
        }),
        defineField({
            name: 'number',
            title: 'Jersey Number',
            type: 'number',
            description: 'Squad number (optional).',
        }),
        defineField({
            name: 'bio',
            title: 'Short Bio',
            type: 'text',
            rows: 4,
            description: 'A few sentences about this player or coach. Keep it fun and positive!',
        }),
    ],
    preview: {
        select: {
            name: 'name',
            squad: 'squad',
            position: 'position',
            number: 'number',
            media: 'photo',
        },
        prepare({ name, squad, position, number, media }) {
            const squadLabels: Record<string, string> = {
                'U7-U8': 'Juniors',
                'U9-U10': 'Development',
                'U11-U12': 'Academy',
                'U13-U16': 'Youth',
                'Coach': 'Staff',
            };
            const numberStr = number ? `#${number}` : '';
            return {
                title: `${name} ${numberStr}`.trim(),
                subtitle: `${squadLabels[squad] || 'Unknown'} • ${position || 'TBD'}`,
                media: media,
            }
        },
    },
})
