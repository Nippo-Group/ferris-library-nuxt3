<script setup lang="ts">
const title = ref("横浜市内大学図書館コンソーシアム");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12" lg="10" xl="6">
        <p>
          横浜市内大学図書館コンソーシアムは、「横浜市内大学間学術・教育交流協議会」の会員校によって、学生の教育機会の多様化を図ること、相互に各図書館の特性を生かしつつ協力し、交流を深め、教育・研究活動の推進を図ることを目的として結成されました。
        </p>
      </v-col>
      <v-col cols="12" lg="10" xl="6">
        <contents-consortium-list />
      </v-col>
      <v-col cols="12" lg="10" xl="6">
        <contents-consortium-notes />
      </v-col>
    </v-row>
  </v-container>
</template>
