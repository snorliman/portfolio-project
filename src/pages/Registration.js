import React, { useEffect } from "react";
import Nav from "../components/Nav";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./Registration.scss";
import "./Login.scss";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";


export default function Registration() {

    const [mailErrorLog, setMailErrorLog] = useState(null);
    const [passwordErrorLog, setPasswordErrorLog] = useState(null);
    const [confirmPasswordErrorLog, setConfirmPassowrdLog] = useState(null);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");

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
   const validateConfirmPassword = async (confirmPassword) => {
    if(((confirmPassword.length -1) >= 6)&& confirmPassword === password) {
        setConfirmPassowrdLog(false);
    } else {
        setConfirmPassowrdLog(true);
    } 
   }
    useEffect(() => {
         if(mailErrorLog||passwordErrorLog||confirmPasswordErrorLog) {
            console.log("Nie udało się ", mailErrorLog, passwordErrorLog, confirmPasswordErrorLog);
        } else if ((mailErrorLog||passwordErrorLog||confirmPasswordErrorLog) === false) {
            console.log("UDAŁO SIĘ ", mailErrorLog, passwordErrorLog, confirmPasswordErrorLog);  
        } else {
            return null;
        }
    }, [mailErrorLog, passwordErrorLog, confirmPasswordErrorLog])
    const submitHandler = (e) => {
        
        e.preventDefault();

        validateEmail(mail);
        validatePassword(password);
        validateConfirmPassword(confirmPassword)
    
        
    }; 

    return (
        <div className="reg">
            <div className="nav-holder">
               <Nav/> 
            </div>
            
            <div className="reg-container">
                <form onSubmit={submitHandler} className="reg-item">
                    <h2>Załóż konto</h2>
                    <Decoration className="decoration"/>
                    <div className="reg-form" >
                        <label>Email</label>
                            <input id={mailErrorLog?"error-line":undefined} className="reg-input" value={mail} onChange={(e)=> setMail(e.target.value)} type='email'></input>
                            {mailErrorLog && <p className="error-text-log">Podany email jest nieprawidłowy!</p>}
                        
                        <label>Hasło</label>
                        <div className="input-holder">
                            <input id={passwordErrorLog?"error-line":undefined} className="reg-input" value={password} onChange={(e)=> setPassword(e.target.value)} type='password'></input>
                            {passwordErrorLog && <p className="error-text-log">Podane hasło jest za krótkie!</p>}
                        </div>
                            
                        
                        <label>Powtórz hasło</label> 
                        <div className="input-holder">
                            <input id={confirmPasswordErrorLog?"error-line":undefined} className="reg-input" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} type='password'></input>
                            {confirmPasswordErrorLog && <p className="error-text-log">Podane hasło nie jest takie samo lub jest za krótkie!</p>}
                        </div>
                        
                    </div>
                    <div className="reg-btn-contanier">
                        <Link className="reg-btn reg-login" to="/logowanie">Zaloguj się</Link>
                        <button type="submit" className="reg-btn">Załóż konto</button>    
                    </div>   
                </form>  
            </div> 
        </div>
    )
} 