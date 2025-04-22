export default {
    name: 'roleVisibility',
    title: 'Visible To Roles',
    type: 'array',
    of: [
      {
        type: 'string',
        options: {
          list: ['admin', 'office', 'field', 'finance', 'viewer'],
          layout: 'tags'
        }
      }
    ]
  }
  