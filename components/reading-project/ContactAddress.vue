<script setup lang="ts">
const title = "お問い合わせ";
</script>

<template>
  <card-reading-project :title="title">
    <v-container>
      <v-row>
        <v-col>
          <card-reading-project-detail>
            <v-card-text>
              <p>
                読書運動プロジェクトについてのお問い合わせは下記メールアドレスまでお願いいたします。
              </p>
              <btn-email address="r_library@ferris.ac.jp"></btn-email>
            </v-card-text>
          </card-reading-project-detail>
        </v-col>
      </v-row>
    </v-container>
  </card-reading-project>
</template>
