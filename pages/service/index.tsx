import Image from "next/image";
import {SideBar, Navigation, Footer} from "../../components"
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
                Illuminating Your Future.
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
            <div className={style.serviceHeader}>Residential Solar Solutions</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            Embrace renewable energy and transform your home into a powerhouse of 
            sustainability with our residential solar solutions. Our experts design 
            custom solar systems tailored to your energy needs, 
            ensuring maximum efficiency and savings on your utility bills.
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
            <div className={style.serviceHeader}>Commercial Solar Solutions</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            Elevate your business to new heights of sustainability and 
            cost-efficiency with our commercial solar solutions.
            From office buildings to industrial complexes, we design and 
            install solar systems that optimize energy production, reduce operating costs, 
            and enhance your corporate social responsibility.
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
            <div className={style.serviceHeader}>Solar Panel Installation</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            Our team of certified professionals specializes in seamless solar panel 
            installations, utilizing the latest technologies and industry best practices. 
            Whether it&apos;s rooftop installations or ground-mounted arrays, we ensure precision, 
            durability, 
            and aesthetics in every project we undertake.
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
            <div className={style.serviceHeader}>Solar System Maintenance</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            Protect your investment and maintain peak performance with our 
            comprehensive solar system maintenance services. From routine inspections 
            to troubleshooting and repairs, 
            our technicians keep your solar system operating at its optimal efficiency,
             year after year.
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
            <div className={style.serviceHeader}>Energy Storage Solutions</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            Store excess solar energy for use during periods of low sunlight or as a 
            backup power source during grid outages with our energy storage solutions.
            Our advanced battery systems integrate seamlessly with your solar setup, 
            providing reliable energy storage and enhancing your energy independence.
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
            <div className={style.serviceHeader}>Solar Financing and Incentives</div>
            <div className={style.serviceLine}></div>
            <div className={style.serviceNotes}>
            We understand that transitioning to solar energy is a significant investment. 
            That&apos;s why we offer flexible financing options and help you navigate available 
            incentives, tax credits, and rebates to make your solar journey affordable and rewarding.
            </div>
            </section>
            </div>
            </section>
            <Footer />
        </main>
    )
}

export default ServicePage;