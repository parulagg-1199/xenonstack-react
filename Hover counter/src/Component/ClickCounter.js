import React, { Component } from 'react';
import withCount from './withCount';
import './App.css';

class ClickCounter extends Component{

    render(){
        const {count, incrementCount} = this.props
        return(  
        <button onClick={incrementCount}>
            Clicked {count} times
            </button>
        )    
    }
}

export default withCount(ClickCounter);