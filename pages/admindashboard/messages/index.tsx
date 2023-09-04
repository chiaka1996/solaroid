import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminNav } from "../../../components/index";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from "./message.module.css"
import Image from "next/image";

interface messageProps {
    _id: string,
    name: string,
    subject: string,
    email: string,
    message: string,
    __v: number,
    createdAt: any,
    updatedAt: any
}

const Message = () => {

    const [allMessages, setmessages] = useState<messageProps[]>([])
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [msgIndex, setMsgIndex] = useState<number>(0)

    const onClickMessage = (i:number) => {
        setMsgIndex(i)
        setModalShow(true)
    }
    
    const fetchAllMessages = async () => {
        try{
            const httpRequest = await fetch('../../../api/getmessages');
            const result = await httpRequest.json();
            
            setmessages([...result.data])
        }
        catch(err:any){
            return toast.error("please reload page", {
                position: "top-right",
                theme: "colored",
                });
        }
    }

    // on calling this function, the message with the particular id will be deleted
    const deleteMessage = async (id:string) => {
        try{
            const httpRequest = await fetch('../../../api/deletemessage',
            {
                method: "POST",
                body: JSON.stringify(id),
                headers: {
                    "Content-Type": "application/json",
                  }
            });

            let response = await httpRequest.json() 
            if(response.status){
                setModalShow(false)
                toast.success(`${response.message}`, {
                    position: "top-right",
                    theme: "colored",
                    });
                fetchAllMessages();
                return true;
            }
            else{
                return   toast.error(`${response.message}`, {
                position: "top-right",
                theme: "colored",
                });
            }
        }
        catch(err:any){
            return toast.error("please reload page", {
                position: "top-right",
                theme: "colored",
                });
        }
    }

    useEffect(() => {
        fetchAllMessages()
    },[])


    return( 
        <main>
            <ToastContainer />
            <AdminNav page="messages" />

            <section className={style.addProductContainer}>
                <div className={style.topBar}>
                Messages
                </div>

                <div className={style.msgContainer}>
                    {
                        allMessages.map((msg, i) =>  <div 
                        className={style.msgRow} 
                        key={i}
                        onClick={() => onClickMessage(i)}
                        >
                        <div className={style.msgNumber}>{i+1}</div>
                        <div className={style.msgName}>{msg.name}</div>
                        <div className={style.subject}>{msg.subject}</div>
                        <div className={style.date}>
                        {new Date(msg.createdAt).getDay() + "-" + new Date(msg.createdAt).getMonth() + "-" + new Date(msg.createdAt).getFullYear()}
                        </div>
                    </div> )
                    }
                </div>
            </section>


            <Modal
    //   {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {allMessages.length > 0 ? allMessages[msgIndex].subject : ""}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={style.emailContainer}>
        <span>email:</span>
        {allMessages.length > 0 ? allMessages[msgIndex].email : ""}
        </div>
        <p>
         {allMessages.length > 0 ? allMessages[msgIndex].message : ""}
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={()=>setModalShow(false)}>Close</Button> */}
        <div  className={style.deleteImg}>
        <Image
        width={20}
        height={20} 
        src="https://img.icons8.com/material-outlined/20/FF0000/filled-trash.png" 
        alt="filled-trash"
        onClick={() => deleteMessage(allMessages[msgIndex]._id)}
        />
        </div>
      </Modal.Footer>
    </Modal>

        </main>
    )
}
export default Message;