import materialsAndCopyright from '~/assets/md/search-guide/materials-and-copyright.md'
import findLibraryMaterials from '~/assets/md/search-guide/find-library-materials.md'
import browseShelves from '~/assets/md/search-guide/browse-shelves.md'
import browseInternational from '~/assets/md/search-guide/browse-international.md'
import browsePsychology from '~/assets/md/search-guide/browse-psychology.md'
import browseCultural from '~/assets/md/search-guide/browse-cultural.md'
import opacSearch from '~/assets/md/search-guide/opac-search.md'
import searchTipsBasic from '~/assets/md/search-guide/search-tips-basic.md'
import searchTipsAdvanced from '~/assets/md/search-guide/search-tips-advanced.md'
import opacFeatures from '~/assets/md/search-guide/opac-features.md'
import findArticles from '~/assets/md/search-guide/find-articles.md'
import articlesInternational from '~/assets/md/search-guide/articles-international.md'
import articlesPsychology from '~/assets/md/search-guide/articles-psychology.md'
import articlesCultural from '~/assets/md/search-guide/articles-cultural.md'
import findNews from '~/assets/md/search-guide/find-news.md'
import collectWebInfo from '~/assets/md/search-guide/collect-web-info.md'
import webInternational from '~/assets/md/search-guide/web-international.md'
import webPsychology from '~/assets/md/search-guide/web-psychology.md'
import webCultural from '~/assets/md/search-guide/web-cultural.md'
import useNonLibraryMaterials from '~/assets/md/search-guide/use-non-library-materials.md'
import searchOtherLibraries from '~/assets/md/search-guide/search-other-libraries.md'
import ill from '~/assets/md/search-guide/ill.md'
import visitLibrary from '~/assets/md/search-guide/visit-library.md'
import askLibrarian from '~/assets/md/search-guide/ask-librarian.md'
import supportMenu from '~/assets/md/search-guide/support-menu.md'

export const contentsMap = {
  'materials-and-copyright': materialsAndCopyright,
  'find-library-materials': findLibraryMaterials,
  'browse-shelves': browseShelves,
  'browse-international': browseInternational,
  'browse-psychology': browsePsychology,
  'browse-cultural': browseCultural,
  'opac-search': opacSearch,
  'search-tips-basic': searchTipsBasic,
  'search-tips-advanced': searchTipsAdvanced,
  'opac-features': opacFeatures,
  'find-articles': findArticles,
  'articles-international': articlesInternational,
  'articles-psychology': articlesPsychology,
  'articles-cultural': articlesCultural,
  'find-news': findNews,
  'collect-web-info': collectWebInfo,
  'web-international': webInternational,
  'web-psychology': webPsychology,
  'web-cultural': webCultural,
  'use-non-library-materials': useNonLibraryMaterials,
  'search-other-libraries': searchOtherLibraries,
  'ill': ill,
  'visit-library': visitLibrary,
  'ask-librarian': askLibrarian,
  'support-menu': supportMenu,
} as const

type Contents = keyof typeof contentsMap

type SearchGuideItem = {
  /** ユニークID */
  id: string
  /** タイトル */
  title: string
  /** タイトルの補足説明 */
  note?: string
  /** 対応するMDファイル */
  contents?: Contents
  /** 子要素 */
  children?: SearchGuideItem[]
}

export const items: SearchGuideItem[] = [
  {
    id: 'materials-and-copyright',
    title: '資料・情報の使い方と著作権について',
    contents: 'materials-and-copyright',
  },
  {
    id: 'find-library-materials',
    title: '図書館にある資料を探す',
    contents: 'find-library-materials',
    children: [
      {
        id: 'books-and-magazines',
        title: '図書・雑誌を探す',
        children: [
          {
            id: 'browse-shelves',
            title: '直接本棚から探す',
            note: 'ブラウジング',
            contents: 'browse-shelves',
            children: [{
              id: 'browse-international',
              title: '国際社会学科向け',
              contents: 'browse-international',
            },
            {
              id: 'browse-psychology',
              title: '心理コミュニケーション学科向け',
              contents: 'browse-psychology',
            },
            {
              id: 'browse-cultural',
              title: '文化表現学科向け',
              contents: 'browse-cultural',
            }],
          },
          {
            id: 'opac-search',
            title: 'OPACで検索する',
            contents: 'opac-search',
            children: [
              {
                id: 'search-tips-basic',
                title: '検索のコツ',
                note: '初級編',
                contents: 'search-tips-basic',
              },
              {
                id: 'search-tips-advanced',
                title: '検索のコツ',
                note: '上級編',
                contents: 'search-tips-advanced',
              },
            ],
          },
          {
            id: 'opac-features',
            title: 'OPACの便利な機能',
            note: 'MyLibrary',
            contents: 'opac-features',
          },
        ],
      },

      {
        id: 'find-articles',
        title: '雑誌記事・論文を探す',
        note: '検索ツールを使う',
        contents: 'find-articles',
        children: [
          {
            id: 'articles-international',
            title: '国際社会学科向け',
            contents: 'articles-international',
          },
          {
            id: 'articles-psychology',
            title: '心理コミュニケーション学科向け',
            contents: 'articles-psychology',
          },
          {
            id: 'articles-cultural',
            title: '文化表現学科向け',
            contents: 'articles-cultural',
          },
        ],
      },
      {
        id: 'find-news',
        title: '新聞記事を探す',
        contents: 'find-news',
      },
      {
        id: 'collect-web-info',
        title: 'Webから情報を集める',
        note: '学会・団体サイトリンク集',
        contents: 'collect-web-info',
        children: [
          {
            id: 'web-international',
            title: '国際社会学科向け',
            contents: 'web-international',
          },
          {
            id: 'web-psychology',
            title: '心理コミュニケーション学科向け',
            contents: 'web-psychology',
          },
          {
            id: 'web-cultural',
            title: '文化表現学科向け',
            contents: 'web-cultural',
          },
        ],
      },
    ],
  },
  {
    id: 'use-non-library-materials',
    title: 'フェリス図書館にない資料の利用方法',
    contents: 'use-non-library-materials',
    children: [
      {
        id: 'search-other-libraries',
        title: 'フェリス所蔵以外の図書・雑誌を探す',
        note: '全国版OPAC',
        contents: 'search-other-libraries',
      },
      {
        id: 'ill',
        title: '文献の取寄せ',
        note: 'ILL＝Inter Library Loan',
        contents: 'ill',
      },
      {
        id: 'visit-library',
        title: '訪問利用',
        contents: 'visit-library',
      },
    ],
  },
  {
    id: 'ask-librarian',
    title: '図書館の使い方、資料の探し方を質問する',
    contents: 'ask-librarian',
  },
  {
    id: 'support-menu',
    title: '図書館の課外学習支援メニュー',
    contents: 'support-menu',
  },
]
