import Image from "next/image";
import style from "./benefits.module.css";

const Benefit = () => {
    return (
        <div className={style.benefitContainer}>
            <div className={style.benefitNotes}>
            <div className={style.topLine}></div>
            <div className={style.introductionHeader}>OUR BENEFITS</div>
            <div className={style.introCaption}>
            Why Choose Solaroid Solution?
            </div>
            <div className={style.introDetails}>
            With branches in 5 locations around the Nation and
            Partnerships with various conglomerate, we offer the best services when
            when it comes to solar electricity Generation.
            </div>

            <div className={style.introPointers}>  
                    <ul>
                        <li>6months Warranty on the sale of all Products</li>
                        <li>Afer Sale service installation service at a discounted Price</li>
                        <li>24hrs Customer Support</li>
                        <li>Free delivery on Purchase above N50,000</li>
                    </ul>
                </div>

            </div>
            <div className={style.benefitImage}>
              
                <Image 
                    src="/home_imgs/engineer_shaking_hands.webp"
                    layout="fill"
                    alt="benefit image"
                    />
                   
            </div>
        </div>
    )
}

export default Benefit;