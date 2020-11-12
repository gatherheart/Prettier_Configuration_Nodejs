import { IContext } from '../../interface/graphql.interface'
import {
  QuerySample1Args,
  MutationSample1Args,
  SubscriptionSample1Args,
  SampleResponse,
  SampleMessage,
} from '../../types'

const resolvers = {
  Query: {
    sample1: (_, args: QuerySample1Args): SampleResponse => {
      return {
        text: `Hello ${args.name}`,
        error: false,
      }
    },
  },

  Mutation: {
    sample1: (_, { channel, text }: MutationSample1Args, { pubsub }: IContext): SampleMessage => {
      const message = { channel, text }
      pubsub.publish(channel, { sample1: message })
      return message
    },
  },

  Subscription: {
    sample1: {
      subscribe: (_, { channel }: SubscriptionSample1Args, { pubsub }: IContext): AsyncIterator<SampleMessage> => {
        return pubsub.asyncIterator(channel)
      },
    },
  },
}

export default resolvers
