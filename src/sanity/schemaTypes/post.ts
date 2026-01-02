import { defineField, defineType } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'News Article',
    type: 'document',
    icon: () => '📰',
    fields: [
        defineField({
            name: 'title',
            title: 'Headline',
            type: 'string',
            description: 'The main title of your article (e.g., "U12s Win Championship Final")',
            validation: (rule) => rule.required().max(80).warning('Keep it short and punchy!'),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            hidden: true, // Hidden from user - auto-generated
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'What type of news is this?',
            options: {
                list: [
                    { title: '⚽ Match Report', value: 'match-report' },
                    { title: '📢 Announcement', value: 'announcement' },
                    { title: '🏆 Achievement', value: 'achievement' },
                    { title: '📅 Event', value: 'event' },
                ],
                layout: 'radio',
            },
            initialValue: 'announcement',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            description: 'Upload a photo for the article card. Action shots work best!',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Publish Date',
            type: 'datetime',
            description: 'When should this article appear on the website?',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Summary',
            type: 'text',
            rows: 3,
            description: '2-3 sentences that appear on the news card. Make it engaging!',
            validation: (rule) => rule.required().max(200),
        }),
        defineField({
            name: 'body',
            title: 'Full Article',
            type: 'array',
            description: 'Write your full article here. Use headings to break up sections.',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading', value: 'h2' },
                        { title: 'Subheading', value: 'h3' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Bold', value: 'strong' },
                            { title: 'Italic', value: 'em' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    { name: 'href', type: 'url', title: 'URL' }
                                ]
                            }
                        ]
                    },
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                }
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            category: 'category',
            date: 'publishedAt',
            media: 'mainImage',
        },
        prepare({ title, category, date, media }) {
            const categoryLabels: Record<string, string> = {
                'match-report': '⚽ Match Report',
                'announcement': '📢 Announcement',
                'achievement': '🏆 Achievement',
                'event': '📅 Event',
            };
            return {
                title: title,
                subtitle: `${categoryLabels[category] || 'News'} • ${date ? new Date(date).toLocaleDateString('en-GB') : 'Draft'}`,
                media: media,
            }
        },
    },
})
