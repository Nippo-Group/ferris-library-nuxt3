import imgReadingProject from '~/assets/images/pickout/home-pickout-reading-project.png'
import imgExhibition from '~/assets/images/pickout/home-pickout-exhibition.png'
import imgDatabase from '~/assets/images/pickout/home-pickout-database.png'
import imgDigitalCollection from '~/assets/images/pickout/home-pickout-digital-collection.png'
import imgReference from '~/assets/images/pickout/home-pickout-reference.png'

export const pickOut = [
  {
    name: '読書運動プロジェクト',
    to: '/reading-project',
    text: '図書館を拠点とした、「読書」を共有・発信する様々な活動をご紹介します',
    image: imgReadingProject,
  },
  {
    name: '企画展示',
    to: '/exhibition',
    text: '図書館で実施する企画展示をご紹介します',
    image: imgExhibition,
  },
  {
    name: ['データベース', '・電子ブック'],
    to: '/database',
    text: '図書館で契約しているデータベースや電子ブックを検索することができます',
    image: imgDatabase,
  },
  {
    name: '電子コレクション',
    to: '/digital-collection',
    text: '図書館所蔵の貴重な資料をWEBから閲覧できます',
    image: imgDigitalCollection,
  },
  {
    name: 'レファレンスサービス',
    to: '/reference',
    text: 'ご希望の資料が当図書館にない場合も資料を探すお手伝いができます',
    image: imgReference,
  },
]
