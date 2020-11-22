import React from "react";
import Nav from "../components/Nav";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./Login.scss";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";


export default function Login() {

    const [mailErrorLog, setMailErrorLog] = useState(false);
    const [passwordErrorLog, setPasswordErrorLog] = useState(false);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        setMailErrorLog(false);
        setPasswordErrorLog(false);

        const validateEmail = (mail) => {
            const re = /\S+@\S+\.\S+/;
            return re.test(mail);
    }
    const validatePassword = (password) => {
        if((password.lenght -1) < 6) {
            return true;
        } else {
            return false;
        } 
       }
    const validation = (mail, password) => {
        if (validateEmail) {
            setMailErrorLog(true);
        }
        if(validatePassword) {
            setPasswordErrorLog(true);
        }
        if(mailErrorLog||passwordErrorLog) {
            return;
        } else {
            console.log("UDAŁO SIĘ")
        }
        validation(mail, password)
    }   

    }

    return (
        <div className="login">
            <div className="nav-holder">
               <Nav/> 
            </div>
            
            <div className="login-container">
                <div className="login-item">
                    <h2>Zaloguj się</h2>
                    <Decoration/>
                    <form className="login-form" onSubmit={submitHandler}>
                        <label>Email</label>
                            <input className="login-input" value={mail} onChange={(e)=> setMail(e.target.value)} type='email'></input>
                        
                        <label>Hasło</label>
                            <input className="login-input" value={password} onChange={(e)=> setPassword(e.target.value)} type='password'></input>
                        
                    </form>
                    <div className="login-btn-contanier">
                        <Link className="login-btn login-registry" to="/registration">Załóż konto</Link>
                        <button type="submit" className="login-btn">Zaloguj się</button>    
                    </div>   
                </div>  
            </div> 
        </div>
    )
} 