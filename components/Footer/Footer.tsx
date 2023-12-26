import style from "./Footer.module.css"
import Link from "next/link";

const Footer = () => {
    return(
        <main className={style.footerContainer}>
           <section className={style.subFooterLinkBanner}>
            <div className={style.footerBrandName}>
            Solaroid
            </div>
            <div className={style.footerNote}>
            We Offer a Wide Range of Quality 
            Solar Panel Installation Services.
            </div>
           </section>

           <section className={style.subFooterLink}>
            <div className={style.subLinkHeader}>Explore</div>
            <ul>
                <li>
                <Link href="/" style={{textDecoration: "none"}}>
                <span className={style.footerNavLink}>Home</span>
                </Link>
                </li>       
                <li>
                <Link href="/about_us" style={{textDecoration: "none"}}>    
                <span className={style.footerNavLink}>About</span>
                </Link>
                </li>
                <li>
                <Link href="/service" style={{textDecoration: "none"}}>
                <span className={style.footerNavLink}>Services</span>
                </Link>
                </li>
                <li>
                <Link href="/contact_us" style={{textDecoration: "none"}}>
                <span className={style.footerNavLink}>Contact</span>
                </Link>
                </li>
            </ul>
           </section>

           <section className={style.subFooterLink}>
            <div className={style.subLinkHeader}>
                Services
            </div>
            <ul>
                <li>Professional Consultation</li>
                <li>Project installation</li>
                <li>Product Sales</li>
                <li>Repair and Maintenance</li>
                <li>Technical Support</li>
                <li>24hrs Customer Service</li>
            </ul>
           </section>

           <section  className={style.subFooterLink}>
           <div className={style.subLinkHeader}>
                Contact
            </div>

            <div className={style.addressDetails}>
            60, Brooklyn Golden Street
            New York 8800 Lagos    
            </div>

            <div className={style.email_phone}>
            <div>chikajunior19@gmail.com </div>
            <div>+2348084052359</div>
            </div>
           </section>
        </main>
    )
}

export default Footer;