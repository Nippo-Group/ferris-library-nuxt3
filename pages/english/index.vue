<script setup>
definePageMeta({ layout: "LayoutEnglish" });
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="8">
        <home-main-visual></home-main-visual>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xl="8">
        <div class="text-center text-md-left text-h5 mb-2">
          <v-icon left>mdi-library-shelves</v-icon>OPAC Detailed search
        </div>
        <home-opac></home-opac>
      </v-col>
    </v-row>
  </v-container>
</template>
