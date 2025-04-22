export default {
  name: 'photo',
  title: 'Job Photo',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image File',
      type: 'image'
    },
    {
      name: 'description',
      title: 'Photo Description',
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
