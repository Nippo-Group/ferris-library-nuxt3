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
        <v-card>
          <v-card-title>
            <img :src="titleLogo" :alt="title" class="titleLogo" />
          </v-card-title>
          <v-card-text v-html="commentary1"> </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            {{ commentary2 }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="(image, idx) in images"
        :key="'image' + idx"
        :cols="image.cover ? layoutCover[0] : layoutOther[0]"
        :lg="image.cover ? layoutCover[1] : layoutOther[1]"
      >
        <v-card
          v-if="image.cover"
          elevation="0"
          color="grey lighten-4"
          height="100%"
          @click="index = idx"
        >
          <v-card-title>
            {{ image.caption }}
          </v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="12" sm="5">
                <v-img
                  :src="image.src"
                  class="open-tinybox"
                  aspect-ratio="1"
                  contain
                >
                  <template #placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
              <v-col cols="12" sm="7">
                <p>{{ image.text }}</p>
                <v-chip v-if="image.num" small class="mr-2">請求記号</v-chip
                >{{ image.num }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card
          v-else
          elevation="0"
          color="grey lighten-4"
          height="100%"
          @click="index = idx"
        >
          <v-img :src="image.src" class="open-tinybox" aspect-ratio="1" contain>
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text>{{ image.caption }}の内容</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <VueTinybox v-model="index" :images="images" loop></VueTinybox>
  </v-container>
</template>

<script>
export default {
  name: 'PageDigitalCollection05',
  data: () => ({
    title: 'ビアトリクス・ポターの絵本',
    titleLogo: '/images/digital-collection/collection05/title-logo.gif',
    index: null,
    dialog: false,
    layoutCover: [12, 6],
    layoutOther: [6, 3],
    commentary1:
      '<h3>ピーターラビットの絵本シリーズ</h3><p>この小さな絵本シリーズは英国のビアトリクス・ポター（Beatrix Potter, 1866－1943）の作品です。これらの絵本は全部で23冊のシリーズになっています。最初の作品は101年前に出版された、シリーズの第1作、世界中で親しまれているThe Tale of Peter Rabbit (『ピーターラビットのおはなし』)です。</p><p>ポターは生涯、自然とともに生きた女性で、幼いときから自然や生きものを徹底的に観察し、写実的に描きました。また彼女の作品には舞台として、彼女が暮らしていた湖水地方の自然の風景や建物が描いてあり、登場者はこの地方に生きていた動物がモデルとなっています。また作品の中に、彼女が飼っていたペットのウサギやハリネズミなども登場します。</p><p>このたび出版社のご協力を得て、全作品を電子データ化することができました。ネット上で、全作品の表紙を見ることができます。図書館の貴重資料室では、研究用にイラストレーションとテクストを詳しく調査できるようになっています。 本大学図書館にはシリーズ23冊の英語版、日本語版、また初版本を含む貴重な古書などもそろえてありますので、関心のある方は、図書館で実際に作品を手にとって見て下さい。</p>',
    commentary2:
      'ビアトリクス・ポター（1866～1943）はロンドンの裕福で厳格な家庭に育った。少女時代から田園を愛し、小動物の観察やスケッチに没頭した。彼女の自然に対する情熱は、「ピーターラビットの絵本」シリーズの創作に色濃く反映されている。後半生はイングランド湖水地方に住みつき、羊の飼育と自然保護活動にカを注いだ。',
    breadcrumbs: [
      {
        text: '電子コレクション',
        disabled: false,
        href: '/digital-collection',
      },
      {
        text: 'ビアトリクス・ポターの絵本',
        disabled: true,
        href: '/digital-collection/collection05',
      },
    ],
    images: [
      {
        num: 'E//P//01',
        src: '/images/digital-collection/collection05/01-000.jpg',
        caption: '『ピーターラビットのおはなし』（1902年刊）',
        text: 'ポターがかつての家庭教師の幼い息子、ノエル・ムーアに出した絵手紙を、本にして出版するために書き直したものです。それから百年もの間、いたずらなうさぎのピーターが、マグレガーさんの畑から命からがら脱出するこのお話は、世界中の子どもたちを魅了し続けています。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/01-003.jpg',
        caption: '『ピーターラビットのおはなし』（1902年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/01-004.jpg',
        caption: '『ピーターラビットのおはなし』（1902年刊）',
        cover: false,
      },
      {
        num: 'E//P//02',
        src: '/images/digital-collection/collection05/02-000.jpg',
        caption: '『ベンジャミン バニーのおはなし』（1904年刊）',
        text: '『ピーターラビットのおはなし』の続きです。ピーターは、あれほど痛い目にあったにもかかわらず、向こう見ずないとこのベンジャミンに誘われて、またもやマグレガーさんの畑に踏み入ってしまいます。ポターは、実際にベンジャミンという名のうさぎを飼っていたことがあり、そのうさぎをいつも連れ歩いてスケッチしていたそうです。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/02-003.jpg',
        caption: '『ベンジャミンバニーのおはなし』（1904年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/02-004.jpg',
        caption: '『ベンジャミンバニーのおはなし』（1904年刊）',
        cover: false,
      },
      {
        num: 'E//P//03',
        src: '/images/digital-collection/collection05/03-000.jpg',
        caption: '『フロプシーのこどもたち』（1909年刊）',
        text: '読者に大人気のピーターラビットとベンジャミンバニーが再び登場します。今や二人とも大人になり、ベンジャミンはピーターの妹のフロプシーと結婚して6匹の小うさぎがうまれていますが、ある日、マグレガーさんの畑でレタスを食べすぎて眠り込んでしまった小うさぎたちに危険が迫ります。このお話の舞台として使われたのは、北ウェールズにあるグウェニノグという大きな屋敷の美しい庭園でした。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/03-003.jpg',
        caption: '『フロプシーのこどもたち』（1909年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/03-004.jpg',
        caption: '『フロプシーのこどもたち』（1909年刊）',
        cover: false,
      },
      {
        num: 'E//P//04',
        src: '/images/digital-collection/collection05/04-000.jpg',
        caption: '『こねこのトムのおはなし』（1907年刊）',
        text: 'ポターが書き始めたのは、湖水地方のソーリー村にあるヒルトップ農場を購入してから一年たった頃でした。この本では、ヒルトップ農場の家と庭が、そっくりそのまま描かれています。トムとその姉妹たちが住んでいるのはヒルトップの家で、彼らが遊びたわむれているのはポター自身が手がけた美しい庭です。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/04-003.jpg',
        caption: '『こねこのトムのおはなし』（1907年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/04-004.jpg',
        caption: '『こねこのトムのおはなし』（1907年刊）',
        cover: false,
      },
      {
        num: 'E//P//05',
        src: '/images/digital-collection/collection05/05-000.jpg',
        caption: '『モペットちゃんのおはなし』（1906年刊）',
        text: 'それまでのポターの絵本よりも、さらに幼い子ども向けに書かれました。最初『こわいわるいうさぎのおはなし』と一緒に、折りたたみ式パノラマ絵本の形で出版されましたが、傷みやすかったため、1916年からは普通の形で出版されるようになりました。ポターが借りてきて絵のモデルにした子ネコは、モペットちゃんにも負けないくらいのきかんぼうだったそうです。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/05-003.jpg',
        caption: '『モペットちゃんのおはなし』（1906年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/05-004.jpg',
        caption: '『モペットちゃんのおはなし』（1906年刊）',
        cover: false,
      },
      {
        num: 'E//P//06',
        src: '/images/digital-collection/collection05/06-000.jpg',
        caption: '『こわいわるいうさぎのおはなし』（1906年刊）',
        text: 'それまでのポターの絵本よりも、さらに幼い子ども向けに書かれました。最初『モペットちゃんのおはなし』と一緒に、折りたたみ式パノラマ絵本の形で出版されましたが、傷みやすかったため、1916年からは普通の形で出版されるようになりました。このお話は、ポターの担当編集者の幼い娘の「ピーターラビットはいい子すぎるから、今度はほんとうに悪いうさぎの話が読みたい」という注文にこたえて作られました。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/06-003.jpg',
        caption: '『こわいわるいうさぎのおはなし』（1906年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/06-004.jpg',
        caption: '『こわいわるいうさぎのおはなし』（1906年刊）',
        cover: false,
      },
      {
        num: 'E//P//07',
        src: '/images/digital-collection/collection05/07-000.jpg',
        caption: '『2ひきのわるいねずみのおはなし』（1904年刊）',
        text: 'ポターのペットのねずみ、トム・サムとハンカ・マンカが、主人公として登場します。本の中に出てくる人形の家は、ポターの担当編集者ノーマン・ウォーンの姪が、実際に持っていたものがモデルです。ポターは、2匹のねずみが巣の中にものを運びこむ様子を見ていたとき、人形たちの留守にねずみが家を荒らしに行くお話を思いついたそうです。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/07-003.jpg',
        caption: '『2ひきのわるいねずみのおはなし』（1904年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/07-004.jpg',
        caption: '『2ひきのわるいねずみのおはなし』（1904年刊）',
        cover: false,
      },
      {
        num: 'E//P//08',
        src: '/images/digital-collection/collection05/08-000.jpg',
        caption: '『のねずみチュウチュウおくさんのおはなし』（1910年刊）',
        text: '『フロプシーのこどもたち』で脇役として登場し、小うさぎたちを助け出したのねずみが主人公です。ポターは若いころ、ロンドンの自然史博物館で昆虫を精密に写生していました。チュウチュウおくさんの家に来た招かれざる客である、クモやハチなどの見事な挿絵は、その熱心な研究のたまものと言えるでしょう。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/08-003.jpg',
        caption: '『のねずみチュウチュウおくさんのおはなし』（1910年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/08-004.jpg',
        caption: '『のねずみチュウチュウおくさんのおはなし』（1910年刊）',
        cover: false,
      },
      {
        num: 'E//P//09',
        src: '/images/digital-collection/collection05/09-000.jpg',
        caption: '『まちねずみジョニーのおはなし』（1918年刊）',
        text: 'イソップ寓話にもとづく話ですが、イングランド湖水地方が舞台となっています。まちのねずみのジョニーが住んでいるのはホークスヘッドの町で、いなかのねずみのチミーが住んでいるのはソーリー村です。お話の最後で言っているように、ポター自身は断然いなかのほうが好きでした。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/09-003.jpg',
        caption: '『まちねずみジョニーのおはなし』（1918年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/09-004.jpg',
        caption: '『まちねずみジョニーのおはなし』（1918年刊）',
        cover: false,
      },
      {
        num: 'E//P//10',
        src: '/images/digital-collection/collection05/10-000.jpg',
        caption: '『りすのナトキンのおはなし』（1903年刊）',
        text: '舞台は、イングランド湖水地方のダーウェント湖です。りすたちがふさふさしたしっぼを帆の代わりにして小さないかだで水の上を渡るという、アメリカのお話がもとになっています。りすのナトキンは、仲間のりすたちと一緒に、木の実を集めにふくろうじまへでかけますが、ふくろうのブラウンじいさまに無礼なふるまいをしたために、大変な災難にみまわれます。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/10-003.jpg',
        caption: '『りすのナトキンのおはなし』（1903年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/10-004.jpg',
        caption: '『りすのナトキンのおはなし』（1903年刊）',
        cover: false,
      },
      {
        num: 'E//P//11',
        src: '/images/digital-collection/collection05/11-000.jpg',
        caption: '『あひるのジマイマのおはなし』（1908年刊）',
        text: 'ポターが初めて所有した農場の「ヒルトップ」と、それをかこむ村が舞台となっています。ジマイマは、実際にヒルトップ農場にいた、卵をかえすのが苦手なあひるがモデルです。ポターがかわいがっていた牧羊犬のケップも、きつねの魔の手からジマイマを救い出す賢い友人として登場します。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/11-003.jpg',
        caption: '『あひるのジマイマのおはなし』（1908年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/11-004.jpg',
        caption: '『あひるのジマイマのおはなし』（1908年刊）',
        cover: false,
      },
      {
        num: 'E//P//12',
        src: '/images/digital-collection/collection05/12-000.jpg',
        caption: '『「ジンジャーとピクルズや」のおはなし』（1909年刊）',
        text: '出版された当時、ソーリー村の住人たちは、慣れ親しんだ村の風景が本の中にたくさん出てくるので、とてもおもしろがったそうです。また、ポターのファンたちも、ピーターラビットやその姉妹など、前に出た本でおなじみの面々が、お店の客としてさりげなく登場しているのを見て、大変喜びました。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/12-003.jpg',
        caption: '『「ジンジャーとピクルズや」のおはなし』（1909年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/12-005.jpg',
        caption: '『「ジンジャーとピクルズや」のおはなし』（1909年刊）',
        cover: false,
      },
      {
        num: 'E//P//13',
        src: '/images/digital-collection/collection05/13-000.jpg',
        caption: '『キツネどんのおはなし』（1912年刊）',
        text: 'アナグマ・トミーとキツネどんという二人の悪党が出てきます。読者に最も人気があるピーターラビットとベンジャミン・バニーも登場して、大活躍します。今回の冒険では、ベンジャミンの子どもたちがアナグマ・トミーにさらわれますが、アナグマ・トミーと嫌い合っているキツネどんが、図らずも小うさぎたちの救出に手を貸してしまうことになります。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/13-003.jpg',
        caption: '『キツネどんのおはなし』（1912年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/13-008.jpg',
        caption: '『キツネどんのおはなし』（1912年刊）',
        cover: false,
      },
      {
        num: 'E//P//14',
        src: '/images/digital-collection/collection05/14-000.jpg',
        caption: '『ひげのサムエルのおはなし』（1908年刊）',
        text: 'ヒルトップ農場の家が舞台です。この古い家には、ねずみたちが隠れるのに都合のいい場所がたくさんあり、ポターはねずみを追い払うのにいつも苦労していました。このお話では、こねこのトムが、サムエルという大ねずみの住みついている天井裏に迷い込んで、危うく「ねこまきだんご」にされそうになってしまいます。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/14-003.jpg',
        caption: '『ひげのサムエルのおはなし』（1908年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/14-014.jpg',
        caption: '『ひげのサムエルのおはなし』（1908年刊）',
        cover: false,
      },
      {
        num: 'E//P//15',
        src: '/images/digital-collection/collection05/15-000.jpg',
        caption: '『グロースターの仕たて屋』（1903年刊）',
        text: 'ポターが一番気に入っていた絵本です。このお話は、仕たて屋が縫いかけの上着を店において帰ったところ、驚いたことに朝にはそれが仕上げられていたという実話にもとづいて書かれたものです。後になって仕たて屋の弟子たちのしわざとわかったのですが、ポターはそれを小さい茶色のねずみたちがクリスマス・イブにしたことという設定にして、このお話をつくりました。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/15-003.jpg',
        caption: '『グロースターの仕たて屋』（1903年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/15-004.jpg',
        caption: '『グロースターの仕たて屋』（1903年刊）',
        cover: false,
      },
      {
        num: 'E//P//16',
        src: '/images/digital-collection/collection05/16-000.jpg',
        caption: '『ティギーおばさんのおはなし』（1905年刊）',
        text: '主人公のティギー・ウィンクルおばさんは、キティ・マクドナルドという名のスコットランド人の洗濯屋さんがモデルです。ティギーおばさんも、実在のキティ・マクドナルドと同じように、小さくて丸っこい、うでききの洗濯屋ですが、キティとは異なって、ぼうしの下にはとげを生やし、動物たちのきみょうな洗濯物をたくさん引き受けています。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/16-003.jpg',
        caption: '『ティギーおばさんのおはなし』（1905年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/16-004.jpg',
        caption: '『ティギーおばさんのおはなし』（1905年刊）',
        cover: false,
      },
      {
        num: 'E//P//17',
        src: '/images/digital-collection/collection05/17-000.jpg',
        caption: '『ジェレミー・フィッシャーどんのおはなし』（1906年刊）',
        text: 'ポターがエリック・ムーアという幼い少年に出した絵手紙がもとになっています。この絵手紙は、ポターが家族と一緒にスコットランドで避暑をしていたときに書かれました。個性あふれる登場人物たちは、ポターの父の釣り仲間がモデルです。たった一日の間に、釣り人として考えられうる限りの不運にみまわれるカエルの姿が、ユーモラスに描かれています。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/17-003.jpg',
        caption: '『ジェレミー・フィッシャーどんのおはなし』（1906年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/17-004.jpg',
        caption: '『ジェレミー・フィッシャーどんのおはなし』（1906年刊）',
        cover: false,
      },
      {
        num: 'E//P//18',
        src: '/images/digital-collection/collection05/18-000.jpg',
        caption: '『カルアシ・チミーのおはなし』（1911年刊）',
        text: 'ポターの小さい絵本のシリーズは、母国イギリスだけでなくアメリカでも大人気になりました。ポターは、アメリカの読者に喜んでもらおうとして、ハイイロリス、シマリス、クロクマなど、アメリカに生息する動物を登場させ、それらの動物たちがイングランド湖水地方の森で楽しく暮らす様子を描きました。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/18-003.jpg',
        caption: '『カルアシ・チミーのおはなし』（1911年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/18-004.jpg',
        caption: '『カルアシ・チミーのおはなし』（1911年刊）',
        cover: false,
      },
      {
        num: 'E//P//19',
        src: '/images/digital-collection/collection05/19-000.jpg',
        caption: '『パイがふたつあったおはなし』（1905年刊）',
        text: 'ポターがソーリー村にあるヒルトップ農場を購入した年に出版されました。このお話には、ソーリー村に実際にある家々、庭、小道などが、そっくりそのまま描かれていますが、登場する住民たちはみな動物です。ねこのリビーがいぬのダッチェスをお茶の会に招待したことから、こっけいな騒動が始まります。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/19-003.jpg',
        caption: '『パイがふたつあったおはなし』（1905年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/19-008.jpg',
        caption: '『パイがふたつあったおはなし』（1905年刊）',
        cover: false,
      },
      {
        num: 'E//P//20',
        src: '/images/digital-collection/collection05/20-000.jpg',
        caption: '『ずるいねこのおはなし』（1971年刊）',
        text: 'もともとはポターがネリー・ウォーンという幼い少女にプレゼントした、折りたたみ式の手製本でした。1916年、出版が検討されましたが、ポターが絵を描き直すのに気が乗らず、取りやめになりました。結局、ポターの死後30年近くたった1971年、ネリーのために描かれたオリジナルのスケッチを使って、初めてこの本が出版されました。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/20-003.jpg',
        caption: '『ずるいねこのおはなし』（1971年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/20-004.jpg',
        caption: '『ずるいねこのおはなし』（1971年刊）',
        cover: false,
      },
      {
        num: 'E//P//21',
        src: '/images/digital-collection/collection05/21-000.jpg',
        caption: '『こぶたのピグリン・ブランドのおはなし』（1913年刊）',
        text: 'ビアトリクス・ポターがウィリアム・ヒーリス氏と結婚し、農場での生活に腰を落ち着けた年に出版されました。ポターは何年も前から、このお話に使うために、自分で飼っているブタのスケッチをしていました。お話でピグリンと手をつないで逃げ出す雌の黒ブタのピグウィグは、ポターが家の中で飼っていたペットのブタがモデルです。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/21-003.jpg',
        caption: '『こぶたのピグリン・ブランドのおはなし』（1913年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/21-008.jpg',
        caption: '『こぶたのピグリン・ブランドのおはなし』（1913年刊）',
        cover: false,
      },
      {
        num: 'E//P//22',
        src: '/images/digital-collection/collection05/22-000.jpg',
        caption: '『アプリイ・ダプリイのわらべうた』（1917年刊）',
        text: 'ポターが長いこと心の中であたためてきたわらべうたの本の構想が、ついに形になったものです。1917年、彼女の本を出版しているウォーン社が破産の危機に陥ったとき、ポターがかきためてきた詩と絵をまとめて、この本が出版されました。これを機に、ウォーン社は再建を始めることができました。同じ本の中でも絵のスタイルが異なるのは、描かれた時期がそれぞれ違うからです。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/22-003.jpg',
        caption: '『アプリイ・ダプリイのわらべうた』（1917年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/22-004.jpg',
        caption: '『アプリイ・ダプリイのわらべうた』（1917年刊）',
        cover: false,
      },
      {
        num: 'E//P//23',
        src: '/images/digital-collection/collection05/23-000.jpg',
        caption: '『セシリ・パセリのわらべうた』（1922年刊）',
        text: 'ポターの二冊目のわらべうたの本です。一冊目の『アプリイ・ダプリイのわらべうた』と同じように、ポターがずっと以前からかきためてきた詩と絵をまとめてつくられました。 例えば、「てんじくねずみの畑」の絵は、1893年に初めて描かれたものですし、「セシリ・パセリの詩」は、1897年にポターが小冊子にしたものです。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/23-003.jpg',
        caption: '『セシリ・パセリのわらべうた』（1922年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/23-004.jpg',
        caption: '『セシリ・パセリのわらべうた』（1922年刊）',
        cover: false,
      },
      {
        num: '',
        src: '/images/digital-collection/collection05/24-000.jpg',
        caption: '『こぶたのロビンソンのおはなし』（1930年刊）',
        text: '「ピーターラビット」シリーズの中では最後に出版されましたが、書き始められたのはその40年近く前のことでした。舞台のスケッチは、ポターが若いころ休暇を過ごした、いくつかのイングランドの海辺の町で行われました。あるときポターは、ファルマスの港で船に乗っているブタを見ました。この光景から、デボンシャーの農場から波乱万丈の旅の末、ボング樹の生えている島にたどりつく、こぶたのロビンソンのお話が生まれたのです。',
        cover: true,
      },
      {
        src: '/images/digital-collection/collection05/24-003.jpg',
        caption: '『こぶたのロビンソンのおはなし』（1930年刊）',
        cover: false,
      },
      {
        src: '/images/digital-collection/collection05/24-007.jpg',
        caption: '『こぶたのロビンソンのおはなし』（1930年刊）',
        cover: false,
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
</style>
