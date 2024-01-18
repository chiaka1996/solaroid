import {Navigation, SideBar} from "../../../components/index";
import Image from "next/image";
import { useRouter } from "next/router";
import style from './success.module.css'
import { useState, useEffect } from "react";

const Success = () => {
  const router = useRouter();
  const [name, setName] = useState<String>('');

  useEffect(() => {
    router.query.name &&  !Array.isArray(router.query.name) ? setName(router.query.name) : ''
  }, [router.query.name])

  return (
    <main className={style.successContainer}>
      <Navigation page="products" />
      <SideBar page="products" />

      <div className={style.successSubContainer}>
        <Image
          src="/home_imgs/successImg.png"
          alt="congrat Image"
          width={450}
          height={400}
          className={style.successImage}
        />

        <div className={style.successNote}>
          Hey {name}, thank you for your purchase
        </div>

        <div className={style.successSubNote}>
          We will Contact you to discuss the Payment Process
        </div>
      </div>
    </main>
  );
};

export default Success;