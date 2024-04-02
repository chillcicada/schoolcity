import type { Level } from './types'
import { Score2Level } from './utils'

export default createPinia()

export const useLevelScoreboardStore = defineStore('level-scoreboard', {
  state: (): {
    score: number
    inputs: Map<string, string>
    answers: Map<string, string>
    done: boolean
  } => ({
    score: 0,
    inputs: new Map(),
    answers: new Map(),
    done: false,
  }),

  actions: {
    getScore(): number {
      let correctCount = 0
      this.answers.forEach((value, key) => {
        correctCount = this.inputs.get(key) === value ? correctCount + 1 : correctCount
      })
      return this.score = Math.floor(correctCount / this.answers.size * 100)
    },
  },
})

export const useLevelResultStore = defineStore('level-result', {
  state: (): {
    level: Level
    score: number
  } => ({
    level: 'Level 0',
    score: 0,
  }),

  actions: {
    setLevel(score: number): void {
      this.level = Score2Level(score)
      this.score = score
    },
  },
})
