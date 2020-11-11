import * as Mongoose from 'mongoose'
//import { UserModel } from './users/users.model'

let database: Mongoose.Connection
export const connect = (): void => {
  const uri = 'mongodb://127.0.0.1:27017/realtime_seat_booking'
  if (database) {
    return
  }
  void Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
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
