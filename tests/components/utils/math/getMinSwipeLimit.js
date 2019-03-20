import * as Utils from '../../../../app/components/utils'

describe('math: getMinSwipeLimit, return min swipe position, number', () => {
  it('should return default data', () => {
    const data = Utils.getMinSwipeLimit()
    expect(data).toEqual(0)
  })

  it('should return expected data if no paddingLeft', () => {
    const data = Utils.getMinSwipeLimit(100)
    expect(data).toEqual(0)
  })

  it('should return expected data if paddingLeft', () => {
    const data = Utils.getMinSwipeLimit(100, { paddingLeft: 50 })
    expect(data).toEqual(150)
  })
})