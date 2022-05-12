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
        <StyledLink path="/oferta">Sprawdź ofertę</StyledLink>
      </div>
      <section>
        <h2 className={cn(styles.offerHeading, styles.underline)}>
          Nasza oferta
        </h2>
        <div className={styles.offer}>
          {allHomepages.map(({ id, title, image }) => (
            <div key={id} className={styles.offerCard}>
              <p className={styles.offerCardHeading}>{title}</p>
              {/* <Image
                src={image.url}
                className={styles.offerCardImage}
                layout="fill"
              /> */}
              <StyledLink variant="secondary" path="/oferta">
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
