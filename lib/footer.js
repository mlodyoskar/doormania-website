import { request } from "./datocms"

const FOOTER_QUERY = `query {
   allDoors {
    id
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