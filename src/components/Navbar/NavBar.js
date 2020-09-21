import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../scss/2-modules/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import CartComponent from '../Cart/CartComponent'
import Search from '../Navbar/search'

class Navbar extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="navbarContainer">
                <Row noGutters>
                    <Col xs={6} md={6} lg="6">
                        <div className="navLeftContainer">
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg="6">
                        <div className="navRightContainer">
                            <Search />
                            <CartComponent />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Navbar;