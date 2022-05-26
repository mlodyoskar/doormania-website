import Logo from '../Logo/Logo'
import styles from './Footer.module.scss'
import {
  AiOutlinePhone,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
} from 'react-icons/ai'

const Footer = ({ data }) => {
  console.log(data)
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          {/* <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            repellat iusto animi dolores! Cupiditate non voluptas minus adipisci
            repudiandae minima velit odit, fugit dolorem reprehenderit aut
            facilis eveniet iste sunt aperiam modi quidem, amet consequuntur,
            veritatis officia perspiciatis temporibus nihil provident sequi?
            Mollitia optio facilis minima fugiat dolor excepturi impedit.
          </p> */}
        </div>
        <div className={styles.section}></div>
        <div className={styles.section}></div>
        <div className={styles.section}></div>
        <div className={styles.section}>
          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <AiOutlinePhone className={styles.icon} />
            </div>
            <div>
              <h2>Telefon</h2>
              <p>
                tel: <a href={`tel:${+48}`}>BLABLA</a>
              </p>
              <p>
                e-mail: <a href={`mailto:`}>doormania@gmail.com</a>
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <AiOutlineEnvironment className={styles.icon} />
            </div>
            <div>
              <h2>Siedziba firmy</h2>
              <p>siedzibka</p>
              <p>zip-code i miasto</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <AiOutlineClockCircle className={styles.icon} />
            </div>
            <div>
              <h2>Godziny pracy</h2>
              <p>poniedziałek-piątek: tu godziny pracy</p>
              <p>sobota-niedziela: tu te godzinki</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
