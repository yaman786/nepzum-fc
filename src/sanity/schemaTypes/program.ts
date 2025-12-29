import { defineField, defineType } from 'sanity'

export const program = defineType({
    name: 'program',
    title: 'Training Program',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Program Title',
            type: 'string',
            description: 'e.g., Mini Kickers',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ageGroup',
            title: 'Age Group Label',
            type: 'string',
            description: 'e.g., U5 - U6',
        }),
        defineField({
            name: 'schedule',
            title: 'Schedule Summary',
            type: 'string',
            description: 'e.g., Sat 9am - 10am',
        }),
        defineField({
            name: 'price',
            title: 'Price Label',
            type: 'string',
            description: 'e.g., £40/month',
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
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
