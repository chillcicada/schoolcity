import { shuffle } from 'lodash'
import { Issues } from '@/scripts/issues'

describe('issues', () => {
  it('expect issues preview', () => {
    expect(Issues).toMatchSnapshot()
  })

  it('expect issues in random order', () => {
    expect(shuffle(Issues)).toMatchSnapshot()
  })
})
