import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Container, Row, Col, Form, Card, Image, } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { endpoint } from '@config';
import axios from 'axios';
import { SendSMS } from '../../container/actions';

class View extends React.Component {
    state = {
        lat: 'Please wait',
        long: 'Please Wait'
    }

    componentDidMount() {
        this.getLocation();
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHander = (e) => {
        e.preventDefault();
        this.props.SendSMS(this.state).then((res) => {
            console.log(res)
        })
    }

    getLocation = ()  => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude, position.coords.longitude)
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                })
            });
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    render() {
        return (
            <div id="formContent" className="m">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <Col md={4}>

                            <Card bg="light" >
                                <div className="my-4 text-center text-primary">
                                    <h3>LOGO</h3>
                                </div>
                                <Card.Body>
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Form.Label>Latitude</Form.Label>
                                                    <Form.Control type="text" name="lat" placeholder="Latitude" 
                                                        onChange={this.onChangeHandler}
                                                        value={this.state.lat}
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Form.Label>Longitude</Form.Label>
                                                    <Form.Control type="text" name="long" placeholder="Longitude" 
                                                        onChange={this.onChangeHandler}
                                                        value={this.state.long}
                                                        disabled
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="text" name="phone" placeholder="Phone Number"
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Form.Label>Text Message</Form.Label>
                                                    <Form.Control 
                                                        as="textarea" 
                                                        type="text"
                                                        name="text"       
                                                        placeholder="Text Message"
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Button variant="primary" block
                                            onClick={this.onSubmitHander}
                                        >
                                            Send
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    SendSMS: (payload) => dispatch(SendSMS(payload))
})

export const AccidentInfo = connect(mapStateToProps, mapDispatchToProps)(View);