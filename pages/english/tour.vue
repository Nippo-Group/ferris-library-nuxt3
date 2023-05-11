<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="'item' + i"
        cols="12"
        md="10"
        lg="8"
        xl="6"
      >
        <card-tour :item="item"></card-tour>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageEnglishTour',
  layout: 'LayoutEnglish',
  data: () => ({
    title: 'Tour and Guidance Workshops',
    items: [
      {
        title: 'Tours',
        text: 'To introduce our services and facilities to new students, the University Library offers tailor-made tours for class groups at the start of each academic year. We accept applications from faculty (including part-time lecturers) on behalf of their classes.',
        contents: [
          {
            subtitle: 'Implementation Period',
            text: 'April to June',
          },
          {
            subtitle: 'Content',
            list: [
              "Students are introduced to the library's services and facilities and taken on a tour of the library.",
              "Students are taught how to use the library's OPAC, decipher search results, and find the materials that they want.",
            ],
          },
          {
            subtitle: 'Applications',
            text: 'Apply by filling out a "Tour Application Form." (MyLibrary Login) These forms are sent to faculty in mid-March.',
          },
        ],
      },
      {
        title: 'Guidance',
        text: 'We offer guidance workshops designed to develop and strengthen the research skills that 3rd and 4th year students need in order to find and use information sources for their graduation theses. We accept applications from faculty (including part-time lecturers) on behalf of their seminar groups.',
        contents: [
          {
            subtitle: 'Implementation Period',
            text: 'Weekdays in term. Tours take priority over workshops from April to May.',
          },
          {
            subtitle: 'Content',
            list: [
              'A short DVD on report writing will be screened.',
              'Training and instruction will be given on the use of a variety of databases.',
              'Information sources related to the research program of each seminar will be introduced.',
            ],
          },
          {
            subtitle: 'Applications',
            text: 'Apply by filling out a "Guidance Application Form" (MyLibrary Login)',
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
