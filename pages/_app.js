import '@/styles/globals.scss'
import Layout from '@/components/Layout/Layout'
import { request } from '../lib/datocms'

const FOOTER_QUERY = `query {
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
    query: FOOTER_QUERY,
  })

  return {
    props: { data },
  }
}

function MyApp({ Component, pageProps, data }) {
  console.log(data)
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
