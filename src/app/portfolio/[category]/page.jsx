import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

export default function Categoty({params}) {
  // console.log(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.cartTitle}> {params.category}</h1>
   <div className={styles.item}>
   <div className={styles.containts}> 
   <h1  className={styles.titles}>Test </h1>
   <p className={styles.description}>Description</p>
   <Button url={"#"} text="See More"/>
   </div>
   <div className={styles.imgContainer}>
    <Image  className={styles.img} fill={true} src={"https://plus.unsplash.com/premium_photo-1673002094186-c7d8988b0f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt='IMG'/>
     </div>
   </div>
   <div className={styles.item}>
   <div className={styles.containts}> 
   <h1  className={styles.titles}>Test </h1>
   <p className={styles.description}>Description</p>
   <Button url={"#"} text="See More"/>
   </div>
   <div className={styles.imgContainer}>
    <Image  className={styles.img} fill={true} src={"https://plus.unsplash.com/premium_photo-1673002094186-c7d8988b0f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt='IMG'/>
     </div>
   </div>
    </div>
  )
}