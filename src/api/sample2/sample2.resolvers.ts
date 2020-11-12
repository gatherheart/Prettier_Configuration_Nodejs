import { createUser } from '../../controller/user/user.controller'
import { IUser } from '../../db/user/user.model'
import { MutationSample2Args } from '../../types'

const resolvers = {
  Query: {
    sample2: (): string => 'Hey bye how are ya',
  },
  Mutation: {
    sample2: async (_, { userName, email }: MutationSample2Args): Promise<IUser> => {
      const createdUser: IUser = await createUser({ userName, email })
      void createdUser.save()
      return createdUser
    },
  },
}

export default resolvers
