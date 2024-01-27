import style from '../styles/404.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
    return (
    <section className={style.container}>
        <div className={style.imgDiv}>
         <Image
            src= '/404_error.jpg'
            layout='fill'
            alt="banner image"
      />
      </div>
    <h1>Page Not Found</h1>
    <Link href="/" style={{textDecoration: "none"}}>
    <button className={style.backBtn}>Back to Homepage</button>
    </Link>
    </section>
    )
  }