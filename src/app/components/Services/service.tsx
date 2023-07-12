import style from "./service.module.css"
import Image from "next/image";

const ServicePage = () => {
    return(
        <section className={style.serviceContainer}>
            <div className={style.serviceIntroContainer}>
            <div className={style.topLine}></div>
            <div className={style.introductionHeader}>SERVICES WE PROVIDE</div>
            <div className={style.introCaption}>FROM IDEA TO REALIZATION</div>
            <div className={style.introDetails}>
            The increase in extreme weather events and 
            rising sea levels are unmistakable signs of climate change. 
            Roughly over 850 million people still live without access to electricity, 
            which is the foundation of sustainable development.
            </div>

            <div className={style.serviceGrid}>
                <div className={style.gridItem}>
                    <Image 
                    src="https://img.icons8.com/ios/50/maintenance--v1.png"
                    alt="project imstallation"
                    width={50}
                    height={50}
                    />
                    <div className={style.gridItemText}>
                    PROJECT INSTALLATION
                    </div>     
                </div>

                <div className={style.gridItem}>
                    <Image 
                    src="https://img.icons8.com/wired/64/idea.png"
                    alt="project imstallation"
                    width={50}
                    height={50}
                    />
                    <div className={style.gridItemText}>
                    DEVELOPMENT OF IDEAS
                    </div>     
                </div>
                
                <div className={style.gridItem}>
                    <Image 
                    src="https://img.icons8.com/dotty/80/shopping-cart.png"
                    alt="project imstallation"
                    width={50}
                    height={50}
                    />
                    <div className={style.gridItemText}>
                    PRODUCT SALES
                    </div>     
                </div>

                <div className={style.gridItem}>
                    <Image 
                    src="https://img.icons8.com/dotty/80/support.png"
                    alt="project imstallation"
                    width={50}
                    height={50}
                    />
                    <div className={style.gridItemText}>
                    REPAIR & MAINTENANCE
                    </div>     
                </div>
               
                <div className={style.gridItem}>
                    <Image 
                    src="https://img.icons8.com/ios/50/toolbox.png"
                    alt="project imstallation"
                    width={50}
                    height={50}
                    />
                    <div className={style.gridItemText}>
                    TECHNICAL SUPPORT
                    </div>     
                </div>

                <div className={style.gridItem}>
                    <Image 
                    src="https://img.icons8.com/wired/64/online-support--v2.png"
                    alt="project imstallation"
                    width={50}
                    height={50}
                    />
                    <div className={style.gridItemText}>
                    24HRS CUSTOMER SERVICE
                    </div>     
                </div>
                
            </div>
            </div>
        </section>
    )
}

export default ServicePage;