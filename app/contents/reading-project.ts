import imgPlanning01 from '~/assets/images/reading-project/about-planning-01.png'
import imgPlanning02 from '~/assets/images/reading-project/about-planning-02.png'
import imgRecitation01 from '~/assets/images/reading-project/about-recitation-01.png'
import imgRecitation02 from '~/assets/images/reading-project/about-recitation-02.png'

export const isWhat
  = '本学の読書運動プロジェクトは、1998年にシアトル市で始まり、シカゴ市で2001年以降大きな成果を収め全米各地に広まった《One Book, One Community.》にヒントを得たものです。この取組みは、選定された図書の読書を通じてコミュニティの意識を育むOneBook, One Chicagoとしてシカゴ公共図書館で現在も続いています。本学では2002年度から始まり、図書館を拠点として「読書」を個人的な経験だけでなく他者と共有・発信する活動を支援しています。'

export const mainActivity = [
  '本の展示',
  'POPコンテスト・創作コンクール',
  '選書ツアー',
  '朗読会',
  '各種イベントの実施',
]
export const documents = [
  {
    name: '活動報告書',
    url: '/documents/reading-project/activity-report2020-2021.pdf',
    type: 'PDF',
  },
  {
    name: 'リーフレット',
    url: '/documents/reading-project/activity-introduction-leaflet.pdf',
    type: 'PDF',
  },
]

export const recommendedFor = [
  '本が好き',
  'イラストを描くのが好き',
  'イベントが好き、企画してみたい',
  '大学生だからこそできる活動がしたい',
  '人前で話すのは苦手だが、克服したい',
]

export const mediaInformation = {
  title: '掲載されました！',
  actions: [
    {
      url: 'https://magazine.ferris.ac.jp/20230511/18045/',
      title: '読書運動プロジェクト活動報告　～2023春～',
      source: 'フェリスを綴る　2023年5月11日掲載',
    },
    {
      url: 'https://magazine.ferris.ac.jp/20230328/17905/',
      title:
          '読書運動プロジェクト：朗読会「しあわせの、かたち。 ―ひとりひとりが願うこと―」を開催しました',
      source: 'フェリスを綴る　2023年3月28日掲載',
    },
    {
      url: 'https://magazine.ferris.ac.jp/20221021/17101/',
      title:
          '読書体験の魅力を共有し、新たな本に出会う機会を創出する読書運動プロジェクト',
      source: 'フェリスを綴る　2022年10月11日掲載',
    },
    {
      url: 'https://magazine.ferris.ac.jp/20220830/16312/',
      title: '読書運動プロジェクト活動報告　～2022夏～',
      source: 'フェリスを綴る　2022年8月30日掲載',
    },
  ],
}

export const teamPlanning = {
  name: '企画チーム',
  content: '毎年テーマを決めて読書会や本の展示を行うほか、大学祭では展示発表やワークショップを主催します。<br />本をツールとしたおもしろい企画やアイデアいっぱいの広報を展開します。',
  images: [imgPlanning01, imgPlanning02],
}

export const teamRecitation = {
  name: '朗読チーム',
  content: '朗読の専門家から直々に指導を受けられるので、 マイクなしで相手に伝わりやすい声、 表現方法が身につきます。<br />大学祭や文学館など、学内外で発表の機会があります。',
  images: [imgRecitation01, imgRecitation02],
  movie: {
    src: 'https://www.youtube.com/embed/WcCruNTE__M',
    title: '朗読動画（演目「やまなし」）',
  },
}

export const movies = [
  {
    src: 'https://www.youtube.com/embed/HRKpRB5fZ-o',
    title: '図書館施設・設備編',
  },
  {
    src: 'https://www.youtube.com/embed/rBAip8vAxKU',
    title: 'ラーニングコモンズ編',
  },
]
