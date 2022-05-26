import { request } from "./datocms"

const OFFERPAGE_QUERY = `query {
   allDoors {
    id
    image {
      url
    }
    category
    name
  }
}
`


const getAllDoors = async () => {
    const data = await request({
        query: OFFERPAGE_QUERY,
    })

    return data
}

export { getAllDoors }