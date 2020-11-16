import { createSlot, findSlotById } from '../../controller/slot/slot.controller'
import { ISlot } from '../../db/slot/slot.model'
import { MutationSample2Args, QuerySample2Args, Sample2Response } from '../../types'

const resolvers = {
  Query: {
    sample2: async (_: unknown, { slotId }: QuerySample2Args): Promise<Sample2Response> => {
      const foundSlot: ISlot = await findSlotById({ slotId })
      if (foundSlot) return { error: false, slot: foundSlot }
      else return { error: true, errorMessage: 'Not Found User' }
    },
  },
  Mutation: {
    sample2: async (_: unknown, { slotId, position, typeName }: MutationSample2Args): Promise<Sample2Response> => {
      try {
        const createdSlot: ISlot = await createSlot({ slotId, position, typeName })
        void createdSlot.save()
        return { error: false, slot: createdSlot }
      } catch (err) {
        return { error: true, errorMessage: 'Already Existing uid or userName' }
      }
    },
  },
}

export default resolvers
