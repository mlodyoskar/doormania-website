import { NextSeo } from 'next-seo'
import Contact from './../components/Contact/Contact'
import { request } from '../lib/datocms'

const CONTACTPAGE_QUERY = `query {
  allContactpages {
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
    query: CONTACTPAGE_QUERY,
  })

  return {
    props: { data },
  }
}

export default function ContactPage({ data: { allContactpages } }) {
  const title = 'Doormania.pl | Kontakt'
  const description = 'Skontaktuj się z nami!'
  const url = 'https://doormania.pl/kontakt'

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
      <Contact contactPageData={allContactpages} />
    </>
  )
}
