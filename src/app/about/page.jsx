import React from 'react'
import styles from './about.module.css'
import img from 'public/about.jpg'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.imgcontainer}>
        <Image src={img} fill={true} alt='IMG' className={styles.img}/>
        <div className={styles.imgtext}>
        <h1 className={styles.imgtitle}>Digital Storyteller</h1>
        <h1 className={styles.imgdes}>Hand crafting award winning digital experience</h1>
      </div>
      </div>
     
      <div className={styles.textcontainer}>
      <div className={styles.texts}>
        <h1>Who Are We ?</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus illo aliquam totam vitae, dolorem corrupti dicta odit facilis voluptate, fugit possimus blanditiis itaque cumque explicabo temporibus? Fugit, voluptates delectus.<br/> <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque necessitatibus hic eveniet. Quae dignissimos enim dolore excepturi quisquam cum veritatis, magnam voluptates est sit quis. Reiciendis earum error ab.</p>
      </div>
      <div className={styles.texts}>
      <h1>What We Do ?</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ducimus illo aliquam totam vitae, dolorem corrupti dicta odit facilis voluptate, fugit possimus blanditiis itaque cumque explicabo temporibus? Fugit, voluptates delectus.<br/> <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque necessitatibus hic eveniet. Quae dignissimos enim dolore excepturi quisquam cum veritatis, magnam voluptates est sit quis. Reiciendis earum error ab.</p>
        <Button url='/contact' text="Contact" />
      </div>
      </div>
      </div>
    
  )
}
