import * as mongodb from 'mongodb'
import Slot, { ISlotD } from '@db/slot/slot.model'
import { ISlot, SlotStatus } from '@interface/slot/slot.interface'
import slotMapModel from '@db/slotMap/slotMap.model'
import slotModel from '@db/slot/slot.model'
import { ISlotMap } from '@interface/slotMapId/slotMap.interface'

interface getSlotsArgs {
  bizItemId: string
  slotMapId: string
}

interface getSlotArgs {
  bizItemId: string
  slotMapId: string
  number: string
}

interface updateSlotOneArgs {
  bizItemId: string
  slotMapId: string
  number: string
  status: SlotStatus
}

interface updateSlotManyArgs {
  bizItemId: string
  slotMapId: string
  numbers: string[]
  status: SlotStatus
}

async function createManySlots(
  slotInfos: Array<ISlot>,
  { session }: { session: mongodb.ClientSession },
): Promise<Array<ISlotD>> {
  return Slot.create(slotInfos, { session })
}

async function getSlot({ bizItemId, slotMapId, number }: getSlotArgs) {
  try {
    return await slotModel.findOne({ bizItemId, slotMapId, number })
  } catch (err) {
    throw new Error(err)
  }
}

async function getSlots({ bizItemId, slotMapId }: getSlotsArgs): Promise<ISlot[]> {
  try {
    const field = { bizItemId, slotMapId }
    const slotMap: ISlotMap = await slotMapModel.findOne(field).populate('slots')
    return slotMap.slots as ISlot[]
  } catch (err) {
    throw new Error(err)
  }
}

async function updateSlotOne({ bizItemId, slotMapId, number, status }: updateSlotOneArgs) {
  try {
    const foundSlot = await slotModel.findOne({ bizItemId, slotMapId, number })
    switch (status) {
      case SlotStatus.OCCUPIED:
        if (foundSlot.status !== SlotStatus.FREE) throw new Error('[Error]: It is an already occupied or booked seat')
        break
      // to-do: check user session ID to check who has made this occupation
      case SlotStatus.SOLD:
        if (foundSlot.status !== SlotStatus.OCCUPIED) throw new Error('[Error]: It should be occupied by your session')
        break
      default:
        break
    }
    await foundSlot.updateOne({ status })
    const slots = await getSlots({ bizItemId, slotMapId })
    return slots
  } catch (err) {
    throw new Error(err)
  }
}

async function updateSlotsMany({ bizItemId, slotMapId, numbers, status }: updateSlotManyArgs) {
  try {
    const foundSlots = await slotModel.find({ bizItemId, slotMapId, number: { $in: numbers } })
    const foundStatuses: SlotStatus[] = foundSlots.map((slot) => slot.status)
    switch (status) {
      case SlotStatus.OCCUPIED:
        if (!foundStatuses.includes(SlotStatus.FREE)) throw new Error('It is an already occupied or booked seat')
        break
      // to-do: check user session ID to check who has made this occupation
      case SlotStatus.SOLD:
        if (!foundStatuses.includes(SlotStatus.OCCUPIED)) throw new Error('It should be occupied by your session')
        break
      default:
        break
    }
    await slotModel.updateMany({ bizItemId, slotMapId, number: { $in: numbers } }, { $set: { status } })
    const slots = await getSlots({ bizItemId, slotMapId })
    return slots
  } catch (err) {
    throw new Error(err)
  }
}

export { createManySlots, getSlots, getSlot, updateSlotOne, updateSlotsMany }
