<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col cols="12">
        <v-card class="d-md-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title>
              <img :src="titleLogo" :alt="title" class="titleLogo" />
            </v-card-title>
            <v-card-text>
              <p v-for="(text, i) in commentary" :key="i">{{ text }}</p>
            </v-card-text>
          </div>
          <v-card-text>
            <v-img
              :max-width="220"
              :src="topImage"
              contain
              class="grey lighten-3"
            ></v-img>
            <p
              v-for="(caption, j) in topImageCaptions"
              :key="j"
              class="caption"
            >
              {{ caption }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-alert outlined type="success" text>
          <p v-for="(text, k) in commentary2" :key="k" class="honzi">
            {{ text }}
          </p>
        </v-alert>
      </v-col>
      <v-col v-for="(image, idx) in images" :key="idx" cols="6" md="3" xl="2">
        <v-card
          elevation="0"
          color="grey lighten-4"
          class="open-tinybox"
          @click="index = idx"
        >
          <v-card-title :class="{ hidden: idx % 2 === 1 }">
            <v-chip small class="mr-2">{{ image.num }}</v-chip>
            {{ image.alt }}
          </v-card-title>
          <v-img :src="image.src" :alt="image.alt" aspect-ratio="1" contain>
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text :class="{ hidden: idx % 2 === 0 }">
            <p class="caption">{{ image.lr }}</p>
            <p class="caption">{{ image.poem }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <VueTinybox v-model="index" :images="images" loop></VueTinybox>
  </v-container>
</template>

<script>
export default {
  name: 'PageDigitalCollection01',
  data: () => ({
    title: '新三十六歌仙画帖',
    titleLogo: '/images/digital-collection/collection01/title-logo.gif',
    topImage: '/images/digital-collection/collection01/01.jpg',
    index: null,
    flag: null,
    topImageCaptions: [
      '狩野洞雲（狩野益信・1625-1694）画',
      '絹本金銀泥彩色画',
      '本紙　たて 31.7cm　よこ 24.6cm',
      '折帖装 箱入',
    ],
    commentary: [
      '歌仙絵とは和歌に秀でた歌人の画像で、普通歌人の肖像にその歌の一首を、ときに略伝を添えたものを指します。鎌倉時代から江戸時代に非常に流行し、藤原公任 (966-1041) 撰の「三十六人撰」所収歌人を称した「三十六歌仙」をはじまりとする種々の歌仙絵が制作されました。歌仙絵は和歌文学、日本美術、また、装束や色彩といった日本文化全般にわたる古典文化研究を深める上で、貴重な資料のひとつといえます。',
      '本画帖の「新三十六歌仙」は後鳥羽院 (1180-1239) が撰んだといわれる歌仙を描き、表に絵色紙、裏に詞色紙を貼付しています。「新三十六歌仙」は「三十六歌仙」との対比の上で重要な作品であり、また後鳥羽院の問題、鎌倉歌人の後代の受容など、多くの研究課題を有した作品です。',
      '作者の狩野洞雲は本名益信、 11 歳で狩野探幽の養子となるが、探幽に実子が誕生したため離別し、駿河台狩野家を興します。徳川家光に寵遇され、功績を積んだものに贈られる位階の一つである法眼（ホウゲン）に叙せられました。',
    ],
    commentary2: [
      'フェリス女学院大学蔵『新三十六歌仙画帖』翻字',
      '仮名遣い・漢字など、原文のまま翻字しました。清濁は、私意により、適宜施しました。',
      '翻字は、フェリス女学院大学大学院学生、伊東真希・高橋由華・土橋由佳子・長屋夢奈・縄手聖子・武藤麗が行ないました。',
    ],
    breadcrumbs: [
      {
        text: '電子コレクション',
        disabled: false,
        href: '/digital-collection',
      },
      {
        text: '新三十六歌仙画帖',
        disabled: true,
        href: '/digital-collection/collection01',
      },
    ],
    images: [
      {
        num: '1',
        alt: '順徳院',
        src: '/images/digital-collection/collection01/02.jpg',
        caption: '1 順徳院',
        lr: '左 順徳院',
        poem: 'ほのぼのと明行やまのさくらばなかつふりまさる雪かとぞみる',
      },
      {
        num: '1',
        alt: '順徳院',
        src: '/images/digital-collection/collection01/38.jpg',
        caption:
          '左 順徳院（ほのぼのと明行やまのさくらばなかつふりまさる雪かとぞみる）',
        lr: '左 順徳院',
        poem: 'ほのぼのと明行やまのさくらばなかつふりまさる雪かとぞみる',
      },
      {
        num: '2',
        alt: '藤原秀能',
        src: '/images/digital-collection/collection01/03.jpg',
        caption: '2 藤原秀能',
        lr: '右 藤原秀能',
        poem: 'あし曳の山のしたみち跡たえて尾上のかねに月ぞのこれる',
      },
      {
        num: '2',
        alt: '藤原秀能',
        src: '/images/digital-collection/collection01/39.jpg',
        caption:
          '右 藤原秀能 （あし曳の山のしたみち跡たえて尾上のかねに月ぞのこれる）',
        lr: '右 藤原秀能',
        poem: 'あし曳の山のしたみち跡たえて尾上のかねに月ぞのこれる',
      },
      {
        num: '3',
        alt: '宮内卿',
        src: '/images/digital-collection/collection01/04.jpg',
        caption: '3 宮内卿',
        lr: '左 宮内卿',
        poem: 'かきくらしなをふるさとの雪のうちにあとこそみえねはなは散りけり',
      },
      {
        num: '3',
        alt: '宮内卿',
        src: '/images/digital-collection/collection01/40.jpg',
        caption:
          '左 宮内卿（かきくらしなをふるさとの雪のうちにあとこそみえねはなは散りけり）',
        lr: '左 宮内卿',
        poem: 'かきくらしなをふるさとの雪のうちにあとこそみえねはなは散りけり',
      },
      {
        num: '4',
        alt: '西行',
        src: '/images/digital-collection/collection01/05.jpg',
        caption: '4 西行',
        lr: '右 西行',
        poem: 'をしなべて花のさかりになりにけり山のはごとにかゝるしら雲',
      },
      {
        num: '4',
        alt: '西行',
        src: '/images/digital-collection/collection01/41.jpg',
        caption:
          '右 西行法師 （をしなべて花のさかりになりにけり山のはごとにかゝるしら雲）',
        lr: '右 西行法師',
        poem: 'をしなべて花のさかりになりにけり山のはごとにかゝるしら雲',
      },
      {
        num: '5',
        alt: '藤原実定',
        src: '/images/digital-collection/collection01/06.jpg',
        caption: '5 藤原実定',
        lr: '左 後徳大寺左大臣',
        poem: 'なごの海の霞のまよりながむれば入日をあらふおきつしら浪',
      },
      {
        num: '5',
        alt: '藤原実定',
        src: '/images/digital-collection/collection01/42.jpg',
        caption:
          '左 後徳大寺左大臣（なごの海の霞のまよりながむれば入日をあらふおきつしら浪）',
        lr: '左 後徳大寺左大臣',
        poem: 'なごの海の霞のまよりながむれば入日をあらふおきつしら浪',
      },
      {
        num: '6',
        alt: '藤原隆祐',
        src: '/images/digital-collection/collection01/07.jpg',
        caption: '6 藤原隆祐',
        lr: '右 藤原隆祐朝臣',
        poem: 'けふはなをみやこもちかし逢坂のせきのあなたにしる人もがな',
      },
      {
        num: '6',
        alt: '藤原隆祐',
        src: '/images/digital-collection/collection01/43.jpg',
        caption:
          '右 藤原隆祐朝臣 （けふはなをみやこもちかし逢坂のせきのあなたにしる人もがな）',
        lr: '右 藤原隆祐朝臣',
        poem: 'けふはなをみやこもちかし逢坂のせきのあなたにしる人もがな',
      },
      {
        num: '7',
        alt: '藤原公経',
        src: '/images/digital-collection/collection01/08.jpg',
        caption: '7 藤原公経',
        lr: '左 西園寺入道前太政大臣',
        poem: '桜花みねにも尾にもうへをかむ見ぬ世の春を人やしのぶと',
      },
      {
        num: '7',
        alt: '藤原公経',
        src: '/images/digital-collection/collection01/44.jpg',
        caption:
          '左 西園寺入道前太政大臣（桜花みねにも尾にもうへをかむ見ぬ世の春を人やしのぶと）',
        lr: '左 西園寺入道前太政大臣',
        poem: '桜花みねにも尾にもうへをかむ見ぬ世の春を人やしのぶと',
      },
      {
        num: '8',
        alt: '源通具',
        src: '/images/digital-collection/collection01/10.jpg',
        caption: '9 源通具',
        lr: '右 右衛門督通具',
        poem: 'いそのかみふる野のさくらたれうへて春はわすれぬかたみなるらむ',
      },
      {
        num: '8',
        alt: '源通具',
        src: '/images/digital-collection/collection01/45.jpg',
        caption:
          '右 右衛門督通具（いそのかみふる野のさくらたれうへて春はわすれぬかたみなるらむ）',
        lr: '右 右衛門督通具',
        poem: 'いそのかみふる野のさくらたれうへて春はわすれぬかたみなるらむ',
      },
      {
        num: '9',
        alt: '藤原俊成',
        src: '/images/digital-collection/collection01/09.jpg',
        caption: '9 藤原俊成',
        lr: '左 皇太后宮大夫俊成',
        poem: 'またやみむかたのゝみ野のさくらがり花の雪ちるはるのあけぼの',
      },
      {
        num: '9',
        alt: '藤原俊成',
        src: '/images/digital-collection/collection01/46.jpg',
        caption:
          '左 皇太后宮大夫俊成（またやみむかたのゝみ野のさくらがり花の雪ちるはるのあけぼの）',
        lr: '左 皇太后宮大夫俊成',
        poem: 'またやみむかたのゝみ野のさくらがり花の雪ちるはるのあけぼの',
      },
      {
        num: '10',
        alt: '二条院讃岐',
        src: '/images/digital-collection/collection01/11.jpg',
        caption: '10 二条院讃岐',
        lr: '右 二條院讃岐',
        poem: '山たかみ嶺の嵐にちるはなの月にあまぎる明けがたのそら',
      },
      {
        num: '10',
        alt: '二条院讃岐',
        src: '/images/digital-collection/collection01/47.jpg',
        caption:
          '右 二條院讃岐 （山たかみ嶺の嵐にちるはなの月にあまぎる明けがたのそら）',
        lr: '右 二條院讃岐',
        poem: '山たかみ嶺の嵐にちるはなの月にあまぎる明けがたのそら',
      },
      {
        num: '11',
        alt: '藤原良経',
        src: '/images/digital-collection/collection01/12.jpg',
        caption: '11 藤原良経',
        lr: '左 後京極摂政殿前太政大臣',
        poem: 'そらはなをかすみもやらずかぜさえてゆきげにくもる春の夜の月',
      },
      {
        num: '11',
        alt: '藤原良経',
        src: '/images/digital-collection/collection01/48.jpg',
        caption:
          '左 後京極摂政殿前太政大臣（そらはなをかすみもやらずかぜさえてゆきげにくもる春の夜の月）',
        lr: '左 後京極摂政殿前太政大臣',
        poem: 'そらはなをかすみもやらずかぜさえてゆきげにくもる春の夜の月',
      },
      {
        num: '12',
        alt: '小侍従',
        src: '/images/digital-collection/collection01/13.jpg',
        caption: '12 小侍従',
        lr: '右 小侍従',
        poem: 'いかなればそのかみやまのあふひ草としはふれどもふた葉なるらむ',
      },
      {
        num: '12',
        alt: '小侍従',
        src: '/images/digital-collection/collection01/49.jpg',
        caption:
          '右 小侍従 （いかなればそのかみやまのあふひ草としはふれどもふた葉なるらむ）',
        lr: '右 小侍従',
        poem: 'いかなればそのかみやまのあふひ草としはふれどもふた葉なるらむ',
      },
      {
        num: '13',
        alt: '藤原基家',
        src: '/images/digital-collection/collection01/14.jpg',
        caption: '13 藤原基家',
        lr: '左 権大納言其家',
        poem: '秋ふかきもみぢの庭のまつの戸はたがすむ峯のいほりなるらむ',
      },
      {
        num: '13',
        alt: '藤原基家',
        src: '/images/digital-collection/collection01/50.jpg',
        caption:
          '左 権大納言其家（秋ふかきもみぢの庭のまつの戸はたがすむ峯のいほりなるらむ）',
        lr: '左 権大納言其家',
        poem: '秋ふかきもみぢの庭のまつの戸はたがすむ峯のいほりなるらむ',
      },
      {
        num: '14',
        alt: '式子内親王',
        src: '/images/digital-collection/collection01/15.jpg',
        caption: '14 式子内親王',
        lr: '右 式子内親王',
        poem: 'ながむれは衣手すゞしひさかたのあまの河原の秋のはつかぜ',
      },
      {
        num: '14',
        alt: '式子内親王',
        src: '/images/digital-collection/collection01/51.jpg',
        caption:
          '右 式子内親王 （ながむれは衣手すゞしひさかたのあまの河原の秋のはつかぜ）',
        lr: '右 式子内親王',
        poem: 'ながむれは衣手すゞしひさかたのあまの河原の秋のはつかぜ',
      },
      {
        num: '15',
        alt: '後鳥羽院',
        src: '/images/digital-collection/collection01/16.jpg',
        caption: '15 後鳥羽院',
        lr: '左 後鳥羽院',
        poem: '龍田姫かぜもしらべもこゑたてつ秋や来ぬらむ岡の邊のまつ',
      },
      {
        num: '15',
        alt: '後鳥羽院',
        src: '/images/digital-collection/collection01/52.jpg',
        caption:
          '左 後鳥羽院（龍田姫かぜもしらべもこゑたてつ秋や来ぬらむ岡の邊のまつ）',
        lr: '左 後鳥羽院',
        poem: '龍田姫かぜもしらべもこゑたてつ秋や来ぬらむ岡の邊のまつ',
      },
      {
        num: '16',
        alt: '慈円',
        src: '/images/digital-collection/collection01/17.jpg',
        caption: '16 慈円',
        lr: '右 前大僧正慈鎮',
        poem: '身にとまるおもひを萩ぼうはばにてこのころうれし夕ぐれのそら',
      },
      {
        num: '16',
        alt: '慈円',
        src: '/images/digital-collection/collection01/53.jpg',
        caption:
          '右 前大僧正慈鎮 （身にとまるおもひを萩ぼうはばにてこのころうれし夕ぐれのそら）',
        lr: '右 前大僧正慈鎮',
        poem: '身にとまるおもひを萩ぼうはばにてこのころうれし夕ぐれのそら',
      },
      {
        num: '17',
        alt: '藤原定家',
        src: '/images/digital-collection/collection01/18.jpg',
        caption: '17 藤原定家',
        lr: '左 前中納言定家',
        poem: 'しら玉のをだえのはしの名もつらしみだれてをつる　袖のなみだに',
      },
      {
        num: '17',
        alt: '藤原定家',
        src: '/images/digital-collection/collection01/54.jpg',
        caption:
          '左 前中納言定家（しら玉のをだえのはしの名もつらしみだれてをつる　袖のなみだに）',
        lr: '左 前中納言定家',
        poem: 'しら玉のをだえのはしの名もつらしみだれてをつる　袖のなみだに',
      },
      {
        num: '18',
        alt: '藤原忠良',
        src: '/images/digital-collection/collection01/19.jpg',
        caption: '17 藤原忠良',
        lr: '右 前大納言忠良',
        poem: 'ゆふづく日さすやいほりのしばの戸にさびしくもあるかひぐらしのこゑ',
      },
      {
        num: '18',
        alt: '藤原忠良',
        src: '/images/digital-collection/collection01/55.jpg',
        caption:
          '右 前大納言忠良（ゆふづく日さすやいほりのしばの戸にさびしくもあるかひぐらしのこゑ）',
        lr: '右 前大納言忠良',
        poem: 'ゆふづく日さすやいほりのしばの戸にさびしくもあるかひぐらしのこゑ',
      },
      {
        num: '19',
        alt: '源家長',
        src: '/images/digital-collection/collection01/20.jpg',
        caption: '18 源家長',
        lr: '左 家長朝臣',
        poem: '春雨に野沢の水はまさらねどもえいづるくさぞふかくなりゆく',
      },
      {
        num: '19',
        alt: '源家長',
        src: '/images/digital-collection/collection01/56.jpg',
        caption:
          '左 家長朝臣 （春雨に野沢の水はまさらねどもえいづるくさぞふかくなりゆく）',
        lr: '左 家長朝臣',
        poem: '春雨に野沢の水はまさらねどもえいづるくさぞふかくなりゆく',
      },
      {
        num: '20',
        alt: '源通光',
        src: '/images/digital-collection/collection01/21.jpg',
        caption: '19 源通光',
        lr: '右 前内大臣',
        poem: '雲のゐる遠山姫のはなかつら霞をかけてにほふ春風',
      },
      {
        num: '20',
        alt: '源通光',
        src: '/images/digital-collection/collection01/57.jpg',
        caption:
          '右 前内大臣（雲のゐる遠山姫のはなかつら霞をかけてにほふ春風）',
        lr: '右 前内大臣',
        poem: '雲のゐる遠山姫のはなかつら霞をかけてにほふ春風',
      },
      {
        num: '21',
        alt: '藤原為家',
        src: '/images/digital-collection/collection01/22.jpg',
        caption: '21 藤原為家',
        lr: '左 前大納言為家',
        poem: '立のこす梢も見えす山さくらはなのあたりにかかるしらくも',
      },
      {
        num: '21',
        alt: '藤原為家',
        src: '/images/digital-collection/collection01/58.jpg',
        caption:
          '左 前大納言為家（立のこす梢も見えす山さくらはなのあたりにかかるしらくも）',
        lr: '左 前大納言為家',
        poem: '立のこす梢も見えす山さくらはなのあたりにかかるしらくも',
      },
      {
        num: '22',
        alt: '源通親',
        src: '/images/digital-collection/collection01/24.jpg',
        caption: '22 源通親',
        lr: '右 土御門内大臣',
        poem: 'おりしもあれ月はにしにも入ぬらんくもの南のはつかりのこゑ',
      },
      {
        num: '22',
        alt: '源通親',
        src: '/images/digital-collection/collection01/59.jpg',
        caption:
          '右 土御門内大臣 （おりしもあれ月はにしにも入ぬらんくもの南のはつかりのこゑ）',
        lr: '右 土御門内大臣',
        poem: 'おりしもあれ月はにしにも入ぬらんくもの南のはつかりのこゑ',
      },
      {
        num: '23',
        alt: '藤原信実',
        src: '/images/digital-collection/collection01/23.jpg',
        caption: '23 藤原信実',
        lr: '左 信実朝臣',
        poem: 'あけて見ぬたが玉章もいたづらにまた夜をこめて帰るかりがね',
      },
      {
        num: '23',
        alt: '藤原信実',
        src: '/images/digital-collection/collection01/60.jpg',
        caption:
          '左 信実朝臣（あけて見ぬたが玉章もいたづらにまた夜をこめて帰るかりがね）',
        lr: '左 信実朝臣',
        poem: 'あけて見ぬたが玉章もいたづらにまた夜をこめて帰るかりがね',
      },
      {
        num: '24',
        alt: '源具親',
        src: '/images/digital-collection/collection01/25.jpg',
        caption: '24 源具親',
        lr: '右 源具親朝臣',
        poem: 'はれくもる影をみやこにさきだてゝしぐるとつぐる山の端の月',
      },
      {
        num: '24',
        alt: '源具親',
        src: '/images/digital-collection/collection01/61.jpg',
        caption:
          '右 源具親朝臣 （はれくもる影をみやこにさきだてゝしぐるとつぐる山の端の月）',
        lr: '右 源具親朝臣',
        poem: 'はれくもる影をみやこにさきだてゝしぐるとつぐる山の端の月',
      },
      {
        num: '25',
        alt: '道助法親王',
        src: '/images/digital-collection/collection01/26.jpg',
        caption: '25 道助法親王',
        lr: '左 仁和寺宮',
        poem: '萩の葉にかぜの音せぬあきもあらばなみだのほかに月はみてまし',
      },
      {
        num: '25',
        alt: '道助法親王',
        src: '/images/digital-collection/collection01/62.jpg',
        caption:
          '左 仁和寺宮（萩の葉にかぜの音せぬあきもあらばなみだのほかに月はみてまし）',
        lr: '左 仁和寺宮',
        poem: '萩の葉にかぜの音せぬあきもあらばなみだのほかに月はみてまし',
      },
      {
        num: '26',
        alt: '俊恵',
        src: '/images/digital-collection/collection01/27.jpg',
        caption: '26 俊恵',
        lr: '右 俊恵法師',
        poem: 'ふるさとの板井の清水みくさゐて月さへすまずなりにけるかな',
      },
      {
        num: '26',
        alt: '俊恵',
        src: '/images/digital-collection/collection01/63.jpg',
        caption:
          '右 俊恵法師 （ふるさとの板井の清水みくさゐて月さへすまずなりにけるかな）',
        lr: '右 俊恵法師',
        poem: 'ふるさとの板井の清水みくさゐて月さへすまずなりにけるかな',
      },
      {
        num: '27',
        alt: '藤原兼実',
        src: '/images/digital-collection/collection01/28.jpg',
        caption: '27 藤原兼実',
        lr: '左 後九条入道前関白太政大臣',
        poem: 'かすみしくはるのしほぢをみわたせばみどりをわくるおきつしら波',
      },
      {
        num: '27',
        alt: '藤原兼実',
        src: '/images/digital-collection/collection01/64.jpg',
        caption:
          '左 後九条入道前関白太政大臣（かすみしくはるのしほぢをみわたせばみどりをわくるおきつしら波）',
        lr: '左 後九条入道前関白太政大臣',
        poem: 'かすみしくはるのしほぢをみわたせばみどりをわくるおきつしら波',
      },
      {
        num: '28',
        alt: '宜秋門院丹後',
        src: '/images/digital-collection/collection01/29.jpg',
        caption: '28 宜秋門院丹後',
        lr: '右 宜秋門院丹後',
        poem: '吹払ふ嵐のゝちのたかねより木の葉雲らで月やいづらむ',
      },
      {
        num: '28',
        alt: '宜秋門院丹後',
        src: '/images/digital-collection/collection01/65.jpg',
        caption:
          '右 宜秋門院丹後 （吹払ふ嵐のゝちのたかねより木の葉雲らで月やいづらむ）',
        lr: '右 宜秋門院丹後',
        poem: '吹払ふ嵐のゝちのたかねより木の葉雲らで月やいづらむ',
      },
      {
        num: '29',
        alt: '土御門院',
        src: '/images/digital-collection/collection01/30.jpg',
        caption: '29 土御門院',
        lr: '左 土御門院',
        poem: '伊勢の海のあまのはらなるあさがすみそらにしほやく烟とぞ見る',
      },
      {
        num: '29',
        alt: '土御門院',
        src: '/images/digital-collection/collection01/66.jpg',
        caption:
          '左 土御門院（伊勢の海のあまのはらなるあさがすみそらにしほやく烟とぞ見る）',
        lr: '左 土御門院',
        poem: '伊勢の海のあまのはらなるあさがすみそらにしほやく烟とぞ見る',
      },
      {
        num: '30',
        alt: '藤原清輔',
        src: '/images/digital-collection/collection01/31.jpg',
        caption: '30 藤原清輔',
        lr: '右 藤原清輔朝臣',
        poem: '柴の戸に入日のかげはさしながらいかにしぐるゝ山べなるらむ',
      },
      {
        num: '30',
        alt: '藤原清輔',
        src: '/images/digital-collection/collection01/67.jpg',
        caption:
          '右 藤原清輔朝臣 （柴の戸に入日のかげはさしながらいかにしぐるゝ山べなるらむ）',
        lr: '右 藤原清輔朝臣',
        poem: '柴の戸に入日のかげはさしながらいかにしぐるゝ山べなるらむ',
      },
      {
        num: '31',
        alt: '藤原有家',
        src: '/images/digital-collection/collection01/32.jpg',
        caption: '31 藤原有家',
        lr: '左 藤原有家朝臣',
        poem: '朝日影にほへる山のさくらばなつれなくきえぬ雪かとぞみる',
      },
      {
        num: '31',
        alt: '藤原有家',
        src: '/images/digital-collection/collection01/68.jpg',
        caption:
          '左 藤原有家朝臣（朝日影にほへる山のさくらばなつれなくきえぬ雪かとぞみる）',
        lr: '左 藤原有家朝臣',
        poem: '朝日影にほへる山のさくらばなつれなくきえぬ雪かとぞみる',
      },
      {
        num: '32',
        alt: '藤原家隆',
        src: '/images/digital-collection/collection01/34.jpg',
        caption: '32 藤原家隆',
        lr: '右 従二位家隆',
        poem: 'かぎりあれば明なんとする鐘の音になをながき夜の月ぞのこれる',
      },
      {
        num: '32',
        alt: '藤原家隆',
        src: '/images/digital-collection/collection01/69.jpg',
        caption:
          '右 従二位家隆 （かぎりあれば明なんとする鐘の音になをながき夜の月ぞのこれる）',
        lr: '右 従二位家隆',
        poem: 'かぎりあれば明なんとする鐘の音になをながき夜の月ぞのこれる',
      },
      {
        num: '33',
        alt: '殷冨門院大輔',
        src: '/images/digital-collection/collection01/33.jpg',
        caption: '33 殷冨門院大輔',
        lr: '左 殷冨門院大輔',
        poem: 'はるかぜのかすみふきとくたえまよりみだれてなびくあをやぎのいと',
      },
      {
        num: '33',
        alt: '殷冨門院大輔',
        src: '/images/digital-collection/collection01/70.jpg',
        caption:
          '左 殷冨門院大輔（はるかぜのかすみふきとくたえまよりみだれてなびくあをやぎのいと）',
        lr: '左 殷冨門院大輔',
        poem: 'はるかぜのかすみふきとくたえまよりみだれてなびくあをやぎのいと',
      },
      {
        num: '34',
        alt: '寂蓮',
        src: '/images/digital-collection/collection01/35.jpg',
        caption: '34 寂蓮',
        lr: '右 寂蓮法師',
        poem: 'かづらきやたかまの桜さきにけり龍田のおくにかかるしら雲',
      },
      {
        num: '34',
        alt: '寂蓮',
        src: '/images/digital-collection/collection01/71.jpg',
        caption:
          '右 寂蓮法師 （かづらきやたかまの桜さきにけり龍田のおくにかかるしら雲）',
        lr: '右 寂蓮法師',
        poem: 'かづらきやたかまの桜さきにけり龍田のおくにかかるしら雲',
      },
      {
        num: '35',
        alt: '藤原雅経',
        src: '/images/digital-collection/collection01/37.jpg',
        caption: '35 藤原雅経',
        lr: '左 参議雅経',
        poem: 'しら雲の絶間になびく青柳のかづらき山に春風ぞふく',
      },
      {
        num: '35',
        alt: '藤原雅経',
        src: '/images/digital-collection/collection01/72.jpg',
        caption:
          '左 参議雅経（しら雲の絶間になびく青柳のかづらき山に春風ぞふく）',
        lr: '左 参議雅経',
        poem: 'しら雲の絶間になびく青柳のかづらき山に春風ぞふく',
      },
      {
        num: '36',
        alt: '俊成卿女',
        src: '/images/digital-collection/collection01/36.jpg',
        caption: '36 俊成卿女',
        lr: '右 俊成卿女',
        poem: 'したもゑにおもひ消なむけぶりだにあとなきくものはてぞかなしき',
      },
      {
        num: '36',
        alt: '俊成卿女',
        src: '/images/digital-collection/collection01/73.jpg',
        caption:
          '右 俊成卿女 （したもゑにおもひ消なむけぶりだにあとなきくものはてぞかなしき）',
        lr: '右 俊成卿女',
        poem: 'したもゑにおもひ消なむけぶりだにあとなきくものはてぞかなしき',
      },
    ],
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped>
.caption {
  margin: 0;
}
.titleLogo {
  max-width: 100%;
}
.honzi {
  margin: 0;
}
.hidden {
  visibility: hidden;
}
</style>
