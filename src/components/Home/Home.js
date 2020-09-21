import React, { Component } from 'react'
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import BaseLayout from '../Base/Base';
import { Card, CardBody, CardFooter } from '../Card/Card';
import '../../scss/3-layout/homepage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign, faSort, faFilter } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider'
import { isMobile, isBrowser } from 'react-device-detect';
import "regenerator-runtime/runtime";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            finalData: [],
            show: false,
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

    highToLow(e) {
        let newsort = this.state.finalData.sort((a, b) => b.price.actual - a.price.actual)
        this.setState({
            finalData: newsort
        })
    }

    lowToHigh(e) {
        let newsort = this.state.finalData.sort((a, b) => a.price.actual - b.price.actual)
        this.setState({
            finalData: newsort
        })
    }

    discount(e) {
        let newsort = this.state.finalData.sort((a, b) => a.discount - b.discount)
        this.setState({
            finalData: newsort
        })
    }

    onFilterChange(e) {
        this.setState({
            value: e.target.value,
        })
    }

    onModalHandle(data) {
        this.setState({
            show: data
        })
    }


    render() {

        let getData = this.state.finalData;

        var showData = [];

        if (getData && getData.length) {
            showData = getData.map(data => (
                <div key={data.id} className="cardWrapper">
                    <Card>
                        <CardBody>
                            <img src={data.image} alt="" />
                        </CardBody>
                        <CardFooter>
                            <h1 className="cardTitle">{data.name}</h1>
                            <div className="priceWrapper">
                                <p><FontAwesomeIcon icon={faRupeeSign} /> {data.price.actual} <span className="actual_price">{data.price.display}</span> <span className="discount">{data.discount}% off</span></p>
                            </div>
                            <div className="cartButton">
                                <a href={'/cart'}>Add to Cart</a>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            )
            )
        }

        return (
            <BaseLayout>
                <Row noGutters>
                    <Col lg="3">
                        <div className="sidebarContainer">
                            {isBrowser &&
                                <>
                                    <h2 className="second_heading">Filters</h2>
                                    <RangeSlider
                                        value={this.value}
                                        onChange={changeEvent => this.onFilterChange(changeEvent)}
                                    />
                                    <p>Price</p>
                                </>
                            }
                            {isMobile &&
                                <div className="mobTopFilter">
                                    <span><FontAwesomeIcon icon={faSort} onClick={() => this.onModalHandle(true)} /> Sort</span>
                                    <span><FontAwesomeIcon icon={faFilter} /> Filter</span>
                                </div>
                            }
                        </div>
                    </Col>
                    <Col lg="9">
                        <div className="filtersContainer">
                            {isBrowser &&
                                <ul className="filter">
                                    <li><a href="#"><b>Sort By</b></a></li>
                                    <li onClick={(e) => this.highToLow(e)}>Price--High Low</li>
                                    <li onClick={(e) => this.lowToHigh(e)}>Price--Low High</li>
                                    <li onClick={(e) => this.discount(e)}>Discount</li>
                                </ul>
                            }

                        </div>
                        <div className="contentContainer">
                            {showData}
                        </div>
                    </Col>
                </Row>


                
                    <Modal className="modalWrapper" centered show={this.state.show} onHide={() => this.onModalHandle(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sort Option</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <div>
                                    <input type="radio" name="sortdata" id="radio1" /> &nbsp;
                                <label for="radio1" onClick={(e) => this.highToLow(e)}> Price --High Low</label>
                                </div>
                                <div>
                                    <input type="radio" name="sortdata" id="radio2" /> &nbsp;
                                <label for="radio2" onClick={(e) => this.lowToHigh(e)}> Price --Low High</label>
                                </div>
                                <div>
                                    <input type="radio" name="sortdata" id="radio3" /> &nbsp;
                                <label for="radio3" onClick={(e) => this.discount(e)}>Discount</label>
                                </div>
                            </Form>
                            <div className="custom_footer">
                                <span onClick={() => this.onModalHandle(false)}>Cancel</span>
                                <span onClick={() => this.onModalHandle(false)}>Apply</span>
                            </div>
                        </Modal.Body>
                    </Modal>
               

            </BaseLayout>
        )
    }
}


export default Home;