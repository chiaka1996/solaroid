"use client"
import Image from "next/image";
import {About, Count, Navigation, SideBar} from '@/components/index'
import style from "./aboutPage.module.css";

const AboutPage = () => {
    return(
        <main>
             <Navigation page="about" />
            <SideBar page="about" /> 
            <section className={style.bannerContainer}>
            <div className={style.bannerImg}>
            <Image
            src="/home_imgs/solarEngs.avif"
            fill
            alt="banner image"
            />
            </div>
            <div className={style.bannerTextContainer}>
            <div className={style.bannerTextHeader}>About Us</div>
            <div className={style.bannerSubText}>Specializing in Solar Power Generation</div>
            </div>
            </section>

            <About />

            <section className={style.howWeWork}>
                <div className={style.topLine}></div>
                <div className={style.howHeader}>How Our Team Work</div>

                <div className={style.processGrid}>
                    <div className={style.step1}>
                        <Image
                        src="/about_img/icon-1.jpg"
                        width={70}
                        height={70}
                        alt="step1"
                        />
                   
                    <div className={style.processStep}>STEP</div>
                    <div className={style.processNumber}>01.</div>
                    <div className={style.processHeader}>Meet Consultant</div>
                    <div className={style.topLineSmall}></div>
                    <div className={style.processNote}>
                    We Schedule a meeting for you and one of our Consultants to 
                    discuss your requirement, budget and Energy needs.
                    </div>
                     </div>

                     <div className={style.step2}>
                        <Image
                        src="/about_img/icon-2.jpg"
                        width={70}
                        height={70}
                        alt="step2"
                        />
                    <div className={style.processStep}>STEP</div>
                    <div className={style.processNumber}>02.</div>
                    <div className={style.processHeader}>Generate Power</div>
                    <div className={style.topLineSmall}></div>
                    <div className={style.processNote}>
                    We Proceed to the Energy generation, 
                    where we use the best available solar panels 
                    to fufil your energy need.
                    </div>
                     </div>

                     <div className={style.step3}>
                        <Image
                        src="/about_img/icon-3.jpg"
                        width={70}
                        height={70}
                        alt="step3"
                        />
                   
                    <div className={style.processStep}>STEP</div>
                    <div className={style.processNumber}>03.</div>
                    <div className={style.processHeader}>Save the Energy</div>
                    <div className={style.topLineSmall}></div>
                    <div className={style.processNote}>
                    With the use of industry standard batteries, we save 
                    the energies and make it possible for you to use at your 
                    own convenience.
                    </div>
                     </div>

                     <div className={style.step4}>
                        <Image
                        src="/about_img/icon-4.jpg"
                        width={70}
                        height={70}
                        alt="step1"
                        />
                   
                    <div className={style.processStep}>STEP</div>
                    <div className={style.processNumber}>04.</div>
                    <div className={style.processHeader}>Use the Power</div>
                    <div className={style.topLineSmall}></div>
                    <div className={style.processNote}>
                    With the solar energy, you can power every appliance in 
                    your house, from your Tv to deep freezers.
                    </div>
                     </div>
                </div>
            </section>

            <section className={style.ecologicalWay}>
            <div className={style.ecologicalImgMobile}>
                    <Image 
                        src="/about_img/solar_house.jpg"
                        fill
                        alt="solar house"
                        />
                </div>
                <div className={style.ecologicalNotes}>
                    <div className={style.topLineEcological}></div>
                    <div className={style.introductionHeader}>ECOLOGICAL WAY</div>

                    <div className={style.introCaption}>
                    Reshaping Energy for the Future
                    </div>

                    <div className={style.introDetails}>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </div>

                    <div className={style.ecologicalEffects}>
                        <div className={style.subHeadContainer}>
                            <Image
                            src="/about_img/boot1.png"
                            width={40}
                            height={40}
                            alt="sunshine"
                            />
                            <div className={style.subHead}>
                            Optimize Energy Use and reduce waste
                            </div>
                             <div className={style.subHeadNotes}>
                             Use only what you want and 
                             reduce waste
                            </div>
                        </div>
                        <div className={style.subHeadContainer}>
                            <Image
                            src="/about_img/boost2.png"
                            width={40}
                            height={40}
                            alt="sunshine"
                            />
                            <div className={style.subHead}>
                            Reduce Greenhouse Emmissions
                            </div>
                            <div className={style.subHeadNotes}>
                              Help keep the future clean and safe.
                            </div>
                        </div>

                    </div>
                </div>

                <div className={style.ecologicalImg}>
                    <Image 
                        src="/about_img/solar_house.jpg"
                        fill
                        alt="solar house"
                        />
                </div>
            </section>
            <Count />
        </main>
    )
}

export default AboutPage;