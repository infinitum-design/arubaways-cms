export default {
  name: 'menuConfig',
  title: 'Menu Configuration',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Menu Label',
      type: 'string'
    },
    {
      name: 'route',
      title: 'Route Path',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'route'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Menu Item',
        subtitle: subtitle ?? ''
      }
    }
  }
}
