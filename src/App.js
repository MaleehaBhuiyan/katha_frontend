import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
// import WelcomeContainer from  './Containers/WelcomeContainer.js'
import HomePageContainer from  './Containers/HomePageContainer.js'
import Navbar from './Components/Navbar'

const URL = "http://localhost:3000/cards"

class App extends React.Component{

  state = {
    cards: []
  }

  fetchCards = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({cards:data}))
  }

  componentDidMount(){
    this.fetchCards()
  }

  render(){
    return(
      <>
        <Navbar />
          <Switch>
            <Route path="/home" render={() => <HomePageContainer cards={this.state.cards} />} />
        </Switch>
      </>
    )
  }
}

export default App;
