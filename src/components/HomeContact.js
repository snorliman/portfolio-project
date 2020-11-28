import React, { useEffect } from 'react';
import {useState} from 'react';
import HomeFooter from './HomeFooter';
import './HomeContact.scss';
import {ReactComponent as Decoration} from "../assets/Decoration.svg";

export default function HomeContact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorName, setErrorName] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    

    const validateEmail = (mail) => {
        const re = /\S+@\S+\.\S+/;
        if(re.test(mail)) {
            setErrorEmail(false);
        } else {
            setErrorEmail(true);
        }
}
const haveSpace = (nam) => {
        if (/\s/.test(nam)) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }

}     
const goodNumberOfSigh = (mess) => {
    if((mess.length - 1) < 120) {
        setErrorMessage(false);
    } else {
        setErrorMessage(true);
    }
}
    useEffect(() => {
        const userData = {
            name,
            email,
            message,
        };
        if(errorMessage|| errorName || errorEmail)  {
            console.log("Nie udało się")    
        ;
        } else if ((errorMessage|| errorName || errorEmail) === false) {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
                } else {
                    return null;
                }
    }, [errorEmail, errorMessage, errorName]);

    const submitHandler = (e) => {
        
    e.preventDefault(); 
    haveSpace(name);
    validateEmail(email);
    goodNumberOfSigh(message);
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