import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import classes from './App.css';


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <MuiThemeProvider>
          <RaisedButton label="Default" /> 
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
