import * as mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
  email: string
  userName: string
}

const UserSchema: mongoose.Schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
})

export default mongoose.model<IUser>('User', UserSchema)
