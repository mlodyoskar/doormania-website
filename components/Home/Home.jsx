import Link from 'next/link'
import Image from 'next/image'
import { StyledLink } from '../StyledLink/StyledLink'
import styles from './Home.module.scss'
import cn from 'classnames'
import pp from './../../public/static/images/produkt_polski.png'

export async function getStaticProps() {
  const res = await fetch('https://www.balldontlie.io/api/v1/players')
  const players = await res.json()
  console.log(players)

  return {
    props: { players }, // will be passed to the page component as props
  }
}

const Home = ({ players }) => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.header}>
          Kupienie <span className={styles.underline}>idealnych</span> drzwi
          nigdy nie było prostsze!
        </h1>
        <StyledLink path="/oferta">Sprawdź ofertę</StyledLink>
      </div>
      <section>
        <h2 className={cn(styles.offerHeading, styles.underline)}>
          Nasza oferta
        </h2>
        <div className={styles.offer}>
          <div className={styles.offerCard}>
            <p className={styles.offerCardHeading}>Drzwi wewnętrzne</p>
            <Image src={pp} className={styles.offerCardImage} />
            <StyledLink variant="secondary" path="/oferta">
              Sprawdź
            </StyledLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
