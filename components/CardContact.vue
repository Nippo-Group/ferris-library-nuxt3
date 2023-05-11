<template>
  <v-card>
    <v-img
      :src="item.image"
      height="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      class="align-end"
      dark
    >
      <v-card-title>
        <div class="text-h5">
          {{ item.name }}
        </div>
      </v-card-title>
    </v-img>
    <v-list two-line>
      <v-list-item :href="'tel:' + item.tel">
        <v-list-item-icon>
          <v-icon color="primary"> mdi-phone </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.tel }}</v-list-item-title>
          <v-list-item-subtitle>Phone</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action></v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.fax }}</v-list-item-title>
          <v-list-item-subtitle>Fax</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item :href="'mailto:' + item.eMali">
        <v-list-item-icon>
          <v-icon color="primary"> mdi-email </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.eMali }}</v-list-item-title>
          <v-list-item-subtitle>Organization</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item :href="item.googleMap" target="_blank">
        <v-list-item-icon>
          <v-icon color="primary"> mdi-map-marker </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>
            〒{{ item.addressNumber }}
          </v-list-item-subtitle>
          <v-list-item-title class="wrap-text">{{
            item.address
          }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon>mdi-open-in-new</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item v-for="(access, i) in item.accesses" :key="i">
        <v-list-item-icon>
          <v-icon color="primary"> {{ access.icon }} </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>
            {{ access.transportation }}
          </v-list-item-subtitle>
          <v-list-item-title class="wrap-text">{{
            access.root
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'CardContact',
  props: {
    item: {
      type: Object,
      default: () => ({
        name: '施設名',
        addressNumber: '000-0000',
        address: '住所',
        googleMap: 'https://グーグルマップへのリンク',
        tel: '000 (000) 0000',
        fax: '000 (000) 0000',
        eMali: 'sample@sample.jp',
        image: require(`@/assets/images/contact/contact-ryokuen.jpg`),
        accesses: [
          {
            transportation: '路線名',
            root: '「駅名」下車徒歩00分',
            icon: 'mdi-train',
          },
          {
            transportation: '路線名',
            root: '「バス停名」下車徒歩00分',
            icon: 'mdi-train-car-passenger-variant',
          },
        ],
      }),
    },
    englishPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
