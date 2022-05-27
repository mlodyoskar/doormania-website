import Link from 'next/link'
import Image from 'next/image'
import { StyledLink } from '../StyledLink/StyledLink'
import styles from './Home.module.scss'
import cn from 'classnames'
import pp from './../../public/static/images/produkt_polski.png'

const Home = ({ data: { allHomepages } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.header}>
          <span>Kupienie</span>{' '}
          <span className={styles.underline}>idealnych</span> drzwi nigdy nie
          było prostsze!
        </h1>
        <StyledLink path="/oferta/wszystkie">Sprawdź ofertę</StyledLink>
      </div>
      <section>
        <div className={styles.offer}>
          {allHomepages.map(({ id, title, image, category }) => (
            <div key={id} className={styles.offerCard}>
              <p className={styles.offerCardHeading}>{title}</p>
              <div className={styles.offerCardImage}>
                <Image src={image.url} layout="fill" />
              </div>

              <StyledLink variant="secondary" path={`/oferta/${category.slug}`}>
                Sprawdź
              </StyledLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
