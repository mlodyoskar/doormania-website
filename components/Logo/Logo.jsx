import Image from 'next/image'
import LogoImage from '../../public/static/images/logo.png'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.container}>
      <Image src={LogoImage} alt="Logo doormani" />
    </div>
  )
}

export default Logo
