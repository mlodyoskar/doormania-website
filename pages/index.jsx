import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Home from './../components/Home/Home'

export default function HomePage() {
  const title = 'Doormania.pl'
  const description = 'Kupienie idealnych drzwi nigdy nie było tak proste'
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
      <Home />
    </>
  )
}
