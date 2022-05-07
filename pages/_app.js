import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'
import Navigation from '@/components/Navigation/Navigation'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
