import { randomSize } from '@/utils'

describe('randomSize', () => {
  it('should return a number between 48 and 72', () => {
    const result = randomSize()
    expect(result).toBeGreaterThanOrEqual(48)
    expect(result).toBeLessThanOrEqual(72)
  })

  it('should return a number between 2 and 5', () => {
    const result = randomSize(2, 5)
    expect(result).toBeGreaterThanOrEqual(2)
    expect(result).toBeLessThanOrEqual(5)
  })
})
