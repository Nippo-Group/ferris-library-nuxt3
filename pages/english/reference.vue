<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <template v-for="(item, i) in items">
      <text-sub-title v-if="item.title" :key="'subtitle' + i">{{
        item.title
      }}</text-sub-title>
      <v-row :key="'row' + i">
        <v-col
          v-for="(content, j) in item.contents"
          :key="'content' + j"
          cols="12"
          md="6"
          lg="4"
          xl="3"
        >
          <v-card
            height="100%"
            :href="content.link ? content.link : null"
            :target="content.link ? '_blank' : '_self'"
            :link="content.link ? true : false"
          >
            <v-card-title>
              {{ content.subtitle }}
              <v-icon v-if="content.link" right>mdi-open-in-new</v-icon>
            </v-card-title>
            <v-card-text>
              {{ content.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
export default {
  name: 'PageEnglishReference',
  layout: 'LayoutEnglish',
  data: () => ({
    title: 'Reference Service',
    items: [
      {
        title: '',
        contents: [
          {
            subtitle: 'Searching for items',
            text: 'Should the materials you seek not be held by the University Library, we can search the holdings of other libraries in Japan and abroad for you. Undergraduate students may also submit requests for search help through MyLibrary.',
          },
          {
            subtitle: 'Searching by topic',
            text: 'Enquiries concerning library materials and the use of library facilities may be made at the reference desk. Reference service staff are happy to be of assistance. Undergraduate students may also submit requests for search help through MyLibrary.',
          },
        ],
      },
      {
        title: 'Interlibrary Loan (ILL)',
        contents: [
          {
            subtitle: 'Requesting Copies of Material Held by Other Libraries',
            text: 'Interlibrary Loan is a service that allows you to obtain copies of articles or chapters from titles that are not held by the University Library. Submit a request at the reference desk. Graduate students and faculty may also submit requests through MyLibrary. It usually takes a minimum of 4 days for requested items to arrive. There is a charge for use of this service.',
          },
          {
            subtitle: 'Requesting Physical Material from Other Libraries',
            text: 'Interlibrary Loan is a service that allows you to obtain access to physical materials that are not held by the University Library. Submit a request at the reference desk. Graduate students and faculty can also submit requests through MyLibrary. Materials borrowed through ILL may only be used at the University Library. It usually takes about four days for items to arrive. There is a charge for use of this service.',
          },
        ],
      },
      {
        title: 'Visiting Other Libraries',
        contents: [
          {
            subtitle: 'Other University Libraries',
            text: 'Visiting the library of another university usually requires a letter of introduction. Applications may be made at the reference counter.',
          },
          {
            subtitle: 'Yokohama City Library',
            text: 'These public libraries may be used by anyone.',
            link: 'http://www.city.yokohama.lg.jp/kyoiku/library/',
          },
          {
            subtitle: 'Kanagawa Prefectural Library',
            text: 'These public libraries may be used by anyone.',
            link: 'http://www.klnet.pref.kanagawa.jp/',
          },
          {
            subtitle: 'National Diet Library (NDL)',
            text: "The NLD may be used by anyone 18 years of age or older from any nation. Much of the NDL's collection is housed in closed stacks, and items must be requested through a special browsing terminal. The NDL is not a lending library.",
            link: 'http://www.ndl.go.jp/',
          },
        ],
      },
      {
        title: 'Visiting Other Libraries Using the Common Library Card',
        contents: [
          {
            subtitle:
              'Kanagawa Region University Library Cooperation Organization (KULC) (Faculty, graduate and undergraduate students only)',
            text: 'You can use the libraries of participating universities by showing your Common Library Card. Applications may be made at the reference counter.',
          },
          {
            subtitle:
              'Music Library Association of Japan (College of Music faculty, graduate and undergraduate students only)',
            text: 'You can use the libraries of participating universities by showing your Common Library Card. Applications may be made at the reference counter.',
          },
          {
            subtitle:
              'Consortium of University Libraries in Yokohama Municipality',
            text: "As a general rule, you can use the libraries of participating universities just by showing your student ID or faculty ID. It is recommended that you confirm each institution's user-access policy through its website before your visit.",
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
