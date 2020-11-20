import { Types } from 'mongoose'
import BizItem from '../../db/bizItem/bizItem.model'

describe('READ BizItems', () => {
  test('This is a sample', () => {
    expect(true).toBe(true)
  })
  test('Data Exsistence Check', () => {
    const targetData = [
      {
        _id: Types.ObjectId(),
        businessId: '421150',
        bizItemId: '3612160',
        slotMapId: ['185530997', '185531007'],
      },
      {
        _id: Types.ObjectId(),
        businessId: '424170',
        bizItemId: '3626905',
        slotMapId: ['192575960', '192575961'],
      },
    ]
    const spy = jest.spyOn(BizItem, 'find').mockReturnValueOnce(targetData as any)
    void BizItem.find({})
    const spyFetchedBizItems = spy.mock.results[0].value
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spyFetchedBizItems).toHaveLength(2)
    expect(spyFetchedBizItems).toEqual(targetData)

    spy.mockReset()
  })
})
