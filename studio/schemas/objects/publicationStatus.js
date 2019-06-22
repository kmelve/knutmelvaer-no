const list = [
  {title: 'Nieuw', value: 'new'},
  {title: 'Gepubliceerd', value: 'published'},
  {title: 'Gearchiveerd', value: 'archived'}
]

export default {
  type: 'object',
  name: 'publicationState',
  title: 'Publicatie status',
  fields: [
    {
      name: 'state',
      type: 'string',
      title: 'Status',
      options: {
        list,
        layout: 'radio',
        direction: 'horizontal'
      }
    }
  ],
  preview: {
    select: {
      state: 'publicationState.state'
    },
    prepare ({state}) {
      return {
        title: list.find(({value}) => value === state).title
      }
    }
  }
}
