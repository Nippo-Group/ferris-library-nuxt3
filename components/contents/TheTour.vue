<script setup lang="ts">
import { useLangSwitch } from "@/composable/language/useLangSwitch";

const items = {
  title: "ツアー",
  text: "新入生が大学での学習を始めるにあたり、必要不可欠な図書館の利用方法を知ってもらうことを目的としています。R&Rや導入演習などの授業単位で実施します。専任教員・非常勤教員の方々からのお申し込みを受け付けます。",
  contents: [
    {
      subtitle: "実施期間",
      text: "毎年度4月上旬から6月下旬",
    },
    {
      subtitle: "内容",
      list: [
        "図書館案内…図書館内を見て回りながら、施設設備の配置やその使い方を紹介します。",
        "蔵書検索…OPACの使い方と検索結果の見方、入手までを解説します。",
      ],
    },
    {
      subtitle: "申込方法",
      text: "毎年度3月中旬に配付する「新入生図書館ツアー申込書」（MyLibraryにログインして取得できます）にご記入の上お申し込みください。",
    },
  ],
};
const itemsEng = {
  title: "Tours",
  text: "To introduce our services and facilities to new students, the University Library offers tailor-made tours for class groups at the start of each academic year. We accept applications from faculty (including part-time lecturers) on behalf of their classes.",
  contents: [
    {
      subtitle: "Implementation Period",
      text: "April to June",
    },
    {
      subtitle: "Content",
      list: [
        "Students are introduced to the library's services and facilities and taken on a tour of the library.",
        "Students are taught how to use the library's OPAC, decipher search results, and find the materials that they want.",
      ],
    },
    {
      subtitle: "Applications",
      text: 'Apply by filling out a "Tour Application Form." (MyLibrary Login) These forms are sent to faculty in mid-March.',
    },
  ],
};
const { contents } = useLangSwitch(items, itemsEng);
</script>

<template>
  <templates-card-tour
    :title="contents.title"
    :text="contents.text"
    :contents="contents.contents"
  ></templates-card-tour>
</template>
