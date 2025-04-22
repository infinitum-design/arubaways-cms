export default {
  name: 'settings',
  title: 'Platform Settings',
  type: 'document',
  fields: [
    {
      name: 'currency',
      title: 'Default Currency',
      type: 'string',
      initialValue: 'ƒ',
      options: {
        list: ['ƒ', 'USD', 'EUR']
      }
    },
    {
      name: 'languages',
      title: 'Supported Languages',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['English', 'Spanish']
    },
    {
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      initialValue: 'America/Aruba'
    },
    {
      name: 'companyInfo',
      title: 'Company Information',
      type: 'text'
    }
  ]
}
