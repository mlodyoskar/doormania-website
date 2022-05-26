import { NextSeo } from 'next-seo'
import Offer from '@/components/Offer/Offer'
import { request } from '../../lib/datocms'
import Layout from '@/components/Layout/Layout'
import { getAllDoors } from '@/lib/offer'
import { getFooterData } from '@/lib/footer'

export async function getStaticProps() {
  const offerData = await getAllDoors()
  const footerData = await getFooterData()

  return {
    props: { offerData, footerData },
  }
}

export default function OfferPage({ offerData: { allDoors }, footerData }) {
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
        <Offer allDoors={allDoors} />
      </Layout>
    </>
  )
}
