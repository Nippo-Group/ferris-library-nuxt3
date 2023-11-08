<script setup lang="ts">
import imgPlanning01 from "~/assets/images/reading-project/about-planning-01.png";
import imgPlanning02 from "~/assets/images/reading-project/about-planning-02.png";
import imgRecitation01 from "~/assets/images/reading-project/about-recitation-01.png";
import imgRecitation02 from "~/assets/images/reading-project/about-recitation-02.png";

const title = "活動紹介";
const leadSentence =
  "読書運動プロジェクト（通称：読プロ）は、「本が好き」「図書館が好き」な学生が集まって、教職員と一緒に活動している公認団体です。<br />学生が主体となり、読書の魅力を届ける様々な活動を展開中です。";

type AboutItem = {
  name: string;
  content: string;
  images: string[];
  movie?: {
    src: string;
    title: string;
  };
};
type About = {
  planning: AboutItem;
  recitation: AboutItem;
};
const about: About = {
  planning: {
    name: "企画チーム",
    content:
      "毎年テーマを決めて読書会や本の展示を行うほか、大学祭では展示発表やワークショップを主催します。<br />本をツールとしたおもしろい企画やアイデアいっぱいの広報を展開します。",
    images: [imgPlanning01, imgPlanning02],
  },
  recitation: {
    name: "朗読チーム",
    content:
      "朗読の専門家から直々に指導を受けられるので、 マイクなしで相手に伝わりやすい声、 表現方法が身につきます。<br />大学祭や文学館など、学内外で発表の機会があります。",
    images: [imgRecitation01, imgRecitation02],
    movie: {
      src: "https://www.youtube.com/embed/WcCruNTE__M",
      title: "朗読動画（演目「やまなし」）",
    },
  },
};
</script>

<template>
  <card-reading-project :title="title" :lead-sentence="leadSentence">
    <v-container>
      <v-row>
        <v-col cols="12">
          <card-reading-project-detail>
            <v-container>
              <v-row dense>
                <v-col
                  v-for="(item, index) in [about.planning, about.recitation]"
                  :key="index"
                  cols="12"
                  sm="6"
                >
                  <card-reading-project-detail-article :name="item.name">
                    <v-card-text>
                      <div v-html="item.content"></div
                    ></v-card-text>
                    <v-container>
                      <v-row dense>
                        <v-col
                          v-for="(image, imgIndex) in item.images"
                          :key="imgIndex"
                          cols="12"
                          sm="6"
                        >
                          <v-img :src="image"></v-img>
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-card-text v-if="item.movie">
                      <elements-youtube-viewer
                        :title="item.movie.title"
                        :src="item.movie.src"
                      ></elements-youtube-viewer>
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
