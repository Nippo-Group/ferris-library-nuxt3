<script setup lang="ts">
const title = ref("竹取物語");
useSeoMeta({ title: title.value });

const titleLogo = "/images/digital-collection/collection02/title-logo.gif";
const topImage = "/images/digital-collection/collection02/00.jpg";
const topImageCaptions = ["三田村雅子　新生優希"];
const commentary = [
  "フェリス女学院大学図書館では2004年度に絵入り竹取物語写本三冊を貴重書として購入しました。紺地金襴表紙のこの竹取物語は、二十四枚の極彩色の絵を伴っており、これは、竹取物語の絵入本としてはもっとも多い絵を含む新出写本であり、しかもその絵には際立った個性が認められます。",
  "フェリス本は縦二十四センチ、横17センチ、上・中・下三冊本で、上巻の墨付き四十六丁、絵十一枚、中巻墨付き三十二丁、絵七枚、下巻墨付き三十九丁、絵六枚です。料紙は斐紙。見返しには金の切箔が散らされています。一行十六・七字、十行程度です。絵の前の本文は散らし書きされるのが通例で、絵の場面に合わせて、本文が書かれています。筆跡は手馴れた達筆です。",
  "一般に絵入竹取物語は十枚から十五・六枚の絵を入れることが多く、本文を持たない絵だけの竹取物語絵に、三十枚を持つものもありますが、これを例外とすれば、二十四枚の絵を持つフェリス本は、本文と絵の両方を含む本としては、もっとも、絵の数が多いといえます。現存場面では他に類例のない場面、五人の求婚者がかぐや姫に求婚して、竹取翁に臥し拝む場面、くらもちの皇子の蓬莱山での女性（うかんるり）との出会いを語る作り話の場面、中国の商人「王けい」が火鼠の皮衣を砂金で売りつける場面を含んでいます。",
];
const commentary2 = [
  "絵の順番は19・20・21・22で錯簡があり、物語の進行順からすれば、20・21・19・22となる。",
  "特に五人の求婚者者の難題失敗譚の部分が多く、石作りの皇子一場面、くらもちの皇子四場面、安部御主人の火鼠の皮衣では四場面、大伴御行の龍の首の玉の話が三場面、石上麻呂の燕の子安貝の話が二場面で、十四画面が求婚譚に費やされている。画面に男しか登場しない場面も多く、十一場面で、大伴の御行の物語、石上麻呂の物語はすべて男性のみである。月の都の人を迎え撃とうという23の場面、富士山登山の場面24など、特に後半に偏って男性中心場面がある。",
  "他の本のほとんどが持つかぐや姫昇天の段を持たず、富士山登山の場面で終わっていることはこの本の最大の特色で、かぐや姫の昇天への揺らぎ、この世への未練を形象化することはない。これらの特徴は物語を収束させていく論理が、女主人公の側にはなく、男性たちの側にあることを示しており、おそらく竹取絵の享受者もまた、女性というよりは、男性を予想している。",
  "登場人物は同じ色・同じ型を着ていることが多く、色彩が記号的に用いられ、人物の弁別を容易にしている。五人の求婚者はいずれも赤、竹取翁は朽ち葉色、脇役の視点人物は橙色、端役は寒色系の衣を身につける。特に注目されるのは、橙色の衣の女房・男童がそれぞれ視点人物、語り伝える媒介者として描かれる場面が多いことで、具体的な脇役のまなざしに捉えられた物語が語られるという性格を表している。",
  "この竹取絵本では普通金雲で表される画面の縁取り・フレームがすべて青で施されており、竹取の翁の家の花も青、満月も青みがかって描かれ、月の下に青い線が描き込まれている。特に注目すべきなのは、海の色の青さである。大きなスペースでくっきりとした群青に塗りつぶされている。また、大量の黄金と引き換えに海の彼方からもたらされた火鼠の皮衣も、群青の布のかたちで示される。蓬莱山・富士山の描写も、青い山として描かれる。これらの青い空、霞、海、花、月、布、そして青い山には、はるかな他界への憧れが込められており、群青に託して、全体を通してそれを描こうとする姿勢が感じられる。",
  "特に最後に描かれた富士山図はとりわけ精細であり、また意欲的であって、黒煙を吹き上げているようすは、他の富士山図と大きく異なり、異彩を放っている。おそらくこれは、宝永四年の富士山大噴火の絵画化と思われ、この竹取物語絵本それ自体の成立年代も示唆するものであろう。",
  "作中、肌脱ぎ姿の「足軽」たち、及び鷹飼・犬飼などが多く描かれ、下層民への関心が特に深く感じられる。これらの傾向は本の製作者・享受者の性格と位相を示すものと考えられる。",
  "（詳しくはフェリス女学院大学文学部紀要41号所載の三田村雅子・新生優希「新出資料フェリス女学院大学蔵「竹取物語絵本紹介」を御覧ください」）",
];
const breadcrumbs = [
  {
    title: "電子コレクション",
    disabled: false,
    href: "/digital-collection",
  },
  {
    title: "竹取物語",
    disabled: true,
    href: "/digital-collection/collection02",
  },
];
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <elements-nav-breadcrumbs
          :items="breadcrumbs"
        ></elements-nav-breadcrumbs>
      </v-col>
      <v-col cols="12" xl="6">
        <v-card>
          <v-card-title>
            <img :src="titleLogo" :alt="title" class="titleLogo" />
          </v-card-title>
          <v-row>
            <v-col cols="12" sm="8">
              <v-card-text>
                <p v-for="(text, i) in commentary" :key="i" class="mb-4">
                  {{ text }}
                </p>
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card-text>
                <v-img :src="topImage" cover class="bg-grey-lighten-3"></v-img>
                <p
                  v-for="(caption, j) in topImageCaptions"
                  :key="j"
                  class="text-caption"
                >
                  {{ caption }}
                </p>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card-actions>
            <elements-btn-dialog-default title="解説">
              <template #contents>
                <p v-for="(text, k) in commentary2" :key="k" class="mb-4">
                  {{ text }}
                </p>
              </template>
            </elements-btn-dialog-default>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <contents-collection-taketori-monogatari />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.titleLogo {
  max-width: 100%;
}
</style>
