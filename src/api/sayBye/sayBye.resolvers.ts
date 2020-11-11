import { createUser } from '../../controller/user/user.controller'
import { IUser } from '../../db/user/user.model'

const resolvers = {
  Query: {
    sayBye: (): string => 'Hey bye how are ya',
  },
  Mutation: {
    createBye: async (_, { userName, email }): Promise<IUser> => {
      const createdUser: IUser = await createUser({ userName, email })
      void createdUser.save()
      return createdUser
    },
  },
}

export default resolvers
