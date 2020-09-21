import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import BaseLayout from '../Base/Base';
import '../../scss/3-layout/cart.scss';
import { isMobile, isBrowser } from 'react-device-detect';
import "regenerator-runtime/runtime";


class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: 0,
            finalData: []
        }
    }

    onItemAddHandler() {
        let prevState = this.state.item;
        this.setState({
            item: prevState + 1
        })
    }

    onItemSubHandler() {
        let prevState = this.state.item;
        if (prevState <= 0) {
            this.setState({
                item: 0
            })
        } else {
            this.setState({
                item: prevState - 1
            })
        }

    }

    async componentDidMount() {
        const url = 'https://my-json-server.typicode.com/prograk/demo/items';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            finalData: data,
        })
    }


    render() {
        return (
            <BaseLayout>
                <Row noGutters>
                    <Col lg={9}>
                        <div className="cartContainer">
                            <div className="cartCard">
                                {isBrowser && 
                                <Row>
                                    <Col sm={2} lg={2}>
                                        <img src="https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90" alt="" />
                                    </Col>
                                    <Col sm={4} lg={4}>
                                        <div className="cartDetails">
                                            <p>Samsung Series 4</p>
                                            <p> 13999 <span className="actual_price"> 22500</span> <span className="discount">34% off</span></p>
                                        </div>
                                    </Col>
                                    <Col sm={4} lg={4}>
                                        <div className="addButton">
                                            <ul>
                                                <li onClick={() => this.onItemSubHandler()}>-</li>
                                                <li>
                                                    <Form>
                                                        <Form.Control type="text" placeholder="0" value={this.state.item} readOnly />
                                                    </Form>
                                                </li>
                                                <li onClick={() => this.onItemAddHandler()} >+</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col sm={2} lg={2}>
                                        <p className="removeButton">Remove</p>
                                    </Col>
                                </Row>
                                }

                                {isMobile &&
                                <>
                                <div className="mobViewWrapper">
                                <Row>
                                    <Col xs={5} lg={3}>
                                        <img src="https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90" alt="" />
                                    </Col>
                                    <Col xs={7}  lg={7}>
                                        <div className="cartDetails">
                                            <p>Samsung Series 4</p>
                                            <p> 13999 <span className="actual_price"> 22500</span> <span className="discount">34% off</span></p>
                                        </div>
                                        <div className="addButton">
                                            <ul>
                                                <li onClick={() => this.onItemSubHandler()}>-</li>
                                                <li>
                                                    <Form>
                                                        <Form.Control type="text" placeholder="0" value={this.state.item} readOnly />
                                                    </Form>
                                                </li>
                                                <li onClick={() => this.onItemAddHandler()} >+</li>
                                            </ul>
                                        </div>
                                        <p className="removeButton">Remove</p>
                                    </Col>
                                    
                                </Row>
                                </div>

                                <div className="mobViewWrapper">
                                <Row>
                                    <Col xs={5} lg={3}>
                                        <img src="https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90" alt="" />
                                    </Col>
                                    <Col xs={7}  lg={7}>
                                        <div className="cartDetails">
                                            <p>Samsung Series 4</p>
                                            <p> 13999 <span className="actual_price"> 22500</span> <span className="discount">34% off</span></p>
                                        </div>
                                        <div className="addButton">
                                            <ul>
                                                <li onClick={() => this.onItemSubHandler()}>-</li>
                                                <li>
                                                    <Form>
                                                        <Form.Control type="text" placeholder="0" value={this.state.item} readOnly />
                                                    </Form>
                                                </li>
                                                <li onClick={() => this.onItemAddHandler()} >+</li>
                                            </ul>
                                        </div>
                                        <p className="removeButton">Remove</p>
                                    </Col>
                                    
                                </Row>
                                </div>


                                </>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="priceBox">
                            <h2>Price Details</h2>
                            <div className="priceBoxBody">
                                <p>Price (1 item) : </p>
                                <p>Discount : </p>
                            </div>
                            <h3>Total Payable </h3>
                        </div>
                    </Col>
                </Row>
            </BaseLayout>
        )
    }
}


export default Cart;