import type { Level } from './types'

// #region Style
export function randomSize(min = 48, max = 72): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// #endregion

// #region Local Storage
export function putLS(key: string, value: any): any {
  localStorage.setItem(key, value)
  return value
}

export function getLS(key: string): string | null {
  return localStorage.getItem(key)
}

export function removeLS(key: string): void {
  localStorage.removeItem(key)
}

export function clearLS(): void {
  localStorage.clear()
}

export function initLS(key: string, value: any): any {
  if (getLS(key) === null) {
    putLS(key, value)
    return value
  }
  return getLS(key)
}
// #endregion

// #region Score
export function Score2Level(score: number): Level {
  if (score === 100)
    return 'Level 0'
  if (score >= 83)
    return 'Level 6'
  if (score >= 67)
    return 'Level 5'
  if (score >= 50)
    return 'Level 4'
  if (score >= 33)
    return 'Level 3'
  if (score > 17)
    return 'Level 2'
  return 'Level 1'
}
