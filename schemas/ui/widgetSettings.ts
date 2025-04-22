export default {
  name: 'widgetSettings',
  title: 'Widget Settings',
  type: 'document',
  fields: [
    {
      name: 'widgetType',
      title: 'Widget Type',
      type: 'string'
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string'
    },
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'widgetType',
      subtitle: 'position'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Widget',
        subtitle: subtitle ?? ''
      }
    }
  }
}
