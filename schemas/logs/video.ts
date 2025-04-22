import { Rule } from 'sanity'
import { metadataFields } from '../fields/metadata'

export default {
  name: 'video',
  title: 'Log Video',
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
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: (Rule: Rule) => Rule.uri({ scheme: ['https'] })
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
      subtitle: 'videoUrl'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Video',
        subtitle: subtitle ?? ''
      }
    }
  }
}
