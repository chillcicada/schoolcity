import { shuffle } from 'lodash'
import Issues from '@/json/issues.json'

export const issues = shuffle(Issues)
