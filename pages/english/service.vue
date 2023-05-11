<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <v-expansion-panels v-model="panel" accordion multiple>
          <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header>{{
              item.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>{{
              item.content
            }}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" md="10" lg="8" class="text-center">
        <btn-my-library></btn-my-library>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <text-sub-title>Please Note</text-sub-title>
        <v-alert
          v-for="(note, j) in pleaseNotes"
          :key="'note' + j"
          dense
          outlined
          :type="note.type"
        >
          {{ note.text }}
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <text-sub-title>Loan periods and checkouts limits</text-sub-title>
        <v-data-table
          :headers="headersQuantity"
          :items="quantity"
          :items-per-page="5"
          hide-default-footer
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageEnglishService',
  layout: 'LayoutEnglish',
  data: () => ({
    title: 'Lending Service',
    panel: [0, 1],
    items: [
      {
        title: 'Borrowing',
        content:
          'Bring the items you wish to borrow and your student ID or library card to the circulation desk. You can also use the automatic book-circulation machine on the second floor of the Ryokuen Library to borrow items.',
      },
      {
        title: 'Returns',
        content:
          'During library hours, bring the items you wish to return to the circulation desk. After hours, return items through the book drop. Overdue items will result in a suspension of borrowing rights for a period equal to the overdue period, up to a two week maximum. Items may be returned to either the Ryokuen or Yamate Libraries.',
      },
      {
        title: 'Renewals',
        content:
          'Items may be renewed so long as another user has not reserved them. Undergraduate students, graduate students, faculty and staff can also renew items through MyLibrary.',
      },
      {
        title: 'Reserving',
        content:
          'If an item you need has been checked out, you may reserve it. When the item you requested is returned, we will send you an email.',
      },
      {
        title: 'Transfer Service between Ferris Libraries',
        content:
          'You can arrange to have items in the Ryokuen Library transferred to the Yamate Library for pick up, and vice versa. When the item you requested arrives, we will send you an email. Transferred items will be kept for pick-up for one week.',
      },
      {
        title: 'Acquisition Requests',
        content:
          'Requests for the library to acquire items may be made at the circulation desk by undergraduate students, graduate students, faculty and staff. It usually takes between two weeks and two months for requests to be processed.',
      },
    ],
    pleaseNotes: [
      {
        type: 'error',
        text: 'If you try to take materials out of the library without having checked them out, they will be detected by a sensor and an alarm will sound.',
      },
      {
        type: 'error',
        text: 'In the event that you lose or damage library materials, please contact the library promptly.',
      },
      {
        type: 'error',
        text: 'Lending other people library materials that you have borrowed is prohibited, as is allowing other people to use your student ID or library card.',
      },
      {
        type: 'success',
        text: 'If the library does not have an item you need or if you cannot find an item that you are looking for, please contact the reference counter. The reference staff will be happy to help you.',
      },
      {
        type: 'success',
        text: 'Reference books, recent journals, microfilm and microfiche materials, videotapes, LDs, DVDs, CD-ROMs and DVDs are only available for use in the library.',
      },
      {
        type: 'info',
        text: 'Extended borrowing privileges are granted to undergraduate and graduate students over the spring, summer and winter vacation periods.',
      },
      {
        type: 'info',
        text: 'Certain materials may be borrowed for same-day use. There is no limit on the number of these items that may be borrowed.',
      },
    ],
    headersQuantity: [
      {
        text: 'User Status',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Books', value: 'books' },
      { text: 'Journals', value: 'journals' },
      { text: 'Course Reserve Books', value: 'courseReserveBooks' },
      { text: 'Musical Scores', value: 'scores' },
      { text: 'CDs & Records', value: 'cds' },
    ],
    quantity: [
      {
        name: 'Undergraduate students (1st, 2nd and 3rd year)',
        books: '30 items / 2 weeks',
        journals: '30 items / 1 week',
        courseReserveBooks: '5 items / 1 week',
        scores: '8 items / 1 week',
        cds: '8 items each / 2 days',
      },
      {
        name: 'Undergraduate students (4th year)',
        books: '30 items / 30 days',
        journals: '30 items / 1 week',
        courseReserveBooks: '5 items / 1 week',
        scores: '8 items / 1 week',
        cds: '8 items each / 2 days',
      },
      {
        name: 'Graduate students',
        books: '30 items / 30 days',
        journals: '30 items / 1 week',
        courseReserveBooks: '5 items / 1 week',
        scores: '8 items / 1 week',
        cds: '8 items each / 1 week',
      },
      {
        name: 'Faculty',
        books: '60 items / Until the end of Febrary',
        journals: '30 items / Until the end of Febrary',
        courseReserveBooks: '0 items',
        scores: '30 items / Until the end of Febrary',
        cds: '30 items each / Until the end of Febrary',
      },
      {
        name: 'Staff',
        books: '30 items / 30 days',
        journals: '30 items / 1 week',
        courseReserveBooks: '0 items',
        scores: '8 items / 1 week',
        cds: '8 items each / 1 week',
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
