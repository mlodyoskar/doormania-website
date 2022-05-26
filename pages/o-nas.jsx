import { NextSeo } from 'next-seo'
import About from './../components/About/About'
import Layout from '@/components/Layout/Layout'
import { getAboutData } from '@/lib/about'
import { getFooterData } from '@/lib/footer'

export async function getStaticProps() {
  const aboutData = await getAboutData()
  const footerData = await getFooterData()

  return {
    props: { footerData, aboutData },
  }
}

export default function AboutPage({ aboutData, footerData }) {
  const title = 'Doormania.pl | O nas'
  const description = 'Skontaktuj się z nami!'
  const url = 'https://doormania.pl/o-nas'
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
        <About aboutData={aboutData} />
      </Layout>
    </>
  )
}
