import React, { Component } from 'react';
import '../../scss/2-modules/card.scss';

export class Card extends Component {
    render() {
        return (
            <div className="cardContainer">
                { this.props.children}
            </div>
        )
    }
}

export class CardBody extends Component {
    render() {
        return (
            <div className="cardBody">
                {this.props.children}
            </div>
        )
    }
}


export class CardFooter extends Component{
    render(){
        return(
            <div className="cardFooter">
                {this.props.children}
            </div>
        )
    }
}