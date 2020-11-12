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
    sample1: (_, { channel, text }: MutationSample1Args, { pubsub }): SampleMessage => {
      const message = { channel, text }
      pubsub.publish(channel, { sample1: message })
      return message
    },
  },

  Subscription: {
    sample1: {
      subscribe: (_, { channel }: SubscriptionSample1Args, { pubsub }): SampleMessage => {
        return pubsub.asyncIterator(channel)
      },
    },
  },
}

export default resolvers
