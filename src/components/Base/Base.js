import React, { Component } from 'react';
import '../../scss/2-modules/base_layout.scss';

class BaseLayout extends Component{
    render(){
        return(
            <div className="baseLayout">
                {this.props.children}
            </div>
        )
    }
} 


export default BaseLayout;