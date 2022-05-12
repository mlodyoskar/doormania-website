import { NextSeo } from 'next-seo'
import Home from './../components/Home/Home'
import { request } from '../lib/datocms'

const HOMEPAGE_QUERY = `query {
  allHomepages {
    id
    title
    image {
      url
    }
  }
}
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  })

  return {
    props: { data },
  }
}

export default function HomePage({ data }) {
  const title = 'Doormania.pl'
  const description = 'Kupienie idealnych drzwi nigdy nie było tak proste!'
  const url = 'https://doormania.pl'

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Home data={data} />
    </>
  )
}
