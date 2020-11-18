import { ISlot, SlotState } from '../interface/slot/slot.interface'
import { getSlotInfo } from './api'
import { createManySlots } from '../controller/slot/slot.controller'
import slotMapModel from '../db/slotMap/slotMap.model'

// utils for Synchronization with booking-web server
export const syncSlots = async ({ businessId, bizItemId, slotMapId }) => {
  const slotInfo = await getSlotInfo({ businessId, bizItemId, slotMapId })
  const seats = []

  slotInfo.seatGroups.forEach((seatGroup) => {
    seatGroup.seats.forEach((seat) =>
      seats.push({
        state: SlotState.FREE,
        slotId: seat.number,
        view: seat.view,
        typeName: seatGroup.typeName,
      }),
    )
  })

  const createdSeats: ISlot[] = await createManySlots(seats)
  await slotMapModel.create({
    slotMapId: slotMapId as string,
    slotIds: createdSeats.map((c) => c.slotId),
  })

  return createdSeats
}
