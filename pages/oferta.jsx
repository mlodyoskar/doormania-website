import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Offer from './../components/Offer/Offer'

export default function OfferPage() {
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
      <Offer />
    </>
  )
}
