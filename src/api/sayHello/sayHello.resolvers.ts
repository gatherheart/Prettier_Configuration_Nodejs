/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { QuerySayHelloArgs, SayHelloResponse, Message } from '../../types'

const resolvers = {
  Query: {
    sayHello: (_, args: QuerySayHelloArgs): SayHelloResponse => {
      return {
        error: false,
        text: `Hello ${args.name}`,
      }
    },
  },
  Subscription: {
    sayHello: {
      subscribe: (_, args, { pubsub }): Message => {
        const { id: channel } = args
        let count = 0
      },
    },
  },
}

export default resolvers
