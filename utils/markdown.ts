export type Section = {
  title: string
  content: string
}

/**
 * Markdown形式のテキストを解析し、セクションごとに分割する関数
 * @param markdown マークダウンのテキスト
 * @param searchValue 分割の基準となる文字列（デフォルトは '##'）
 * @returns titleとcontentを持つセクションの配列
 */
export const parseMarkdownSections = (markdown: string, searchValue: string = '##'): Section[] => {
  const sections: Section[] = []
  const lines = markdown.split('\n')
  let currentTitle = ''
  let currentContent: string[] = []

  lines.forEach((line) => {
    if (line.startsWith(`${searchValue} `)) {
      // 新しいセクションが始まる前に、前のセクションを保存
      if (currentTitle) {
        sections.push({
          title: currentTitle,
          content: currentContent.join('\n'),
        })
      }
      currentTitle = line.replace(`${searchValue} `, '').trim()
      currentContent = []
    }
    else if (currentTitle) {
      // 次の見出しが来るまでの内容を蓄積
      currentContent.push(line)
    }
  })

  // 最後のセクションを追加
  if (currentTitle) {
    sections.push({
      title: currentTitle,
      content: currentContent.join('\n'),
    })
  }

  return sections
}
