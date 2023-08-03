import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.footer}>
      <div>@Bablu Kumar</div>

      <div className={styles.social}>
        <Link href={"https://github.com/Bablukmr"} target='_blank'><Image className={styles.icons} width={20} height={20} src="/11.png" alt="footer IMG"/></Link>
        <Link  href={"https://www.linkedin.com/in/bablukmr/"}  target='_blank'> <Image className={styles.icons} width={20} height={20} src="/22.png" alt="footer IMG"/></Link>
        <Link  href={"https://www.facebook.com/Bablukmr01"}  target='_blank'> <Image className={styles.icons} width={20} height={20} src="/1.png" alt="footer IMG"/></Link>
        <Link  href={""}> <Image className={styles.icons} width={20} height={20} src="/2.png" alt="footer IMG"/></Link>
      </div>
    </div>
  )
}

export default Footer