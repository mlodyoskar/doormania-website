import { request } from "./datocms"

const FOOTER_QUERY = `query {
   footer {
        email
        emailSec
        phone
        phoneSec
        satSunWorkHours
        monFriWorkHours
        street
        zipcodeCity
  }
}
`

const getFooterData = async () => {
    const data = await request({
        query: FOOTER_QUERY,
    })

    return data
}

export { getFooterData }