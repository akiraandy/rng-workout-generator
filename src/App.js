import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classes from './App.css';
import MuscleList from './containers/muscle_list/muscleList';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <MuiThemeProvider> 
          <MuscleList />
        </MuiThemeProvider>
      </div>
    );
  }
}


export default App;
