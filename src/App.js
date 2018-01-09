import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Default" /> 
      </MuiThemeProvider>
    );
  }
}

export default App;
