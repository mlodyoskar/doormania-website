import { request } from "./datocms"

const HOMEPAGE_QUERY = `query {
  allHomepages {
    id
		title
    image {
      url
    }
    category {
      slug
    }
  }
}
`

const getHomepageData = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY,
  })

  return data
}

export { getHomepageData }