export default {
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'gAusWeb/next-netlify-cms-yt-tut',
      branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            label: 'Home',
            name: 'home',
            file: 'content/pages/home.md',
            fields: [
              {
                label: 'Hero Title',
                name: 'hero_title',
                widget: 'string',
              },
              {
                label: 'Hero Description',
                name: 'hero_description',
                widget: 'markdown',
              },
            ],
          },
        ],
      },
      {
        name: 'test',
        label: 'test',
        files: [
          {
            label: 'test',
            name: 'test',
            file: 'content/test/test.md',
            fields: [
              {
                label: 'Test Title',
                name: 'test_title',
                widget: 'string',
              },
              {
                label: 'test Description',
                name: 'test_description',
                widget: 'markdown',
              },
            ],
          },
        ],
      },
    ],
  };