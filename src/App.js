import React, { Component } from 'react';
import currencies from './currencies';
import axios from 'axios';
import firebase from './firebase';
import DashBoardBase from './DashBoardBase';
import DashBoardSelect from './DashBoardSelect';
import './App.css';

//This is our reference to the root of our database
const dbRef = firebase.database().ref();

//Get current date
// const currentDate = `${(new Date()).getFullYear()}-${(new Date()).getMonth()+1}-${new Date().getDate()}`;


class App extends Component {
  constructor() {
    super();
    this.state = {
      baseCurrency: '',
      dashboardRates: {}
    }
  }
  //Function to create array of promises for all of the available currencies
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
    
    //Make API request and get all data for all currencies
    //Push to database
    ////////////////////COMMENTING out so as not to make multiple API calls///////////////
    axios.all(this.createAPIPromises(Object.keys(currencies)))
      .then(res => {
        res.forEach(elem => {
          //Push data to database with current date
          dbRef.child(elem.data.base).child('Base').set(elem.data.base)
          dbRef.child(elem.data.base).child('Date').set(elem.data.date);
          dbRef.child(elem.data.base).child('Rates').set(elem.data.rates);
        })
      })

    ////////////////////////Clear Database////////////////////////////////
    // dbRef.remove();

      //Set Base Currency to CAD
      this.setState({
        baseCurrency: 'CAD'
      })

    //////////////////////////THIS CODE possible could be deleted//////
    //Query database once
    // dbRef.once('value').then((snapshot) => {
      
      //Check if current date is key in database
      //If it is not in dataase, make axios query to foreign exchange database, then store in firebase DB.
      // if (!snapshot.child(currentDate).exists()) {
        // const dateRef = dbRef.child(currentDate);
        //Make axios request and get data from Currency API
        // axios.all(this.createAPIPromises(currencies))
        // .then(res => {
          // res.forEach(elem =>{
            //Push data to database with current date
            // dateRef.child(elem.data.base).child(elem.data.date).set(elem.data.rates);
          // })
          
        // });
      // }
    // })

  }

  handleBaseSelect = (event) => {
    //Change this.state.baseCurrency to value of dropdown box
    this.setState({
      baseCurrency: event.target.value
    })
    //Pull rates from database and store in this.state.dashboardRates
    const currRef = firebase.database().ref(`/${event.target.value}`);
    currRef.once('value').then(snapshot => {
      //Update this.state.dashboardRate with rates from database
      this.setState({
           dashboardRates: snapshot.val()
         })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>CurrencyPal</h1>
        </header>
        <main>
          <section className="App_dashboard">

          <DashBoardBase symbol={this.state.baseCurrency} />
          <DashBoardSelect handleBaseSelect={this.handleBaseSelect} />

          </section>

        </main>

        
      </div>
    );
  }
}

export default App;
