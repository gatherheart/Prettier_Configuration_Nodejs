import { findBizItemById } from '../../controller/bizItem/bizItem.controller'
import { IContext } from '../../interface/graphql.interface'

const resolvers = {
  Query: {
    getBizItemInfo: async (_: unknown, { bizItemId }: { bizItemId: string }) => {
      const bizItem = await findBizItemById({ bizItemId })
      console.log(bizItem)
      return {
        bizItem: bizItem,
        error: false,
      }
    },
  },

  Mutation: {
    sample1: (_: unknown, { channel, text }, { pubsub }: IContext) => {
      const message = { channel, text }
      pubsub.publish(channel, { sample1: message })
      return message
    },
  },
}

export default resolvers
