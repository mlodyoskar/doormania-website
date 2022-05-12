import Link from 'next/link'
import Image from 'next/image'
import { StyledLink } from '../StyledLink/StyledLink'
import styles from './Contact.module.scss'
import cn from 'classnames'
import pp from './../../public/static/images/produkt_polski.png'

const Contact = ({ contactPageData }) => {
  const { firstParagraph, secondParagraph, firstImage, secondImage } =
    contactPageData[0]
  return (
    <section className={styles.container}>
      <h1 className={styles.pageHeader}>O nas</h1>
      <div className={styles.content}>
        <div className={styles.column}>
          <p className={styles.text}>{firstParagraph}</p>
          {/* <Image height={200} width={300} src={firstImage.url} /> */}
        </div>
        <div className={styles.column}>
          <p className={styles.text}>{secondParagraph}</p>
          {/* <Image layout="fill" src={secondImage.url} /> */}
        </div>
      </div>
    </section>
  )
}

export default Contact
