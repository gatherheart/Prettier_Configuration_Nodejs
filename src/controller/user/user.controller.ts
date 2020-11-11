import User, { IUser } from '../../db/user/user.model'
import { CreateQuery } from 'mongoose'

async function createUser({ email, userName }: CreateQuery<IUser>): Promise<IUser> {
  return User.create({
    email,
    userName,
  })
    .then((data: IUser) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

export { createUser }
