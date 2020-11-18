import * as mongoose from 'mongoose'
import { ISlotMap } from '../../interface/slotMapId/slotMap.interface'

export interface ISlotMapD extends ISlotMap, mongoose.Document {}

const SlotMapSchema: mongoose.Schema = new mongoose.Schema({
  slotMapId: { type: String, required: true, unique: true },
  slotIds: { type: [String], required: true },
})

export default mongoose.model<ISlotMapD>('SlotMap', SlotMapSchema)
