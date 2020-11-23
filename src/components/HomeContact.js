import React from 'react';
import {useState} from 'react';
import HomeFooter from './HomeFooter';
import './HomeContact.scss';
import {ReactComponent as Decoration} from "../assets/Decoration.svg";

export default function HomeContact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);




    const submitHandler = (e) => {
        

    setErrorEmail(false);
    setErrorMessage(false);
    setErrorName(false); 
    e.preventDefault(); 

        const userData = {
        name,
        email,
        message,
    };
    
        
    const validateEmail = (mail) => {
            const re = /\S+@\S+\.\S+/;
            return re.test(mail);
    }
    const haveSpace = (nam) => {
            return /\s/.test(nam);
    }     
    const goodNumberOfSigh = (mess) => {
        if((mess.length - 1) > 120) {
            return false;
        } else {
            return true;
        }
    }
    const validation = (mail, nam, mess) => {
    
        if (!validateEmail(mail)) {
            setErrorEmail(true)
        }if (haveSpace(nam)) {
            setErrorName(true);
        }if (!goodNumberOfSigh(mess)) {
            setErrorMessage(true);
        }
        if((errorMessage||errorName||errorEmail)) {
             return;
        }
        else {
            return (fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err)));
        ;
        } ;
    };
    validation(email, name, message);          
    };
    
    

    return (
        <section id="contact-us" className="contact-us">
            <div className="contact-container">
                <h2>Skontaktuj się z nami</h2>
                <Decoration/>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="input-container">
                        <label className="label-text">Wpisz swoję imię
                            <input className={errorName? "error-line" : ""} type="text" name="name" onChange={({target})=> setName(target.value)} value={name} placeholder="Krzysztof"></input>
                            {errorName&& <p className="error-text">Nieprawidłowe imię</p>}
                        </label>
                        <label className="label-text"  value={email}>wpisz swój email
                            <input className={errorEmail? "error-line" : ""} type="email" name="email" onChange={({target})=> setEmail(target.value)} value={email} placeholder="abc@xyz.pl"></input>
                        {errorEmail&& <p className="error-text">Nieprawidlowy adres email</p>}</label>
                        
                    </div>
                    
                    <label className="label-textarea">Wpisz swoją wiadomość
                        <textarea className={errorMessage? "error-line" : ""} name="message" value={message} onChange={({target})=> setMessage(target.value)} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    {errorMessage && <p className="error-text">Wiadomość ma więcej niż 120 znaków</p>}
                    
                    <button className="form-btn" type="submit" >Wyślij</button>
                    </label>
                </form>
            </div>
            <HomeFooter/>
        </section>
    )
}