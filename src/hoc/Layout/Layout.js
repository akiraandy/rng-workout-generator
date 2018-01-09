import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aux from '../Aux/Aux';
import classes from './Layout.css';


class Layout extends Component {

    render() {
        return(
            <Aux>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default connect(mapStateToProps)(Layout);