import React from 'react'
import styles from './blog.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData(){
      const res= await fetch("http://localhost:3000/api/posts", {
            cache: "no-store",
          });
      if(!res.ok){
            console.log("error");
      }
      return res.json()
}

export default async function Bolg({ params }) {
      const data=await getData()
      // console.log(data)
      return (
            <div className={styles.maincontainer}>
                  {
                        data.map((item)=>(
                   
                  <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
                        <div className={styles.imgContainer}>
                              <img src={item.img}
                                    alt=''
                                    width={400}
                                    height={250} className={styles.img} />
                        </div>
                        <div className={styles.content}>
                              <h1 className={styles.title}>
                                    {item.title}
                              </h1>
                              <p className={styles.desc}>
                                    {item.desc}
                              </p>
                        </div>
                  </Link>
                       ))
                  }
                 
            </div>
      )
}
