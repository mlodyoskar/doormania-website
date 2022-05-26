import { NextSeo } from 'next-seo'
import Product from '@/components/Product/Product'
import { request } from '../../lib/datocms'
import { useRouter } from 'next/router'
import { getDoorsPaths, getDoorById } from '@/lib/doors'
import Layout from '@/components/Layout/Layout'

export async function getStaticProps({ params }) {
  const data = await getDoorById(params.id)

  return {
    props: { data },
  }
}
export async function getStaticPaths() {
  const paths = await getDoorsPaths()

  return {
    paths: paths,
    fallback: false,
  }
}

export default function ProductPage({ data: { allDoors } }) {
  const { id, name } = allDoors[0]

  const title = `Doormania.pl | Drzwi ${name}`
  const description = 'Kupienie idealnych drzwi nigdy nie było tak proste'
  const url = `https://doormania.pl/produkt/${id}`

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
      <Layout>
        <Product product={allDoors[0]} />
      </Layout>
    </>
  )
}
