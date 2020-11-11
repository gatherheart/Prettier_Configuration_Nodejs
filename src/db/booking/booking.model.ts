import * as mongoose from 'mongoose'

const bookingSchema: mongoose.Schema = new mongoose.Schema({
  remains: { type: Number, required: true },
  bookName: { type: String, required: true },
})

export default mongoose.model('log', bookingSchema)
