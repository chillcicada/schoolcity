import type ResultScheme from '@/json/results.json'

// #region Issue
export interface IssueBase {
  id: number
  content: string
  options: Record<string, string>
  answer: string | string[]
}

export type IssueType =
  | 'single'
  | 'multiple'
  | 'input'
// #endregion

// #region Level
export type Level = `Level ${number}` & keyof typeof ResultScheme

export interface LevelItem {
  title: string
  description: string
}

export type LevelScheme = Record<Level, LevelItem>
// #endregion
