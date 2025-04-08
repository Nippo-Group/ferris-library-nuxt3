export const globalNavigation = [
  {
    category: 'ホーム',
    id: 'home',
    icon: 'home',
    push: '/',
  },
  {
    category: '施設について',
    id: 'facility',
    icon: 'library',
    contents: [
      {
        title: 'アクセス・問い合わせ',
        id: 'contact',
        push: '/contact',
      },
      {
        title: '開館カレンダー・開館時間',
        id: 'calendar',
        push: '/calendar',
      },
      {
        title: 'フロアマップ',
        id: 'floorMap',
        push: '/floor-map',
      },
      {
        title: 'ラーニングコモンズ',
        id: 'learningCommons',
        push: '/learning-commons',
      },
    ],
  },
  {
    category: '利用案内',
    id: 'service',
    icon: 'info',
    contents: [
      {
        title: '貸出サービス',
        id: 'lendingService',
        push: '/service',
      },
      {
        title: 'レファレンスサービス',
        id: 'reference',
        push: '/reference',
      },
      {
        title: 'ツアー・ガイダンス',
        id: 'tour',
        push: '/tour',
      },
      {
        title: 'コンソーシアム',
        id: 'consortium',
        push: '/consortium',
      },
      {
        title: 'WEB版利用案内',
        id: 'guide',
        push: '/guide',
      },
      {
        title: '障がいのある方への支援',
        id: 'supports',
        push: '/supports',
      },
      {
        title: '学外の方へ',
        id: 'visitor',
        push: '/visitor',
      },
      {
        title: 'よくある質問 Q&A',
        id: 'question',
        push: '/question',
      },
      {
        title: '各種申込書',
        id: 'application',
        href: 'https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top&method=open',
      },
    ],
  },
  {
    category: '情報検索',
    id: 'retrieval',
    icon: 'search',
    contents: [
      {
        title: '情報検索',
        id: 'informationSearch',
        push: '/information-search',
      },
      {
        title: '資料の探し方',
        id: 'howToFind',
        push: '/how-to-find',
      },
      {
        title: 'データベース・電子ブック',
        id: 'database',
        push: '/database',
      },
      {
        title: 'キャリア支援',
        id: 'carrier',
        push: '/carrier',
      },
      {
        title: '緑園本館所蔵新聞リスト',
        id: 'newspaper',
        push: '/newspaper',
      },
      {
        title: '一次情報リンク集',
        id: 'linksCollection1',
        push: '/links-collection-1',
      },
      {
        title: '二次情報リンク集',
        id: 'linksCollection2',
        push: '/links-collection-2',
      },
    ],
  },
  {
    category: 'ニュース',
    id: 'news',
    icon: 'newspaper',
    push: '/news',
    contents: [
      {
        title: 'NEWS 一覧',
        id: 'news',
        push: '/news',
      },
    ],
  },
  {
    category: 'トピックス',
    id: 'topics',
    icon: 'bookOpen',
    contents: [
      {
        title: '読書運動プロジェクト',
        id: 'readingProject',
        push: '/reading-project',
      },
      {
        title: '企画展示',
        id: 'exhibition',
        push: '/exhibition',
      },
      {
        title: '学科推奨図書',
        id: 'recommend',
        push: '/recommend',
      },
      {
        title: '英語多読図書',
        id: 'englishTadoku',
        push: '/english-tadoku',
      },
      {
        title: '電子コレクション',
        id: 'digitalCollection',
        push: '/digital-collection',
      },
    ],
  },
  {
    category: '関連リンク',
    id: 'links',
    icon: 'connection',
    contents: [
      {
        title: 'OPAC',
        id: 'opac',
        href: 'https://www2.library.ferris.ac.jp/top/index?method=open',
      },
      {
        title: '電子図書館 LibrariE',
        subtitle: 'ライブラリエ',
        id: 'librarie',
        href: 'https://web.d-library.jp/ferris/g0101/top/',
      },
      {
        title: '学術機関リポジトリ',
        id: 'fair',
        href: 'https://ferris.repo.nii.ac.jp/',
      },
      {
        title: 'Book Web Pro',
        id: 'bookWebPro',
        href: 'https://pro.kinokuniya.co.jp/',
      },
      {
        title: 'フェリス女学院大学',
        id: 'ferrisUniversity',
        href: 'http://www.ferris.ac.jp/',
      },
    ],
  },
  {
    category: 'English page',
    id: 'englishPage',
    icon: 'translate',
    push: '/english',
  },
]

export const globalNavigationEng = [
  {
    category: 'Home',
    id: 'home',
    icon: 'home',
    push: '/english',
  },
  {
    category: 'Facility',
    id: 'facility',
    icon: 'library',
    contents: [
      {
        title: 'Contact / Access',
        id: 'contact',
        push: '/english/contact',
      },
      {
        title: 'Calendar',
        id: 'calendar',
        push: '/english/calendar',
      },
    ],
  },
  {
    category: 'Service',
    id: 'service',
    icon: 'info',
    contents: [
      {
        title: 'Lending Service',
        id: 'lendingService',
        push: '/english/service',
      },
      {
        title: 'Reference Service',
        id: 'reference',
        push: '/english/reference',
      },
      {
        title: 'Tour and Guidance',
        id: 'tour',
        push: '/english/tour',
      },
      {
        title: 'Various application form',
        id: 'application',
        href: 'https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top&method=open',
      },
    ],
  },
  {
    category: 'Information search',
    id: 'retrieval',
    icon: 'search',
    push: '/english/information-search',
  },
  {
    category: 'Links',
    id: 'links',
    icon: 'connection',
    contents: [
      {
        title: 'OPAC',
        id: 'opac',
        href: 'https://www2.library.ferris.ac.jp/top/index?method=change&langMode=ENG',
      },
      {
        title: 'FAIR：Ferris Academic Intelligence repository',
        id: 'fair',
        href: 'https://ferris.repo.nii.ac.jp/',
      },
      {
        title: 'Ferris University',
        id: 'ferrisUniversity',
        href: 'https://www.ferris.ac.jp/en/',
      },
    ],
  },
  {
    category: '日本語ページ',
    id: 'japanesePage',
    icon: 'translate',
    push: '/',
  },
]
