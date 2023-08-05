import {Navigation, SideBar} from "@/components/index";
import Image from "next/image";
import style from './success.module.css'

const Success = () => {
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
          Hey Bay, thank you for your purchase
        </div>

        <div className={style.successSubNote}>
          We will Contact you to discuss the Payment Process
        </div>
      </div>
    </main>
  );
};

export default Success;