// import { Satoshi } from '../fonts';
import Image from 'next/image';
import style from './about.module.css';

const about = () => {
    return(
        <div className={style.aboutContainer}>
            <div className={style.experience}>
                <div>
                <div className={style.numbFive}>5</div>
                <div>
                Years of<br/>
                Experience
                </div>
                </div>
            </div>
            <div className={style.imgContainer}>
            <Image 
                src="/home_imgs/two_ladies.jpg"
                layout='fill'
                alt="three ladies"
                />
            </div>

            <div className={style.aboutIntro}>
                <div className={style.topLine}></div>
                <div className={style.introductionHeader}>OUR INTRODUCTION</div>
                <div className={style.introCaption}>Energy Source For a Better Life</div>

                <div className={style.introDetails}>
                We drive the transition to more sustainable, 
                reliable, and affordable energy systems. With 
                our innovative technologies, 
                we energize the society, that is our aim!
                </div>

                <div className={style.introPointers}>  
                    <ul>
                        <li>We provide clean, safe and renewable source of energy</li>
                        <li>Our sales engineers have experience and can design any system</li>
                        <li>We always go above our customer expectations</li>
                        <li>Our industrial solar sytems are designed for reliable power</li>
                    </ul>
                </div>

                <div className={style.learnMoreContainer}>
                    <button>Learn More</button>
                    <div className={style.phoneNumber}>
                        <div className={style.phoneIconDiv}>
                            <Image
                            src="https://img.icons8.com/ios/50/phone--v1.png"
                            width={20}
                            height={20}
                            alt="phone--v1"
                            />
                        </div>
                        <div>
                        <span className={style.question}>Have any questions?</span><br/>
                        <span className={style.numberToCall}>08084052359</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about;