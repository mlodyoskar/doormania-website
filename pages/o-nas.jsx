import { NextSeo } from 'next-seo'
import About from './../components/About/About'
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

export default function AboutPage() {
  const title = 'Doormania.pl | O nas'
  const description = 'Skontaktuj się z nami!'
  const url = 'https://doormania.pl/o-nas'

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
      <About />
    </>
  )
}
