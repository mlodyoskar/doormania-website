import { request } from "./datocms"

const CONTACTPAGE_QUERY = `query {
  allContactpageitems {
    id
    title
    firstitem
    seconditem
    icon{
      url
    }
  }
}
`

const getContactData = async () => {
    const data = await request({
        query: CONTACTPAGE_QUERY,
    })

    return data
}

export { getContactData }