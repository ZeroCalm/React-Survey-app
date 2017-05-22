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
	constructor(props){
		super(props);

		this.state = {
			uid: uuid.v1(),
			studentName: '',
			answers: {
				answer1: '',
				answer2: '',
				answer3: ''
			},
			isSubmitted: false

		};
	}

	render(){
		var studentName;
		var questions;


		if(this.state.studentName === '' && this.state.isSubmitted === false){
				studentName = <div>
				<h1> Hey Student, Please let us know your name: </h1>
						<form>
							<input type="text" placeholder="Enter your name" ref="name" />
						</form>
				</div>
		}

		return(
			<div>

			{studentName}
			--------------------------
			{questions}

			</div>
		);
	}
}

export default Usurvey;