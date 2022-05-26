import { NextSeo } from 'next-seo'
import Home from './../components/Home/Home'
import { request } from '../lib/datocms'
import Layout from '@/components/Layout/Layout'
import { getHomepageData } from '@/lib/homepage'
import { getFooterData } from '@/lib/footer'

export async function getStaticProps() {
  const homepageData = await getHomepageData()
  const footerData = await getFooterData()

  return {
    props: { homepageData, footerData },
  }
}

export default function HomePage({ homepageData, footerData }) {
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
      <Layout data={footerData}>
        <Home data={homepageData} />
      </Layout>
    </>
  )
}
