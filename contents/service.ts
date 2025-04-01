import type { AlertType } from '@/types/alert'

type Alert = {
  type: AlertType
  text: string
}

export const service = [
  {
    title: '貸出',
    content:
        'カウンターに借りたい資料と学生証またはライブラリーカードをお持ちください。緑園本館の2階には、自動貸出機が設置されていて、自分で貸出手続きをすることができます。',
  },
  {
    title: '返却',
    content:
        '開館中はカウンターに、閉館中はブックポストに返却してください。返却期限日を過ぎると、経過した日数分(最大2週間)貸出が停止されますのでご注意ください。緑園本館・山手分室どちらでも返却できます。',
  },
  {
    title: '延長',
    content:
        '次の予約が入っていない場合は貸出期間を延長できます。資料をカウンターまでお持ちください。学部生・大学院生・教職員はMyLibraryでも延長できます。',
  },
  {
    title: '予約',
    content:
        '資料が貸出中の場合は、予約をすることができます。カウンターで予約申し込みしてください。資料が返却されたらフェリスメールでお知らせします。取り置き期間は1週間（教員は3週間）です。',
  },
  {
    title: '取り寄せ',
    content:
        '緑園本館と山手分室の資料を相互に取り寄せることができます。申込用紙（MyLibraryにログインして取得できます）に記入の上、カウンターまでお持ちください。資料が到着したらフェリスメールでお知らせします。取り置き期間は1週間です。',
  },
  {
    title: 'リクエスト',
    content:
        'ご希望の資料を当図書館で購入します(学部生・大学院生・教職員対象)。申込用紙（MyLibraryにログインして取得できます）に記入の上、カウンターまでお持ちください。購入希望の資料は優先的に処理しますが、通常2週間から資料によっては2ヶ月程度かかります。お急ぎの場合は、レファレンス・サービスで学外の資料をご利用ください。図書によっては購入できない場合がありますので、ご了承ください。',
  },
]

export const serviceEng = [
  {
    title: 'Borrowing',
    content:
        'Bring the items you wish to borrow and your student ID or library card to the circulation desk. You can also use the automatic book-circulation machine on the second floor of the Ryokuen Library to borrow items.',
  },
  {
    title: 'Returns',
    content:
        'During library hours, bring the items you wish to return to the circulation desk. After hours, return items through the book drop. Overdue items will result in a suspension of borrowing rights for a period equal to the overdue period, up to a two week maximum. Items may be returned to either the Ryokuen or Yamate Libraries.',
  },
  {
    title: 'Renewals',
    content:
        'Items may be renewed so long as another user has not reserved them. Undergraduate students, graduate students, faculty and staff can also renew items through MyLibrary.',
  },
  {
    title: 'Reserving',
    content:
        'If an item you need has been checked out, you may reserve it. When the item you requested is returned, we will send you an email.',
  },
  {
    title: 'Transfer Service between Ferris Libraries',
    content:
        'You can arrange to have items in the Ryokuen Library transferred to the Yamate Library for pick up, and vice versa. When the item you requested arrives, we will send you an email. Transferred items will be kept for pick-up for one week.',
  },
  {
    title: 'Acquisition Requests',
    content:
        'Requests for the library to acquire items may be made at the circulation desk by undergraduate students, graduate students, faculty and staff. It usually takes between two weeks and two months for requests to be processed.',
  },
]

export const numHeaders = ['対象', '図書／雑誌', '学科推奨図書', '楽譜', 'CD/レコード']
export const numQuantity = [
  [
    '学部生／大学院生／科目等履修生／ディプロマ生',
    '各30冊',
    '30冊',
    '8冊',
    '各8点',
  ],
  ['卒業生／中高生', '各30冊', '不可', '8冊', '各8点'],
  ['職員／定年退職教職員', '各30冊', '不可', '8冊', '各8点'],
  ['教員／名誉教授', '各60冊', '不可', '30冊', '各30点'],
]

