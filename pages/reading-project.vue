<script setup lang="ts">
const title = ref("読書運動プロジェクト");
useSeoMeta({ title: title.value });

const titleImage = generateImgPath(
  "reading-project-title.png",
  "reading-project"
);
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
        <reading-project-is-waht> </reading-project-is-waht>
        <reading-project-activity-introduction />
        <reading-project-activity-base />
        <reading-project-contact-address />
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
