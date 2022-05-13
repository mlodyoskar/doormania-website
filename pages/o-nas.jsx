import { NextSeo } from 'next-seo'
import About from './../components/About/About'
import { request } from '../lib/datocms'

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

export async function getStaticProps() {
  const data = await request({
    query: ABOUTPAGE_QUERY,
  })

  return {
    props: { data },
  }
}

export default function AboutPage({ data }) {
  const title = 'Doormania.pl | O nas'
  const description = 'Skontaktuj się z nami!'
  const url = 'https://doormania.pl/o-nas'

  const aboutPageData = data.aboutpage
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
      <About aboutPageData={aboutPageData} />
    </>
  )
}
