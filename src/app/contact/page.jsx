import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

import contactImage from 'public/contact.png'; // Assuming the image file is in the public folder

import Button from '@/components/Button/Button'; // Import and use the correct path for the Button component

export const metadata = {
  title: 'Blogger Contact',
  description: 'This is the contact page',
};

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Let's keep in Touch</h1>
      <div className={styles.maincontainer}>
        <div className={styles.imgcontainer}>
          {/* Provide width and height attributes for the Image component */}
          <Image src={contactImage} alt='IMG' width={500} height={400} className={styles.images} />
        </div>
        <form className={styles.form}>
          <input placeholder='Name' className={styles.input} />
          <input placeholder='Email' className={styles.input} />
          <textarea placeholder='Message' cols='30' rows='10' className={styles.textArea} />
          <Button url={'#'} text={'Send'} />
        </form>
      </div>
    </div>
  );
}
