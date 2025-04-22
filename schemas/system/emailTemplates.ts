export default {
  name: 'emailTemplate',
  title: 'Email Template',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Template Name',
      type: 'string'
    },
    {
      name: 'subject',
      title: 'Email Subject',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Email Body',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subject'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Email Template',
        subtitle: subtitle ?? ''
      }
    }
  }
}
