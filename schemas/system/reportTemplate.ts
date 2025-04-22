export default {
  name: 'reportTemplate',
  title: 'Report Template',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Report Title',
      type: 'string'
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string'
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'layout'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Report',
        subtitle: `Layout: ${subtitle ?? ''}`
      }
    }
  }
}
