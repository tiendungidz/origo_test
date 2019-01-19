import React, { Component } from 'react';
import './App.css';

import DefaultHeader from './headers/DefaultHeader';
import StationOverview from './pages/StationOverview';
import DefaultFooter from './footers/DefaultFooter';
import NewPage from './newpage/NewPage';


class App extends Component {
  render() {
    return(
      <div className="PageWrapper">
        <DefaultHeader/>
        <NewPage/>
        <StationOverview/>
        <DefaultFooter/>
      </div>
    )
  }

  componentDidMount() {
  this.hidePage();
  }

  hidePage(){
  
  }
}

export default App;