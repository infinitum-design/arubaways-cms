import { Rule } from 'sanity'

export default {
  name: 'uploadedFile',
  title: 'File Upload',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'File Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'File Description',
      type: 'text'
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        storeOriginalFilename: true
      }
    },
    {
      name: 'uploadedBy',
      title: 'Uploaded By',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'unit',
      title: 'Unit/Section',
      type: 'reference',
      to: [{ type: 'unit' }]
    },
    {
      name: 'fileType',
      title: 'File Type',
      type: 'string',
      options: {
        list: ['pdf', 'image', 'video', 'log', 'quote', 'invoice', 'document', 'misc']
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'visibility',
      title: 'Visibility',
      type: 'string',
      options: {
        list: ['Admin Only', 'All Staff'],
        layout: 'radio'
      },
      initialValue: 'Admin Only'
    },
    {
      name: 'expiresAt',
      title: 'Expiration Date',
      type: 'datetime'
    },
    {
      name: 'uploadedAt',
      title: 'Uploaded At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
