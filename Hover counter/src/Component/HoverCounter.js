import React, { Component } from 'react';
import withCount from './withCount';
import reactDom from 'react-dom';

class HoverCounter extends Component{

    render(){
        const {count, incrementCount} = this.props
        return(
            <div>
                <h2 onMouseOver={incrementCount} >Hovered {count} times</h2>
            </div>
        )
    }
}

export default withCount(HoverCounter);