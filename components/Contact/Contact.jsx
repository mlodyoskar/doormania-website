import styles from './Contact.module.scss'
import {
  AiOutlinePhone,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
} from 'react-icons/ai'

const Contact = ({ contactPageData: { footer } }) => {
  const {
    email,
    emailSec,
    phone,
    phoneSec,
    street,
    zipcodeCity,
    satSunWorkHours,
    monFriWorkHours,
  } = footer
  return (
    <section className={styles.container}>
      <h1 className={styles.pageHeader}>Kontakt</h1>
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <AiOutlinePhone className={styles.icon} />
            </div>
            <div>
              <h2>Telefon</h2>
              <p>
                tel: <a href={`tel:${phone}`}>{phone}</a>
              </p>
              <p>
                e-mail: <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <AiOutlineEnvironment className={styles.icon} />
            </div>
            <div>
              <h2>Siedziba firmy</h2>
              <p>{street}</p>
              <p>{zipcodeCity}</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <AiOutlineClockCircle className={styles.icon} />
            </div>
            <div>
              <h2>Godziny pracy</h2>
              <p>poniedziałek-piątek: {monFriWorkHours}</p>
              <p>sobota-niedziela: {satSunWorkHours}</p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.797008569417!2d17.586205316454205!3d52.50091397981077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470493dc12970f97%3A0x28a1977760dae0d0!2sDoormania!5e0!3m2!1spl!2spl!4v1652453021403!5m2!1spl!2spl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
