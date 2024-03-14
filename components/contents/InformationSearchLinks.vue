<script setup lang="ts">
import { useLangSwitch } from "@/composable/language/useLangSwitch";

type Link = {
  name?: string;
  href?: string;
  openInNew?: boolean;
  push?: string;
  comment?: string;
};
type Item = {
  subTitle: string;
  step: number;
  list: Link[];
};

const items: Item[] = [
  {
    subTitle: "学内の図書、雑誌、新聞を探す",
    step: 1,
    list: [
      {
        name: "フェリス女学院大学附属図書館OPAC",
        href: "https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init",
        openInNew: true,
      },
      {
        name: "新聞(緑園キャンパス)",
        push: "/newspaper",
      },
    ],
  },
  {
    subTitle: "論文や情報を探す",
    step: 2,
    list: [
      {
        name: "オンラインデータベース一覧",
        push: "/database",
      },
      {
        name: "CiNii Research",
        href: "https://cir.nii.ac.jp/",
        comment: "国立情報学研究所",
        openInNew: true,
      },
    ],
  },
  {
    subTitle: "OPACで見つからなかったら…学外の図書館にあるか調べる",
    step: 3,
    list: [
      {
        name: "CiNii Books",
        href: "http://ci.nii.ac.jp/books/",
        comment: "国立情報学研究所",
        openInNew: true,
      },
      {
        name: "Webcat Plus",
        href: "http://webcatplus.nii.ac.jp/",
        comment: "国立情報学研究所",
        openInNew: true,
      },
      {
        name: "国立国会図書館サーチ",
        href: "http://iss.ndl.go.jp/",
        comment: "国立国会図書館",
        openInNew: true,
      },
      {
        comment: "※その他　カウンターに問い合わせる",
      },
    ],
  },
  {
    subTitle: "リンク集",
    step: 4,
    list: [
      {
        name: "一次情報",
        push: "/links-collection-1",
        comment: "一次情報（本文そのもの）を入手できる外部のサイト集",
      },
      {
        name: "二次情報",
        push: "/links-collection-2",
        comment:
          "国内外の図書館の所蔵情報、図書や雑誌（論文）の書誌情報など、一次情報にアクセスするための二次情報を入手できる外部のサイト集",
      },
    ],
  },
];

const itemsEng: Item[] = [
  {
    subTitle:
      "Searching for Books, Journals and Newspapers in Ferris University Library",
    step: 1,
    list: [
      {
        name: "Ferris University Library OPAC",
        href: "https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init",
        openInNew: true,
      },
      {
        name: "Newspaper list (Ryokuen Library)",
        comment: "This is only a Japanese page",
        push: "/newspaper",
      },
    ],
  },
  {
    subTitle: "Searching for Journal Articles and Information",
    step: 2,
    list: [
      {
        name: "Database and eBook list",
        push: "/database",
        comment: "This is only a Japanese page",
      },
      {
        name: "CiNii Research",
        href: "https://cir.nii.ac.jp/",
        comment: "operated by the National Institute of Informatics",
        openInNew: true,
      },
    ],
  },
  {
    subTitle: "Searching for Information at Other Libraries",
    step: 3,
    list: [
      {
        name: "CiNii Books",
        href: "http://ci.nii.ac.jp/books/",
        comment: "operated by the National Institute of Informatics",
        openInNew: true,
      },
      {
        name: "Webcat Plus",
        href: "http://webcatplus.nii.ac.jp/",
        comment: "operated by the National Institute of Informatics",
        openInNew: true,
      },
      {
        name: "National Diet Library Search",
        href: "http://iss.ndl.go.jp/",
        comment: "operated by the National Diet Library",
        openInNew: true,
      },
    ],
  },
  {
    subTitle: "External Links",
    step: 4,
    list: [
      {
        name: "Primary Sources",
        push: "/links-collection-1",
        comment:
          "Links to sites containing full-text primary sources (free). This is only a Japanese page",
      },
      {
        name: "Secondary Sources",
        push: "/links-collection-2",
        comment:
          "Links to external sites enabling searches for secondary sources, such as the catalogs of libraries both in Japan and abroad, and portal sites for searching for books and journal articles. This is only a Japanese page",
      },
    ],
  },
];

const { contents } = useLangSwitch(items, itemsEng);

const { active, next, prev } = useVisibleSevral();
</script>

<template>
  <v-expansion-panels v-model="active">
    <v-expansion-panel v-for="(item, index) in contents" :key="'item-' + index">
      <v-expansion-panel-title>
        <div class="d-flex align-center ga-3">
          <v-avatar
            size="36"
            :color="active === item.step - 1 ? 'primary' : 'grey'"
          >
            {{ item.step }}
          </v-avatar>
          <p class="text-h6">
            {{ item.subTitle }}
          </p>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="d-flex flex-column ga-4">
          <templates-list-btn :list="item.list"></templates-list-btn>
          <v-divider></v-divider>
          <div class="d-flex justify-space-between">
            <v-btn variant="text" :disabled="active === 0" @click="prev"
              >Prev</v-btn
            >
            <v-btn variant="text" :disabled="active === 3" @click="next"
              >Next</v-btn
            >
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
