import React from 'react'
import styles from './blog.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData(){
      const res= await fetch("https://jsonplaceholder.typicode.com/posts")
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

                   
                  <Link href={"/blog/testId"} className={styles.container} key={item.id}>
                        <div className={styles.imgContainer}>
                              <Image src={"https://images.unsplash.com/photo-1690812099637-803c65c8e495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}
                                    alt=''
                                    width={400}
                                    height={250} className={styles.img} />

                        </div>
                        <div className={styles.content}>
                              <h1 className={styles.title}>
                                    {item.title}
                              </h1>
                              <p className={styles.desc}>
                                    {item.body}
                              </p>
                        </div>
                  </Link>
                       ))
                  }
                 
            </div>
      )
}
