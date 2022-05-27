import { request } from "./datocms"

const SLUG_QUERY = `query {
  allDoorcategories {
    slug
  }
}
`

const getCategoriesPaths = async () => {
    const data = await request({
        query: SLUG_QUERY,
    })
    return data.allDoorcategories.map(({ slug }) => ({ params: { slug } }))
}

const getCategoryBySlug = async (slug) => {
    const DOORBYID_QUERY = `query {
  allDoorcategories(filter: {slug: {eq: "${slug}"}}) {
    id
    name
    slug
    catalog
  }
}

`
    const data = await request({
        query: DOORBYID_QUERY,
    })

    return data
}

export { getCategoriesPaths, getCategoryBySlug }