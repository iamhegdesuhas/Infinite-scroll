import React, { useEffect, useState } from 'react';
import './App.css';
import { Router,BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { ContactList } from './Components/Contacts/ContactList';
import {LoginScreen} from "../src/Components/Login/LoginScreen"
import {Header} from "../src/Components/Header/Header"
import { createBrowserHistory } from 'history';
function App() {
  const history = useHistory();
  const [loggedIn,setLoggedIn]=useState<boolean>(false)
  useEffect(()=>{
    const isLoggedIn=sessionStorage.getItem("loggedIn")==="true"
    setLoggedIn(isLoggedIn)
    if(isLoggedIn) {
      history.push("/home")
    }else{
      history.push("/")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if(!loggedIn) {
    return <LoginScreen setLoggedIn={setLoggedIn} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
      {loggedIn&&<Header setLoggedIn={setLoggedIn} />}
        <Switch>
          <Route path="/login">
            <LoginScreen setLoggedIn={setLoggedIn}/>
          </Route>
          <Route path="/home">
            <ContactList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const AppWrapper = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

export default AppWrapper;
