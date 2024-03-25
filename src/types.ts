import type IssueScheme from './json/issues.json'
import type ResultScheme from './json/results.json'

// #region Issue
export type IssueRaw = typeof IssueScheme[0]

export type IssueOptionTag = keyof IssueRaw['options']

export type IssueOption = IssueRaw['options']

export interface IssueItem extends IssueRaw {
  input: IssueOptionTag | null
  isCorrect: () => boolean
}
// #endregion

// #region Result
export type Result = typeof ResultScheme

export type ResultType = keyof typeof ResultScheme

export type ResultItem = typeof ResultScheme['Level 1']
// #endregion
