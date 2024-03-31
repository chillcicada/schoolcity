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

export function getLS(key: string): any {
  return localStorage.getItem(key)
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
