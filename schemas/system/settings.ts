export default {
  name: 'settings',
  title: 'System Settings',
  type: 'document',
  fields: [
    {
      name: 'systemName',
      title: 'System Name',
      type: 'string'
    },
    {
      name: 'timezone',
      title: 'Timezone',
      type: 'string'
    },
    {
      name: 'defaultCurrency',
      title: 'Default Currency',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'systemName',
      subtitle: 'timezone'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ?? 'Settings',
        subtitle: `Timezone: ${subtitle ?? 'UTC'}`
      }
    }
  }
}
