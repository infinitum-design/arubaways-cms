import { Rule } from 'sanity'

export default {
  name: 'auth',
  title: 'Authentication',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'user',
      title: 'Linked User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: Rule) => Rule.required()
    }
  ]
}
