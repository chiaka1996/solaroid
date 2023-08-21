"use client"
import Image from 'next/image';
import style from './contact.module.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SideBar, Navigation} from "../../components"
import { BarState } from '../../context/context';
import { useState } from 'react';

interface dataProps{
    name: string,
    email: string,
    subject: string,
    message: string
}


const ContactPage = () => {
    const { bar} = BarState();
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<dataProps>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

    const onChangeInput = (e:any) => {
            const value = e.target.value;
            const name = e.target.name;

            setData({
                ...data, 
                [name] : value
            })
        }

    const submitBtn = async () => {
        try{
            setLoading(true)
        const {name, email, subject, message} = data;

        if(!name || !email || !subject || !message) {
            setLoading(false)
            return  toast.error("please fill all required fields.", {
                position: "top-right",
                theme: "colored",
                });
        }

        if(name.length < 2){
            setLoading(false)
            return  toast.error("name should be a minimum of 2 characters", {
                position: "top-right",
                theme: "colored",
                });
        }

        if(!emailRegex.test(email)){
            setLoading(false)
            return  toast.error("invalid email", {
                position: "top-right",
                theme: "colored",
                });
        }

        const httpRequest = await fetch('../api/addmessage',{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        const response = await httpRequest.json();

        if(response.status){
            setLoading(false)
            toast.success(`${response.message}`, {
                position: "top-right",
                theme: "colored",
                });

            setData({
                name: "",
                subject: "",
                email: "",
                message: ""
            })
        }
        else{
            setLoading(false)
            toast.error(`${response.message}`, {
                position: "top-right",
                theme: "colored",
                });
        }
    }
    catch(error:any){
        setLoading(false)
        return toast.error(`${error.message}`, {
            position: "top-right",
            theme: "colored",
            });
    }
    }

    return(
        <main>
            <Navigation page="contact" />
            <SideBar page="contact" /> 
            <ToastContainer />

            <section className={style.bannerContainer}>
            <div className={style.bannerImg}>
            <Image
            src="/service_img/customer_care.webp"
            layout='fill'
            alt="banner image"
            />
            </div>
            <div className={style.bannerTextContainer}>
            <div className={style.bannerTextHeader}>Contact Us</div>
            <div className={style.bannerSubText}>
            Need Assistance or Have a Question?
            </div>
            </div>
            </section>

            <div className={style.googleAddress}> 
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7927.405426625322!2d3.3441271434173467!3d6.5591612737359295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sArmy%20shopping%20complex%2C%20Orile%20Oshodi%20102214%2C%20Ikeja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1690519164777!5m2!1sen!2sng"  
            style={{border: 0}} 
             loading="lazy" 
            // referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
             </div>

             <section className={style.getIntouchContainer}>
                <div className={style.getIntouchDiv}>
                <div className={style.topLine}></div>
                <div className={style.subHeader}>GET IN TOUCH</div>
                <div className={style.contactHeader}>
                Schedule a Qoute
                </div>
                <div className={style.contactNote}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ut elit tellus, 
                luctus nec ullamcorper mattis, 
                pulvinar dapibus leo.
                </div>
                <div className={style.contactDetails}>
                <div className={style.iconContainer}>
                <Image 
                width="20" 
                height="20" 
                src="https://img.icons8.com/ios-filled/20/FFA500/phone--v1.png" 
                alt="phone--v1"
                />
                </div>
                <div>08084052359</div>
                </div>

                <div className={style.contactDetails}>
                <div className={style.iconContainer}>
                <Image 
                width="20" 
                height="20" 
                src="https://img.icons8.com/material-rounded/FFA500/mail.png"
                alt="phone--v1"
                />
                </div>
                <div>chi@gmail.com</div>
                </div>

                <div className={style.contactDetails}>
                <div className={style.iconContainer}>
                <Image 
                width="20" 
                height="20" 
                src="https://img.icons8.com/ios-filled/20/FFA500/marker.png" 
                alt="marker"
                />
                </div>
                <div>
                Army shopping complex, 
                Orile Oshodi 102214, 
                Ikeja, Lagos, Nigeria
                </div>
                
                </div>
                </div>

                <div className={style.getIntouchForm}>
                <div className={style.inputContainer}>
                <input 
                type="text" 
                placeholder="Your Name" 
                value={data.name} 
                name="name"
                onChange={onChangeInput}
                />
                </div>

                <div className={style.inputContainer}>
                <input 
                type="text" 
                placeholder="Your Email" 
                name="email"
                value={data.email}
                onChange={onChangeInput}
                />
                </div>

                <div className={style.inputContainer}>
                <input 
                type="text" 
                placeholder="Your Subject" 
                name="subject"
                value={data.subject}
                onChange={onChangeInput}
                />
                </div>

                <div className={style.textAreaContainer}>
                    <textarea 
                    cols={10} 
                    placeholder="Your Message"
                    value={data.message}
                    name="message"
                    onChange={onChangeInput}
                    >
                    </textarea>
                </div>

                <button onClick={submitBtn}>
                {loading ? 'sending...' : "Send a Message"}
                </button>
                </div>
             </section>
        </main>
    )
}

export default ContactPage;