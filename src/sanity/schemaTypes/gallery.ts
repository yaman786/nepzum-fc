import { defineField, defineType } from 'sanity'

export const gallery = defineType({
    name: 'gallery',
    title: 'Gallery Item',
    type: 'document',
    fields: [
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Media Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Image', value: 'image' },
                    { title: 'Video', value: 'video' },
                ],
                layout: 'radio',
            },
            initialValue: 'image',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            hidden: ({ document }) => document?.type === 'video',
        }),
        defineField({
            name: 'videoUrl',
            title: 'Video URL (Vimeo/YouTube)',
            type: 'url',
            hidden: ({ document }) => document?.type === 'image',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Video Thumbnail',
            type: 'image',
            hidden: ({ document }) => document?.type === 'image',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Training', value: 'training' },
                    { title: 'Matches', value: 'matches' },
                    { title: 'Events', value: 'events' },
                    { title: 'Facilities', value: 'facilities' },
                ],
            },
            initialValue: 'training',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'featured',
            title: 'Featured?',
            type: 'boolean',
            description: 'Show big in the grid?',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'caption',
            subtitle: 'category',
            media: 'image',
        },
    },
})
