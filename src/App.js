import React from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from './logo.svg';
//import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

import './App.css';

const responseFacebook = (response) => {
  console.log(response);
}
function App() {

  return (
    <header className="App-header">
      <h1>LOGIN WITH FACEBOOK </h1>

      <FacebookLogin
        appId="1833903530072982" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />

    </header>
  );
}

export default App;
