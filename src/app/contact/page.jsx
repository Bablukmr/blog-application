import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import IMG from 'public/contact.png'
import Button from '@/components/Button/Button';

export const metadata = {
  title: 'Blogger Contact',
  description: 'This is contact page',
}

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Let's keep in Touch</h1>
      <div className={styles.maincontainer}>
      <div className={styles.imgcontainer}>
        <Image src={IMG} alt='IMG' fill={true} className={styles.images}/>
      </div>
<form className={styles.form}>
<input placeholder='Name' className={styles.input}/>
<input placeholder='Email' className={styles.input}/>
<textarea placeholder='Message' cols="30" rows="10" className={styles.textArea}/>
<Button url={"#"} text={"Send"}/>
</form>
    </div>
    </div>
  )
}
