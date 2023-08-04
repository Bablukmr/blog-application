import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import { items } from './data'

const getData=(cat)=>{
  const data= items[cat]
    return data
}
export default function Categoty({params}) {
  // console.log(params.category);
  const data= getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.cartTitle}> {params.category}</h1>
      {
        data.map((item)=>(
   <div className={styles.item} key={item.id}>
   <div className={styles.containts}> 
   <h1  className={styles.titles}>{item.title} </h1>
   <p className={styles.description}>{item.desc}</p>
   <Button url={"#"} text="See More"/>
   </div>
   <div className={styles.imgContainer}>
    <Image  className={styles.img} fill={true} src={item.image} alt='IMG'/>
     </div>
   </div>
      ))
    }
    </div>
  )
}