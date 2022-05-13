import Link from 'next/link'
import Image from 'next/image'
import { StyledLink } from '../StyledLink/StyledLink'
import styles from './About.module.scss'
import cn from 'classnames'
import pp from './../../public/static/images/produkt_polski.png'

const About = ({ aboutPageData }) => {
  const { firstParagraph, secondParagraph, firstImage, secondImage } =
    aboutPageData
  return (
    <section className={styles.container}>
      <h1 className={styles.pageHeader}>O nas</h1>
      <div className={styles.content}>
        <div className={styles.column}>
          <p className={styles.text}>{firstParagraph}</p>
          <div className={styles.imageContainer}>
            <Image layout="fill" src={firstImage.url} />
          </div>
        </div>
        <div className={styles.column}>
          <p className={styles.text}>{secondParagraph}</p>
          <div className={styles.imageContainer}>
            <Image layout="fill" src={secondImage.url} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
