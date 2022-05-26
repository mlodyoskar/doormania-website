import { request } from "./datocms"

const ABOUTPAGE_QUERY = `query {
  aboutpage {
    id
    firstParagraph
    secondParagraph
    firstImage {
      url
    }
    secondImage {
      url
    }
  }
}
`


const getAboutData = async () => {
    const data = await request({
        query: ABOUTPAGE_QUERY,
    })

    return data
}

export { getAboutData }