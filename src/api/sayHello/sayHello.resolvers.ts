import {
  QuerySayHelloArgs,
  SayHelloResponse,
  MutationSendHelloArgs,
  SubscriptionMessageArgs,
  Message,
} from '../../types'

const resolvers = {
  Query: {
    sayHello: (_, args: QuerySayHelloArgs): SayHelloResponse => {
      return {
        error: false,
        text: `Hello ${args.name}`,
      }
    },
  },

  Mutation: {
    sendHello: (_, { channel, text }: MutationSendHelloArgs, { pubsub }): Message => {
      console.log(channel)
      const message = { channel, text }
      pubsub.publish(channel, { message })
      return message
    },
  },

  Subscription: {
    message: {
      subscribe: (_, { channel }: SubscriptionMessageArgs, { pubsub }): Message => {
        console.log(channel)
        return pubsub.asyncIterator(channel)
      },
    },
  },
}

export default resolvers
