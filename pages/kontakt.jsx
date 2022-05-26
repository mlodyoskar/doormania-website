import { NextSeo } from 'next-seo'
import Contact from './../components/Contact/Contact'
import { request } from '../lib/datocms'
import Layout from '@/components/Layout/Layout'
import { getContactData } from '@/lib/contact'
import { getFooterData } from '@/lib/footer'

export async function getStaticProps() {
  const contactData = await getContactData()
  const footerData = await getFooterData(0)

  return {
    props: { footerData },
  }
}

export default function ContactPage({ footerData }) {
  const title = 'Doormania.pl | Kontakt'
  const description = 'Skontaktuj się z nami!'
  const url = 'https://doormania.pl/kontakt'

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
        <Contact contactPageData={footerData} />
      </Layout>
    </>
  )
}
