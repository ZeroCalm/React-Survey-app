import React, { Component } from 'react'
var firebase = require('firebase');
var uuid = require('uuid');
var config = {
    apiKey: "AIzaSyCHHmpEjawOiDFLCQQ9EhVbH-nvsGL7IvY",
    authDomain: "sample-survey-26f5a.firebaseapp.com",
    databaseURL: "https://sample-survey-26f5a.firebaseio.com",
    projectId: "sample-survey-26f5a",
    storageBucket: "sample-survey-26f5a.appspot.com",
    messagingSenderId: "162490067837"
  };
  firebase.initializeApp(config);



class Usurvey extends Component {
	render(){
		return(
			<div>
			I am from Usurvey Component

			</div>
		);
	}
}

export default Usurvey;