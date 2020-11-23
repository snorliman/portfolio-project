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
        
        setMailErrorLog(false);
        setPasswordErrorLog(false);
        
        e.preventDefault();

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
    const validationLog = (mail, password) => {
        if (!validateEmail(mail)) {
            setMailErrorLog(true);
        }
        if(!validatePassword(password)) {
            setPasswordErrorLog(true);
        }
        if(mailErrorLog||passwordErrorLog) {
            return;
        } else {
            console.log("UDAŁO SIĘ");
            
        }
        
    }; 
    validationLog(mail, password)  

    }

    return (
        <div className="login">
            <div className="nav-holder">
               <Nav/> 
            </div>
            
            <div className="login-container">
                <form onSubmit={submitHandler} className="login-item">
                    <h2>Zaloguj się</h2>
                    <Decoration/>
                    <div className="login-form" >
                        <label>Email</label>
                        <div className="input-holder">
                            <input id={mailErrorLog&&"error-line"} className="login-input" value={mail} onChange={(e)=> setMail(e.target.value)} type='email'></input>
                            {mailErrorLog && <p className="error-text-log">Podany email jest nieprawidłowy!</p>}
                        </div>
                        <label>Hasło</label>
                            <div className="input-holder">
                                <input id={passwordErrorLog&&"error-line"} className="login-input" value={password} onChange={(e)=> setPassword(e.target.value)} type='password'></input>
                                {passwordErrorLog && <p className="error-text-log">Podane hasło jest za krótkie!</p>}    
                            </div>
                            
                            
                        
                    </div>
                    <div className="login-btn-contanier">
                        <Link className="login-btn login-registry" to="/registration">Załóż konto</Link>
                        <button type="submit" className="login-btn">Zaloguj się</button>    
                    </div>   
                </form>  
            </div> 
        </div>
    )
} 