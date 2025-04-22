export default {
  name: 'dashboard',
  title: 'Dashboard Config',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'widgets',
      title: 'Widgets',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'widgetSettings' }] }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }: { title?: string }) {
      return { title: title ?? 'Dashboard Config' }
    }
  }
}
