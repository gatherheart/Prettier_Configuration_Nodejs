import * as fetch from 'node-fetch'
const BASE_URL = 'https://api.booking.naver.com/v3.1'

interface GetBizItemInfo {
  businessId: string
  bizItemId: string
}

interface GetSlotInfoArgs extends GetBizItemInfo {
  slotMapId: string
}

export const getSlotInfo = async ({ businessId, bizItemId, slotMapId }: GetSlotInfoArgs) => {
  const slots = await getAnyData(
    BASE_URL + `/businesses/${businessId}/biz-items/${bizItemId}/slots/${slotMapId}/seats?status=WITH_AGENCY_OCCUPIED`,
  )
  return slots
}

export const getBizItemInfo = async ({ businessId, bizItemId }: GetBizItemInfo) => {
  const bizItemInfo = await getAnyData(BASE_URL + `/businesses/${businessId}/biz-items/${bizItemId}`)
  return bizItemInfo
}

// Implementation code where T is the returned data shape
function getAnyData(url: string) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}
