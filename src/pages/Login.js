import React, { useEffect } from "react";
import Nav from "../components/Nav";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./Login.scss";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";


export default function Login() {

    const [mailErrorLog, setMailErrorLog] = useState(null);
    const [passwordErrorLog, setPasswordErrorLog] = useState(null);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail  = async (mail) => {
        const re = /\S+@\S+\.\S+/;
        if (re.test(mail)) {
            setMailErrorLog(false)
        } else {
            setMailErrorLog(true)
        };
}
const validatePassword = async (password) => {
    if((password.length -1) < 6) {
        setPasswordErrorLog(true);
    } else {
        setPasswordErrorLog(false);
    } 
   }
   useEffect(() => {
       if(mailErrorLog||passwordErrorLog) {
            console.log("Nie udało się ", mailErrorLog, passwordErrorLog);
        } else if ((mailErrorLog||passwordErrorLog) === false) {
            console.log("UDAŁO SIĘ ", mailErrorLog, passwordErrorLog);
        } else {
            return null;
        }
   }, [passwordErrorLog, mailErrorLog]);

    const submitHandler = (e) => {
        
        e.preventDefault();

        validateEmail(mail);
        validatePassword(password); 
    };  


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
                            <input id={mailErrorLog ? "error-line":undefined} className="login-input" value={mail} onChange={(e)=> setMail(e.target.value)} type='email'></input>
                            {mailErrorLog && <p className="error-text-log">Podany email jest nieprawidłowy!</p>}
                        </div>
                        <label>Hasło</label>
                            <div className="input-holder">
                                <input id={passwordErrorLog ? "error-line" : undefined} className="login-input" value={password} onChange={(e)=> setPassword(e.target.value)} type='password'></input>
                                {passwordErrorLog && <p className="error-text-log">Podane hasło jest za krótkie!</p>}    
                            </div>
                            
                            
                        
                    </div>
                    <div className="login-btn-contanier">
                        <Link className="login-btn login-registry" to="/rejestracja">Załóż konto</Link>
                        <button type="submit" className="login-btn">Zaloguj się</button>    
                    </div>   
                </form>  
            </div> 
        </div>
    )
} 