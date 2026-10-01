import type { JournalItem } from '~/types/journal'

export const journals: JournalItem[] = [
  {
    id: 'journalweb',
    title: 'JournalWeb',
    body: `紀伊國屋書店取扱いの各種Webサービスや、出版社が提供する電子ジャーナルサイトへアクセスできるポータルサイトです。
本学で契約している電子ジャーナル（洋雑誌）を閲覧可能です。

＜利用方法＞
1. 「OJ Linker」内のタイトルから「ALL」を選択すると、契約している電子ジャーナルの一覧が表示されます。
2. 閲覧したい雑誌の「OJへリンク」ボタンをクリックします。
3. 閲覧したい巻号を検索します。
4. 「FullText」「PDF」などの表示をクリックすると、論文を閲覧できます。

※学内のネットワーク環境からアクセスしてください。`,
    links: [
      {
        name: 'アクセス',
        path: 'https://jweb.kinokuniya.co.jp/user/controls.php?view=userojlinker',
        type: 'external',
      },
    ],
  },
]
