export default {
  name: 'exportConfig',
  title: 'Export Config',
  type: 'document',
  fields: [
    {
      name: 'format',
      title: 'Export Format',
      type: 'string',
      options: {
        list: ['PDF', 'Excel', 'CSV'],
        layout: 'dropdown'
      }
    },
    {
      name: 'includeMetadata',
      title: 'Include Metadata?',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'format'
    },
    prepare({ title }: { title?: string }) {
      return {
        title: `Export Format: ${title ?? 'N/A'}`
      }
    }
  }
}
