import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

async function getData(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`);
  if (!res.ok) {
    console.log("error");
    return null;
  }
  return res.json();
}

async function BlogPost({ params }) {
  const data = await getData(params.id);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            layout="fill" // Use layout="fill" instead of fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);

  if (!post) {
    return {
      title: 'Loading...',
      description: 'Loading...',
    };
  }

  return {
    title: post.title,
    description: post.desc,
  };
}

export default BlogPost;
