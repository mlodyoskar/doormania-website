import { request } from "./datocms"

const IDS_QUERY = `query {
   allDoors {
    id
  }
}
`

const getDoorsPaths = async () => {
  const data = await request({
    query: IDS_QUERY,
  })
  return data.allDoors.map((door) => ({ params: { id: door.id } }))
}

const getDoorById = async (id) => {
  const DOORBYID_QUERY = `query {
   allDoors(filter: {id: {eq: "${id}"}}) {
    id
    image {
      url
    }
    category
    name
    description
    version {
      name
      thickness
      rw
      ud
    }
  }
}
`
  const data = await request({
    query: DOORBYID_QUERY,
  })

  return data
}

export { getDoorsPaths, getDoorById }