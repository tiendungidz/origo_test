import React, { Component } from 'react';
import './App.css';

import DefaultHeader from './headers/DefaultHeader';
import StationOverview from './pages/StationOverview';
import DefaultFooter from './footers/DefaultFooter';


class App extends Component {
  render() {
    return(
      <div className="PageWrapper">
        <DefaultHeader/>
        <StationOverview/>
        <DefaultFooter/>
      </div>
    )
  }
}

export default App;