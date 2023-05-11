<template>
  <card-reading-project :title="title">
    <v-container>
      <v-row>
        <v-col>
          <card-reading-project-detail sub-title="図書館紹介動画">
            <v-container>
              <v-row dense>
                <v-col
                  v-for="(item, index) in movie"
                  :key="`video-${index}`"
                  cols="12"
                  md="6"
                >
                  <card-reading-project-detail-article>
                    <v-card-text>
                      <display-youtube :item="item"> </display-youtube>
                    </v-card-text>
                  </card-reading-project-detail-article>
                </v-col>
              </v-row>
            </v-container>
          </card-reading-project-detail>
        </v-col>
      </v-row>
    </v-container>
  </card-reading-project>
</template>

<script>
export default {
  name: 'ActivityBase',
  data: () => ({
    title: '活動拠点～附属図書館～',
    movie: [
      {
        src: 'https://www.youtube.com/embed/HRKpRB5fZ-o',
        title: '図書館施設・設備編',
      },
      {
        src: 'https://www.youtube.com/embed/rBAip8vAxKU',
        title: 'ラーニングコモンズ編',
      },
    ],
  }),
}
</script>
