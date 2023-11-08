<script setup lang="ts">
import titleImage from "~/assets/images/reading-project/reading-project-title.png";

const title = ref("読書運動プロジェクト");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-sheet color="grey-lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12" xl="8">
          <v-card rounded="0">
            <v-img
              :src="titleImage"
              class="text-white align-center"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)"
              height="180px"
              cover
            >
              <v-card-title class="text-h4 page-title"
                >読書運動<wbr />プロジェクト</v-card-title
              >
            </v-img>
          </v-card>
        </v-col>
        <contents-reading-project-is-waht />
        <contents-reading-project-activity-introduction />
        <contents-reading-project-activity-base />
        <contents-reading-project-contact-address />
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.page-title {
  white-space: nowrap;
  line-height: 1.2em;
}
</style>
