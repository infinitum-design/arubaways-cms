import { Rule } from 'sanity'

export default {
  name: 'crewGroup',
  title: 'Crew Group',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Group Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'members',
      title: 'Crew Members',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'user' }] }]
    }
  ]
}
