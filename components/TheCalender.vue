<template>
  <div>
    <v-toolbar flat>
      <v-menu bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            outlined
            color="grey darken-2"
            class="text-none"
            v-bind="attrs"
            v-on="on"
          >
            <span>{{
              language === 'en'
                ? placeToLabel[place][1]
                : placeToLabel[place][0]
            }}</span>
            <v-icon right> mdi-menu-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="place = 'ryokuen'">
            <v-list-item-title>{{
              language === 'en' ? 'Ryokuen' : '緑園本館'
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="place = 'yamate'">
            <v-list-item-title>{{
              language === 'en' ? 'Yamate' : '山手分室'
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn fab text small color="grey darken-2" @click="prev()">
        <v-icon small> mdi-chevron-left </v-icon>
      </v-btn>
      <v-btn fab text small color="grey darken-2" @click="next()">
        <v-icon small> mdi-chevron-right </v-icon>
      </v-btn>
      <v-toolbar-title class="wrap-text">
        {{ timeOfFocus }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            right
            color="grey darken-2"
            icon
            v-bind="attrs"
            v-on="on"
            @click="setToday()"
          >
            <v-icon>mdi-calendar-today</v-icon>
          </v-btn>
        </template>
        <span>today</span>
      </v-tooltip>
    </v-toolbar>
    <v-sheet height="700">
      <v-calendar
        ref="calendar"
        v-model="focus"
        color="primary"
        :events="events"
        :type="type"
        :locale="language"
        @click:more="viewDay"
        @click:date="viewDay"
      >
        <template #event="props">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <div class="pl-1" v-bind="attrs" v-on="on">
                {{ props.event.name }}
              </div>
            </template>
            <span>{{ props.event.name }}</span>
          </v-tooltip>
        </template>
      </v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import ryokuen from '@/assets/json/calender-ryokuen.json'
import yamate from '@/assets/json/calender-yamate.json'
import common from '@/assets/json/calender-common.json'

export default {
  name: 'TheCalender',
  data: () => ({
    place: 'ryokuen',
    placeToLabel: {
      ryokuen: ['緑園本館', 'Ryokuen'],
      yamate: ['山手分室', 'Yamate'],
    },
    ryokuen,
    yamate,
    common,
    focus: '',
    type: 'month',
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    colors: [
      'indigo lighten-1',
      'grey lighten-1',
      'grey lighten-1',
      'grey lighten-1',
      'blue lighten-1',
      'orange lighten-1',
      'green lighten-1',
      'amber lighten-1',
      'purple lighten-1',
      'deep-orange lighten-1',
      'pink lighten-1',
      'lime lighten-1',
    ],
    names: [
      'イベント',
      '閉館',
      '閉室',
      'Closed',
      '8:50～21:00',
      '9:00～19:00',
      '9:00～17:00',
      '9:00～18:00',
      '8:50～18:30',
      '10:00～15:00',
      '8:50～18:00',
      '10:00～17:00',
    ],
  }),
  computed: {
    language: {
      get() {
        return this.$store.state.language
      },
    },
    timeOfFocus() {
      const locale = this.language
      const focus = this.focus ? this.focus : undefined
      const time = this.$dayjs(focus).locale(locale)
      const formatJapanese = 'YYYY年 M月'
      const formatEnglish = 'MMM YYYY'
      const titleFormat = locale === 'en' ? formatEnglish : formatJapanese
      return time.format(titleFormat)
    },
    events() {
      let setPlace
      if (this.place === 'ryokuen') {
        setPlace = this.ryokuen.concat(this.common)
      } else {
        setPlace = this.yamate.concat(this.common)
      }
      for (let i = 0; i < setPlace.length; i++) {
        const number = this.names.indexOf(setPlace[i].name)
        if (number >= 0) {
          setPlace[i].color = this.colors[number]
        } else {
          setPlace[i].color = this.colors[0]
        }
        if (
          this.language === 'en' &&
          (setPlace[i].name === '閉館' || setPlace[i].name === '閉室')
        ) {
          setPlace[i].name = 'Closed'
        }
      }
      return setPlace
    },
  },
  mounted() {
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay({ date }) {
      this.focus = date
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
  },
}
</script>
