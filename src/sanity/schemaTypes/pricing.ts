import { defineField, defineType } from 'sanity'

export const pricing = defineType({
    name: 'pricing',
    title: 'Pricing Plan',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Plan Title',
            type: 'string',
            description: 'e.g. Single Child, Family',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Price Amount',
            type: 'string',
            description: 'e.g. 40',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'period',
            title: 'Billing Period',
            type: 'string',
            initialValue: 'per month',
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'string',
        }),
        defineField({
            name: 'features',
            title: 'Features List',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'popular',
            title: 'Is Most Popular?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'ctaText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Start Free Trial →',
        }),
        defineField({
            name: 'ctaLink',
            title: 'Button Link',
            type: 'string',
            initialValue: '#trial',
        }),
        defineField({
            name: 'savings',
            title: 'Savings Badge Text',
            type: 'string',
            description: 'Optional: e.g. "Save £15/month"',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'price',
            popular: 'popular',
        },
        prepare({ title, subtitle, popular }) {
            return {
                title: title,
                subtitle: `£${subtitle} ${popular ? '(Popular)' : ''}`,
            }
        },
    },
})
