import { createUser, findUserById } from '../../controller/user/user.controller'
import { IUser } from '../../db/user/user.model'
import { MutationSample2Args } from '../../types'

const resolvers = {
  Query: {
    sample2: async (_, { uid }) => {
      const foundUser: IUser = await findUserById({ uid })
      if (foundUser) return { error: false, user: foundUser }
      else return { error: true, errorMessage: 'Not Found User' }
    },
  },
  Mutation: {
    sample2: async (_, { uid, userName, email }) => {
      try {
        const createdUser: IUser = await createUser({ uid, userName, email })
        void createdUser.save()
        return { error: false, user: createUser }
      } catch (err) {
        return { error: true, errorMessage: 'Already Existing User' }
      }
    },
  },
}

export default resolvers