export const periodHeaders = ['対象', '図書', '学科推奨図書', '雑誌／楽譜', 'CD/レコード']
export const periodItems = [
  ['1～3年生／科目等履修生／ディプロマ生', '2週間', '2週間', '1週間', '翌々日'],
  ['4年生', '30日', '2週間', '1週間', '翌々日'],
  ['大学院生', '30日', '2週間', '1週間', '1週間'],
  ['職員／定年退職教職員', '30日', '不可', '1週間', '1週間'],
  ['卒業生／中高生', '2週間', '不可', '1週間', '翌々日'],
  [
    '専任教員／名誉教授',
    '当年度2月末まで',
    '不可',
    '当年度2月末まで',
    '当年度2月末まで',
  ],
  [
    '非常勤教員',
    '当年度1月末まで',
    '不可',
    '当年度1月末まで',
    '当年度1月末まで',
  ],
]

export const periodHeadersEng = [
  'User Status',
  'Books',
  'Journals',
  'Course Reserve Books',
  'Musical Scores',
  'CDs & Records',
]
export const periodItemsEng = [
  [
    'Undergraduate students (1st, 2nd and 3rd year)',
    '30 items / 2 weeks',
    '30 items / 1 week',
    '5 items / 1 week',
    '8 items / 1 week',
    '8 items each / 2 days',
  ],
  [
    'Undergraduate students (4th year)',
    '30 items / 30 days',
    '30 items / 1 week',
    '5 items / 1 week',
    '8 items / 1 week',
    '8 items each / 2 days',
  ],
  [
    'Graduate students',
    '30 items / 30 days',
    '30 items / 1 week',
    '5 items / 1 week',
    '8 items / 1 week',
    '8 items each / 1 week',
  ],
  [
    'Faculty',
    '60 items / Until the end of Febrary',
    '30 items / Until the end of Febrary',
    '0 items',
    '30 items / Until the end of Febrary',
    '30 items each / Until the end of Febrary',
  ],
  [
    'Staff',
    '30 items / 30 days',
    '30 items / 1 week',
    '0 items',
    '8 items / 1 week',
    '8 items each / 1 week',
  ],
]

export const notes: Alert[] = [
  {
    type: 'warning',
    text: '貸出手続きを忘れると出口のアラームが鳴ります。',
  },
  {
    type: 'warning',
    text: '資料を破損・紛失したときは速やかにお知らせください。',
  },
  {
    type: 'warning',
    text: '借りたい資料が図書館にない場合や探せない場合はカウンターにご相談ください。他の図書館の蔵書検索や、探し方のコツなどを案内します。',
  },
  {
    type: 'warning',
    text: '資料の又貸しや学生証・ライブラリーカードの貸借は、資料の紛失・返却の遅延等の原因になるため一切禁止です。',
  },
]

export const notesEng: Alert[] = [
  {
    type: 'warning',
    text: 'If you try to take materials out of the library without having checked them out, they will be detected by a sensor and an alarm will sound.',
  },
  {
    type: 'warning',
    text: 'In the event that you lose or damage library materials, please contact the library promptly.',
  },
  {
    type: 'warning',
    text: 'Lending other people library materials that you have borrowed is prohibited, as is allowing other people to use your student ID or library card.',
  },
  {
    type: 'success',
    text: 'If the library does not have an item you need or if you cannot find an item that you are looking for, please contact the reference counter. The reference staff will be happy to help you.',
  },
  {
    type: 'success',
    text: 'Reference books, recent journals, microfilm and microfiche materials, videotapes, LDs, DVDs, CD-ROMs and DVDs are only available for use in the library.',
  },
  {
    type: 'success',
    text: 'Extended borrowing privileges are granted to undergraduate and graduate students over the spring, summer and winter vacation periods.',
  },
  {
    type: 'success',
    text: 'Certain materials may be borrowed for same-day use. There is no limit on the number of these items that may be borrowed.',
  },
]
