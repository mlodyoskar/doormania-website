import { NextSeo } from 'next-seo'
import Offer from '@/components/Offer/Offer'
import { request } from '../../lib/datocms'
import Layout from '@/components/Layout/Layout'
import { getAllDoors, getDoorsByCategory } from '@/lib/doors'
import { getFooterData } from '@/lib/footer'
import { getCategoriesPaths } from '@/lib/category'

export async function getStaticProps({ params: { slug } }) {
  const offerData = await getDoorsByCategory(slug)
  const footerData = await getFooterData()

  return {
    props: { offerData, footerData },
  }
}

export async function getStaticPaths() {
  const paths = await getCategoriesPaths()
  return {
    paths: paths,
    fallback: false,
  }
}

export default function OfferPage({ offerData, footerData }) {
  const title = 'Doormania.pl | Oferta'
  const description = 'Kupienie idealnych drzwi nigdy nie było tak proste'
  const url = 'https://doormania.pl/oferta'

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
        <Offer allDoors={offerData} />
      </Layout>
    </>
  )
}
