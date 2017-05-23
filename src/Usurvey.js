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
		nameSubmit(event){
			var studentName = this.refs.name.value;
			this.setState({studentName: studentName}, function(){
				console.log(this.state);
			});
		}

		answerSelected(){
			

		}

	constructor(props){
		super(props);

		this.state = {
			uid: uuid.v1(),
			studentName: 'Joe',
			answers: {
				answer1: '',
				answer2: '',
				answer3: ''
			},
			isSubmitted: false

		};
		this.nameSubmit = this.nameSubmit.bind(this);
		this.answerSelected = this.answerSelected.bind(this);
	}

	render(){
		var studentName;
		var questions;


		if(this.state.studentName === '' && this.state.isSubmitted === false){
				studentName = <div>
				<h1> Hey Student, Please let us know your name: </h1>
						<form onSubmit={this.nameSubmit}>
							<input className="nany" type="text" placeholder="Enter your name" ref="name" />
						</form>
				</div>
		} else if (this.state.studentName !== '' && this.state.isSubmitted === false){
				studentName = <h1>Welcome to the Sample Survey, {this.state.studentName}</h1>
					questions = <div>
						<h2>Here are some questions:</h2>
						<form>
							<div className="card">
								<label>What is your favorite programming language:  </label>
								<input type="radio" name="answer1" value="Javascript" onChange={this.answerSelected}/> Javascript
								<input type="radio" name="answer1" value="Ruby" onChange={this.answerSelected}/> Ruby
								<input type="radio" name="answer1" value="Python" onChange={this.answerSelected}/> Python
							</div>

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