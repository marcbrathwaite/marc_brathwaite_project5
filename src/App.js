import React, { Component } from 'react';
import currencies from './currencies';
import axios from 'axios';
import firebase from './firebase';
import DashBoardBase from './DashBoardBase';
import DashBoardSelect from './DashBoardSelect';
import DashBoard from './DashBoard';
import ConversionForm from './ConversionForm';
import Results from './Results';
import './App.css';

//This is the reference to the root of the database
const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      baseCurrency: 'CAD',
      dashboardRates: {},
      amountInput: '1',
      fromChoice: 'CAD',
      toChoice: 'USD',
      conversionRates: {},
      selectedRate: 0
    }
  }
  //Function to create array of promises for all of the available currencies
  createAPIPromises = (curr) => {
    return curr.map(elem => {
      return (
        axios.get('https://api.exchangeratesapi.io/latest', {
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
    axios.all(this.createAPIPromises(Object.keys(currencies)))
      .then(res => {
        res.forEach(elem => {
          //Push data to database with current date
          dbRef.child(elem.data.base).child('Base').set(elem.data.base)
          dbRef.child(elem.data.base).child('Date').set(elem.data.date);
          dbRef.child(elem.data.base).child('Rates').set(elem.data.rates);
        })
        //Add Euro equal to 1 in database for euro object - API does not provide
        dbRef.child('EUR').child('Rates').child('EUR').set(1);
      })

    // const cadRef = firebase.database().ref('/CAD');
    const cadRef = firebase.database().ref(`/${this.state.baseCurrency}`);
    cadRef.once('value').then(snapshot => {

      //Update this.state.dashboardRate with rates With base as CAD
      this.setState({
        // baseCurrency: 'CAD',
        dashboardRates: snapshot.val(),
        conversionRates: snapshot.val(),
      }, function () {
        this.setState({
          selectedRate: this.state.conversionRates.Rates[this.state.toChoice]
        })
      })
    });
  }

  //Executes when user selects a base currency
  handleBaseSelect = (event) => {

    // Change this.state.baseCurrency to value of dropdown box
    this.setState({
      baseCurrency: event.target.value
    }, function () {
      //Pull rates from database and store in this.state.dashboardRates
      const currRef = firebase.database().ref(`/${this.state.baseCurrency}`);
      currRef.once('value').then(snapshot => {
        //Update this.state.dashboardRate with rates from database
        this.setState({
          dashboardRates: snapshot.val()
        })
      });
    });
  }

  //Executes when user made changes in From dropdown box in conversion form
  handleConversionFromSelect = (event) => {
    this.setState({
      fromChoice: event.target.value
    }, function () {
      //Query firebase and get rates corresponsing to from choice. Then set this.state.conversion rates to that object.
      const fromRef = firebase.database().ref(`/${this.state.fromChoice}`);
      fromRef.once('value').then(snapshot => {
        this.setState({
          conversionRates: snapshot.val()
        }, function () {
          this.setState({
            selectedRate: this.state.conversionRates.Rates[this.state.toChoice]
          })
        })
      });
    })
  }

  //Executes when user made changes in To dropdown box in conversion form
  handleConversionToSelect = (event) => {
    this.setState({
      toChoice: event.target.value
    }, function () {
      this.setState({
        selectedRate: this.state.conversionRates.Rates[this.state.toChoice]
      })
    })
  }

  //Executes when user made changes in input field in conversion form
  handleConversionInput = (event) => {
    //Only valid numbers will be added to state
    if (/^([0-9]+)([.]{0,1})([0-9]*)$|^()$/g.test(event.target.value)) {
      this.setState({
        amountInput: event.target.value
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1>Currency Converter</h1>
        </header>
        <main className="App__main">
          <section className="App__dashboard wrapper">
            <div className="App__dashboardSelectContainer">
              <h2 className="App__dashboardHeading">Dashboard</h2>
                <div className="App__dashboardBaseContainer">
                <DashBoardBase symbol={this.state.baseCurrency} />
                <DashBoardSelect handleBaseSelect={this.handleBaseSelect} baseCurrency={this.state.baseCurrency} /> 
                </div>
          </div>
          <div className="App__dashboardDisplayContainer">
            <p className="App__dashboardDisplayText">1 {this.state.baseCurrency} = </p>
            <DashBoard dashboardRates={this.state.dashboardRates} />
          </div>
          </section>
          <section className="App__conversion wrapper">
            <h2 className="App__conversionHeading">Converter</h2>
            <div className="App__conversionFormResults">
              <ConversionForm handleConversionFromSelect={this.handleConversionFromSelect} handleConversionToSelect={
              this.handleConversionToSelect} handleConversionInput={this.handleConversionInput} handleConversionForm={this.handleConversionForm} amountInput={this.state.amountInput} fromChoice={this.state.fromChoice} toChoice={this.state.toChoice} /> 
              <Results amountInput={this.state.amountInput} fromChoice={this.state.fromChoice} toChoice={this.state.toChoice} selectedRate={this.state.selectedRate} />
          </div>
          </section>
        </main>
        <footer className="App__footer">
          <p className="App__footerText">Copyright &copy; 2018 <a href="http://www.brathworks.com/" target="_blank">Brathworks</a> | Powered by the <a href="https://exchangeratesapi.io/" target="_blank">Exchange rates API</a> and Firebase
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
