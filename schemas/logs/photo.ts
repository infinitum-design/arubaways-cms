import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'photo',
  title: 'Log Photo',
  type: 'document',
  fields: [
    {
      name: 'log',
      title: 'Related Log',
      type: 'reference',
      to: [{ type: 'log' }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string'
    },
    ...metadataFields
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image'
    },
    prepare({ title, media }: { title?: string; media?: any }) {
      return {
        title: title ?? 'Photo',
        media
      }
    }
  }
}
