import { CreateQuery } from 'mongoose'
import BizItem, { IBizItem } from '../../db/bizItem/bizItem.model'

function createBizItem({ businessId, bizItemId, slotMapId }: CreateQuery<IBizItem>): Promise<IBizItem> {
  return BizItem.create({
    businessId,
    bizItemId,
    slotMapId,
  })
    .then((data: IBizItem) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

function findUserById({ uid }: CreateQuery<{ uid: string }>): Promise<IBizItem> {
  return new Promise<IBizItem>((resolve, reject) => {
    BizItem.findOne({
      uid,
    })
      .then((found: IBizItem) => {
        resolve(found)
      })
      .catch((error: Error) => {
        reject(error)
      })
  })
}

export { createBizItem, findUserById }
