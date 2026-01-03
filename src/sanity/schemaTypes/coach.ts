import { defineField, defineType } from 'sanity'

export const coach = defineType({
    name: 'coach',
    title: 'Coach',
    type: 'document',
    icon: () => '🧢',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'e.g. Head Coach, Assistant Coach, Goalkeeper Coach',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'bio',
            title: 'Biography',
            type: 'text',
            rows: 3,
            description: 'Short bio focusing on coaching philosophy and background',
        }),
        defineField({
            name: 'qualifications',
            title: 'Qualifications',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. FA Level 2, UEFA B License',
        }),
        defineField({
            name: 'experience',
            title: 'Past Experience',
            type: 'string',
            description: 'e.g. Former Charlton Athletic Youth',
        }),
        defineField({
            name: 'badges',
            title: 'Badges / Certifications',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. DBS Checked, First Aid, Safeguarding',
            initialValue: ['DBS Checked', 'First Aid Certified', 'Safeguarding'],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'image',
        },
    },
})
