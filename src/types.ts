import type IssueScheme from './json/issues.json'
import type ResultScheme from './json/results.json'

// #region Issue
export interface IssueBase {
  id: number
  content: string
  options: Record<string, string>
  answer: string | string[]
}

export type IssueRaw = typeof IssueScheme[0]

export type IssueType =
  | 'single'
  | 'multiple'
  | 'input'

export type IssueOptionTag = keyof IssueRaw['options']

export type IssueOption = IssueRaw['options']

export interface IssueItem extends IssueRaw {
  input: globalThis.Ref<IssueOptionTag | undefined>
  isCorrect: () => boolean
}
// #endregion

// #region Result
export type Result = typeof ResultScheme

export type ResultType = keyof typeof ResultScheme

export type ResultItem = typeof ResultScheme['Level 1']
// #endregion
