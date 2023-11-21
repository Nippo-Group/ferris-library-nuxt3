<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="8" tag="section">
        <contents-slide-show />
      </v-col>
      <v-col cols="12" xl="8" tag="section">
        <contents-todays-events />
      </v-col>
      <v-col cols="12" xl="8" tag="section">
        <contents-pick-out />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" xl="4" tag="section">
        <contents-latest-news />
      </v-col>
      <v-col cols="12" lg="6" xl="4" tag="section">
        <contents-search-opac />
      </v-col>
    </v-row>
  </v-container>
</template>
