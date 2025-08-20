export type Section = {
  title: string
  content: string
}

export const parseMarkdownSections = (markdown: string): Section[] => {
  const sections: Section[] = []
  const lines = markdown.split('\n')
  let currentTitle = ''
  let currentContent: string[] = []

  lines.forEach((line) => {
    if (line.startsWith('## ')) {
      // 新しいセクションが始まる前に、前のセクションを保存
      if (currentTitle) {
        sections.push({
          title: currentTitle,
          content: currentContent.join('\n'),
        })
      }
      currentTitle = line.replace('## ', '').trim()
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
