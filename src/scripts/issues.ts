import type { IssueItem, IssueOptionTag, IssueRaw } from '@/types'
import IssuesRaw from '@/json/issues.json'

export const Issues: IssueItem[] = IssuesRaw.map((issue: IssueRaw) => {
  const input = ref<IssueOptionTag | undefined>()
  const isCorrect = () => input.value === issue.answer
  return { ...issue, input, isCorrect }
})
