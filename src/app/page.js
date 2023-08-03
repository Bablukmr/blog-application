import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.texts}>
        <h1 className={styles.titles}>Better Design for Your Digital Products.</h1>
        <p className={styles.description}> Turnini your idea into reality . we bring together the teams from the globle tech industry.</p>
        <button className={styles.btn}>See Our Works</button>
      </div>
      <div className={styles.imgcontainer}>
      <Image src={hero} alt='Hero IMG' className={styles.image}/>
      </div>
    </div>
  )
}
