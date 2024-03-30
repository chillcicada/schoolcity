// #region Style
export function randomSize(min = 1, max = 10): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// #endregion

// #region Local Storage
export function putLS(key: string, value: any): any {
  localStorage.setItem(key, JSON.stringify(value))
  return value
}

export function getLS(key: string): string {
  return JSON.parse(localStorage.getItem(key) || '')
}

export function removeLS(key: string): void {
  localStorage.removeItem(key)
}

export function initLS(key: string, value: any): any {
  if (getLS(key) === null) {
    putLS(key, value)
    return value
  }
  return getLS(key)
}
// #endregion
