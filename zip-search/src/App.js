import React, { Component } from 'react';
import './App.css';
import CitySearch from './Components/CitySearch';
import ZipSearch from './Components/ZipSearch'

/*
function City(props) {
  return (<div>This is the City component</div>);
}

function ZipSearchField(props) {
  return (<div>This is the ZipSearchField component</div>);
}

*/

class App extends Component {
  handleClick () {
    return <CitySearch/>
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <ZipSearch/>
        <br/>
        <CitySearch/>
        <br/>
      </div>
    );
  }
}

export default App;
