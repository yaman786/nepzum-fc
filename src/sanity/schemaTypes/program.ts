import { defineField, defineType } from 'sanity'

export const program = defineType({
    name: 'program',
    title: 'Training Program',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Program Name',
            type: 'string',
            description: 'e.g., Mini Kickers',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ages',
            title: 'Age Group Label',
            type: 'string',
            description: 'e.g., U5 - U6',
        }),
        defineField({
            name: 'ageRange',
            title: 'School Year / Range',
            type: 'string',
            description: 'e.g., Reception & Year 1',
        }),
        defineField({
            name: 'schedule',
            title: 'Schedule Slots',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'day', type: 'string', title: 'Day' },
                    { name: 'time', type: 'string', title: 'Time' },
                    { name: 'note', type: 'string', title: 'Note (Optional)' }
                ]
            }],
        }),
        defineField({
            name: 'focus',
            title: 'Training Focus',
            type: 'string',
            description: 'e.g., Fun, basic ball skills',
        }),
        defineField({
            name: 'color',
            title: 'Gradient Color Code',
            type: 'string',
            description: 'Tailwind gradient class (e.g., from-green-500 to-emerald-600)',
            initialValue: 'from-purple-500 to-indigo-600',
        }),
    ],
})
