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
    category {
      id
    }
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

const ALLDOORS_QUERY = `query {
   allDoors {
    id
    image {
      url
    }
    category {
        id
        name
        slug
    }
    name
  }
}
`

const getDoorsByCategory = async (slug) => {
  const { allDoors } = await request({
    query: ALLDOORS_QUERY,
  })
  if (slug === "wszystkie") {
    return allDoors
  }
  else {
    return allDoors.filter(({ category }) => category.slug === slug)
  }
}


const getAllDoors = async () => {
  const data = await request({
    query: ALLDOORS_QUERY,
  })

  return data
}

export { getDoorsPaths, getAllDoors, getDoorsByCategory, getDoorById }