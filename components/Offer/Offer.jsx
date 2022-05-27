import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { StyledLink } from '../StyledLink/StyledLink'
import styles from './Offer.module.scss'
import { Category } from '../Category/Category'

const Offer = ({ allDoors }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.pageHeader}>Wszystkie drzwi</h1>
      <div className={styles.content}>
        <Category />
        <div className={styles.doorsContainer}>
          {allDoors?.map(({ id, name, image }) => (
            <div key={id} className={styles.doorCard}>
              <Image width={150} height={200} src={image.url} />
              <p>{name}</p>
              <StyledLink variant="secondary" path={`/produkt/${id}`}>
                Sprawdź
              </StyledLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offer
