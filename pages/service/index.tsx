import Image from "next/image";
import {SideBar, Navigation} from "../../components"
import style from "./service.module.css";


const ServicePage = () => {
    return(
        <main>
             <Navigation page="services" />
            <SideBar page="services" /> 
             <section className={style.bannerContainer}>
            <div className={style.bannerImg}>
            <Image
            src="/service_img/charge_controller.jpg"
            layout='fill'
            alt="banner image"
            />
            </div>
            <div className={style.bannerTextContainer}>
            <div className={style.bannerTextHeader}>Services</div>
            <div className={style.bannerSubText}>
                Helping you save energy and 
                keep the lights on.
            </div>
            </div>
            </section>

            <section className={style.servicesContainer}>
            <div className={style.serviceOption}>
            <div className={style.serviceImg}>
                <Image 
                src="/service_img/solar_technology.jpg"
                layout='fill'
                alt="solar technology"
                />

                <div className={style.serviceIcon}>
                <Image 
                width={50} 
                height={50} 
                src="https://img.icons8.com/ios/50/FFFFFF/solar-energy--v1.png"
                alt="solar-energy--v1"
                />
            </div>
            </div>

            <section className={style.serviceMainNote}>
            <div className={style.serviceHeader}>Solar Technology</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            lorep imsum lorep imsumlorep imsumlorep imsum lorep imsum
            lorep imsumlorep imsumlorep imsum lorep imsumlorep imsum
            lorep imsumlorep imsum lorep imsumlorep imsum
            </div>
            </section>
            </div>

           
            <div className={style.serviceOption}>
            <div className={style.serviceImg}>
                <Image 
                src="/service_img/installation.jpg"
                layout='fill'
                alt="solar technology"
                />
                <div className={style.serviceIcon}>
                <Image 
                width={50} 
                height={50} 
                src="https://img.icons8.com/glyph-neue/50/FFFFFF/solar-panel.png" 
                alt="solar-energy--v1"
                />
                </div>
            </div>
           
            <section className={style.serviceMainNote}>
            <div className={style.serviceHeader}>Solar Installation</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            lorep imsum lorep imsumlorep imsumlorep imsum lorep imsum
            lorep imsumlorep imsumlorep imsum lorep imsumlorep imsum
            lorep imsumlorep imsum lorep imsumlorep imsum
            </div>
            </section>
            </div>

            <div className={style.serviceOption}>
            <div className={style.serviceImg}>
                <Image 
                src="/service_img/equipment.jpg"
                layout='fill'
                alt="solar technology"
                />

                <div className={style.serviceIcon}>
                <Image 
                width={35} 
                height={35} 
                src="https://img.icons8.com/ios-filled/35/FFFFFF/settings.png"  
                alt="solar-energy--v1"
                />
                </div>
            </div>

            <section className={style.serviceMainNote}>
            <div className={style.serviceHeader}>Solar Equipment</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            lorep imsum lorep imsumlorep imsumlorep imsum lorep imsum
            lorep imsumlorep imsumlorep imsum lorep imsumlorep imsum
            lorep imsumlorep imsum lorep imsumlorep imsum
            </div>
            </section>
            </div>

            <div className={style.serviceOption}>
            <div className={style.serviceImg}>
                <Image 
                src="/service_img/battery.jpg"
                layout='fill'
                alt="solar technology"
                />
                <div className={style.serviceIcon}>
                <Image 
                width={40} 
                height={40} 
                src="https://img.icons8.com/ios-filled/40/FFFFFF/battery-.png" 
                alt="solar-energy--v1"
                />
                </div>
            </div>

            <section className={style.serviceMainNote}>
            <div className={style.serviceHeader}>Battery Materials</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            lorep imsum lorep imsumlorep imsumlorep imsum lorep imsum
            lorep imsumlorep imsumlorep imsum lorep imsumlorep imsum
            lorep imsumlorep imsum lorep imsumlorep imsum
            </div>
            </section>
            </div>

            <div className={style.serviceOption}>
            <div className={style.serviceImg}>
                <Image 
                src="/service_img/charge_controller.jpg"
                layout='fill'
                alt="solar technology"
                />
                <div className={style.serviceIcon}>
                <Image 
                width={40} 
                height={40} 
                src="https://img.icons8.com/ios/40/FFFFFF/electricity.png"  
                alt="solar-energy--v1"
                />
                </div>
            </div>

            <section className={style.serviceMainNote}>
            <div className={style.serviceHeader}>Charge Controllers</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            lorep imsum lorep imsumlorep imsumlorep imsum lorep imsum
            lorep imsumlorep imsumlorep imsum lorep imsumlorep imsum
            lorep imsumlorep imsum lorep imsumlorep imsum
            </div>
            </section>
            </div>

            <div className={style.serviceOption}>
            <div className={style.serviceImg}>
                <Image 
                src="/service_img/maintenace.jpg"
                layout='fill'
                alt="solar technology"
                />
                <div className={style.serviceIcon}>
                <Image 
                width={40} 
                height={40} 
                src="https://img.icons8.com/ios/40/FFFFFF/maintenance--v1.png"
                alt="solar-energy--v1"
                />
                </div>
            </div>

            <section className={style.serviceMainNote}>
            <div className={style.serviceHeader}>Maintenance</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            lorep imsum lorep imsumlorep imsumlorep imsum lorep imsum
            lorep imsumlorep imsumlorep imsum lorep imsumlorep imsum
            lorep imsumlorep imsum lorep imsumlorep imsum
            </div>
            </section>
            </div>
            </section>
        </main>
    )
}

export default ServicePage;