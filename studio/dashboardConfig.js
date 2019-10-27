export default {
  widgets: [
    {name: 'minesweeper'},
    {
      name: 'gatsby',
      options: {
        sites: [
          {siteUrl: 'https://knutmelvaer-no-v2-3373152487.gtsb.io'}
        ]
      }
    },
    {name: 'structure-menu'},
    {name: 'notes'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce96852bc35c5ce76bd7deb',
                  title: 'Sanity Studio',
                  name: 'knutmelvaer-no-v2-studio',
                  apiId: '303d2bb9-ad29-480d-8c8c-d37b46dd199d'
                },
                {
                  buildHookId: '5ce968523b675f62aac2b421',
                  title: 'Blog Website',
                  name: 'knutmelvaer-no-v2',
                  apiId: '4a30bb85-84bf-409a-8f97-8dcbfcd337e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/knutmelvaer-no-v2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://knutmelvaer-no-v2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
