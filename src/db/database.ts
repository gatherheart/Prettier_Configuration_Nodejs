import * as Mongoose from 'mongoose'
//import { UserModel } from './users/users.model'

let database: Mongoose.Connection
export const connect = (): void => {
  const uri = process.env.MONGO_URI
  if (database) {
    return
  }
  void Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  database = Mongoose.connection
  database.once('open', () => {
    console.log('Connected to database')
  })
  database.on('error', () => {
    console.log('Error connecting to database')
  })
}
export const disconnect = (): void => {
  if (!database) {
    return
  }
  void Mongoose.disconnect()
}
