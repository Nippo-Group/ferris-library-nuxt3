import MarkdownIt from 'markdown-it'

export const convertedMarkdown = (text: string) => {
  const md = new MarkdownIt({ breaks: true })
  return md.render(text)
}
