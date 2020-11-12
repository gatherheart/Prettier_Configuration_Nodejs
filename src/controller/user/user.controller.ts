import User, { IUser } from '../../db/user/user.model'
import { CreateQuery } from 'mongoose'

async function createUser({ uid, email, userName }: CreateQuery<IUser>): Promise<IUser> {
  return User.create({
    uid,
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

async function findUserById({ uid }: CreateQuery<{ uid: string }>): Promise<IUser> {
  return User.findOne({
    uid,
  })
    .then((data: IUser) => data)
    .catch((error: Error) => {
      throw error
    })
}

export { createUser, findUserById }
