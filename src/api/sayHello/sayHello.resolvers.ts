import { QuerySayHelloArgs, SayHelloResponse } from '../../types'

const resolvers = {
  Query: {
    sayHello: (_, args: QuerySayHelloArgs): SayHelloResponse => {
      return {
        error: false,
        text: `Hello ${args.name}`,
      }
    },
  },
}

export default resolvers
