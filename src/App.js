import React, { Component } from 'react';
import currencies from './currencies';
import axios from 'axios';
import firebase from './firebase';
import './App.css';

//This is our reference to the root of our database
const dbRef = firebase.database().ref();

//Get current date
const currentDate = `${(new Date()).getFullYear()}-${(new Date()).getMonth()+1}-${new Date().getDate()}`;


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  createAPIPromises = (curr) => {
    return curr.map(elem => {
      return (
        axios.get('https://api.exchangeratesapi.io/latest',{
          params: {
            base: elem
          }
        })
      );
    });
  }


  componentDidMount() {
    
    

    //Query database once
    dbRef.once('value').then((snapshot) => {
      
      //Check if current date is key in database
      //If it is not in dataase, make axios query to foreign exchange database, then store in firebase DB.
      if (!snapshot.child(currentDate).exists()) {
        const dateRef = dbRef.child(currentDate);
        //Make axios request and get data from Currency API
        axios.all(this.createAPIPromises(currencies))
        .then(res => {
          res.forEach(elem =>{
            //Push data to database with current date
            dateRef.child(elem.data.base).child(elem.data.date).set(elem.data.rates);
          })
          
        });
      }
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>CurrencyPal</h1>
        </header>

        
      </div>
    );
  }
}

export default App;
