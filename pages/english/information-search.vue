<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" lg="8" xl="6">
        <list-information-search :items="items"></list-information-search>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageEnglishInformationSearch',
  layout: 'LayoutEnglish',
  data: () => ({
    title: 'Information search',
    items: [
      {
        subTitle:
          'Searching for Books, Journals and Newspapers in Ferris University Library',
        step: 1,
        list: [
          {
            name: 'Ferris University Library OPAC',
            href: 'https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init',
            icon: 'mdi-open-in-new',
          },
          {
            name: 'Newspaper list (Ryokuen Library)',
            comment: 'This is only a Japanese page',
            push: '/newspaper',
          },
        ],
      },
      {
        subTitle: 'Searching for Journal Articles and Information',
        step: 2,
        list: [
          {
            name: 'Database and eBook list',
            push: '/database',
            comment: 'This is only a Japanese page',
          },
          {
            name: 'CiNii Research',
            href: 'https://cir.nii.ac.jp/',
            comment: 'operated by the National Institute of Informatics',
            icon: 'mdi-open-in-new',
          },
        ],
      },
      {
        subTitle: 'Searching for Information at Other Libraries',
        step: 3,
        list: [
          {
            name: 'CiNii Books',
            href: 'http://ci.nii.ac.jp/books/',
            comment: 'operated by the National Institute of Informatics',
            icon: 'mdi-open-in-new',
          },
          {
            name: 'Webcat Plus',
            href: 'http://webcatplus.nii.ac.jp/',
            comment: 'operated by the National Institute of Informatics',
            icon: 'mdi-open-in-new',
          },
          {
            name: 'National Diet Library Search',
            href: 'http://iss.ndl.go.jp/',
            comment: 'operated by the National Diet Library',
            icon: 'mdi-open-in-new',
          },
        ],
      },
      {
        subTitle: 'External Links',
        step: 4,
        list: [
          {
            name: 'Primary Sources',
            push: '/links-collection-1',
            comment:
              'Links to sites containing full-text primary sources (free). This is only a Japanese page',
          },
          {
            name: 'Secondary Sources',
            push: '/links-collection-2',
            comment:
              'Links to external sites enabling searches for secondary sources, such as the catalogs of libraries both in Japan and abroad, and portal sites for searching for books and journal articles. This is only a Japanese page',
          },
        ],
      },
    ],
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
