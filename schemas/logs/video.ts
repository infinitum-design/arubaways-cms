export default {
  name: 'video',
  title: 'Job Video',
  type: 'document',
  fields: [
    {
      name: 'video',
      title: 'Video File',
      type: 'file'
    },
    {
      name: 'description',
      title: 'Video Description',
      type: 'text'
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }]
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'reference',
      to: [{ type: 'unit' }]
    },
    {
      name: 'uploadedBy',
      title: 'Uploaded By',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'uploadDate',
      title: 'Upload Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
