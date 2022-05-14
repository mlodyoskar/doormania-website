import { NextSeo } from 'next-seo'
import Offer from '@/components/Offer/Offer'
import { request } from '../../lib/datocms'

const OFFERPAGE_QUERY = `query {
   allDoors {
    id
    image {
      url
    }
    category
    name
  }
}
`

export async function getStaticProps() {
  const data = await request({
    query: OFFERPAGE_QUERY,
  })

  return {
    props: { data },
  }
}

export default function OfferPage({ data: { allDoors } }) {
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
      <Offer allDoors={allDoors} />
    </>
  )
}
