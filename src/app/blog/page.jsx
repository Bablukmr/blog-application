import React from 'react'
import styles from './blog.module.css'
import Image from 'next/image'
import Link from 'next/link'
//process.env.NEXTAUTH_URL
// async function getData(){
//       const res= await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
//             cache: "no-store",
//           });
//       if(!res.ok){
//             console.log("error");
//       }
//       return res.json()
// }
async function getData() {
      try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
          cache: "no-store",
        });
    
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
    
        return res.json();
      } catch (error) {
        console.error("Error fetching data:", error.message);
        return []; // Return an empty array to handle the error gracefully
      }
    }
    const data=await getData()
    console.log(data[0].content)
export default async function Bolg({ params }) {
      const data=await getData()
      return (
            <div className={styles.maincontainer}>
                  {
                        data.map((item)=>(
                   
                  <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
                        <div className={styles.imgContainer}>
                              <Image src={item.img}
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
// const data=await getData()
export const metadata = {
      title: data[0].content,
      description: 'Blog Application create through next.js app',
    }