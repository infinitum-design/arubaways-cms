export default {
  name: 'version',
  title: 'System Version',
  type: 'document',
  fields: [
    {
      name: 'version',
      title: 'Version',
      type: 'string'
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date'
    },
    {
      name: 'notes',
      title: 'Release Notes',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'version',
      subtitle: 'releaseDate'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: `Version ${title ?? ''}`,
        subtitle: `Released: ${subtitle ?? ''}`
      }
    }
  }
}
