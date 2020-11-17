import { findBizItemById, getBizItems } from '../../controller/bizItem/bizItem.controller'
import { getBizItemInfo } from '../../util/api'

const resolvers = {
  Query: {
    getListOfBizItems: async (_: unknown) => {
      const bizItems = await getBizItems()
      return { error: false, bizItems: bizItems }
    },
    getBizItemInfo: async (_: unknown, { bizItemId }: { bizItemId: string }) => {
      const bizItem = await findBizItemById({ bizItemId })
      const bizItemInfo = await getBizItemInfo({ businessId: bizItem.businessId, bizItemId })
      return {
        bizItemInfo,
        error: false,
      }
    },
  },
}

export default resolvers
