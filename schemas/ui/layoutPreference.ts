export default {
  name: 'layoutPreference',
  title: 'Layout Preference',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: ['light', 'dark', 'auto']
      }
    },
    {
      name: 'defaultView',
      title: 'Default View',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'user.name',
      subtitle: 'theme'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: `User: ${title ?? 'N/A'}`,
        subtitle: `Theme: ${subtitle ?? ''}`
      }
    }
  }
}
