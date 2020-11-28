import React from "react"
import './scss/App.scss';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import LogOut from "./pages/LogOut";
import Registration from './pages/Registration';
import {Switch, Route} from "react-router-dom";



function App() {
  return (
    <Switch>
     <Route path="/" exact>
      <HomePage/>
     </Route>
     <Route path="/login">
       <Login />
     </Route>
     <Route path="/registration">
       <Registration />
     </Route>
     <Route path="/wylogowano">
       <LogOut/>
     </Route>
    </Switch>
  );
}

export default App;




// Nagłówek w dwóch rzędach, przyklejony do prawej strony kontenera
// Sekcja główna z obrazkiem po lewej stronie i zachęcającym nagłówku wraz z linkami po stronie prawej
// Sekcja z trzema kolumnami na pomarańczowym tle
// Sekcja "Wystarczą 4 proste kroki" z opisem kroków a także linkiem "Oddaj rzeczy"
// Sekcja "O nas"
// Sekcja "Komu pomagamy"
// Kontakt
// Stopka z tekstem i ikonami social