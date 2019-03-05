import React from 'react';
import { endpoint, baseURL } from '@config';
import { Row, Col } from 'react-bootstrap';

class View extends React.Component{
    componentDidMount() {
    }
    render(){
        return(
            <div className="container mt-4">
                <h2 className="alert alert-warning">API Documentation - Developed By Team Brainiacs</h2>

                <Row>
                    <Col md={12} className="mb-4">
                        <div>
                            <h4 className="alert alert-danger"><code>{baseURL + "/event/sms"}</code></h4>
                            <p><strong>Request Type: </strong>POST</p>
                            <p><strong>Request Body: </strong>You have to send following JSON format</p>
                            <pre className="code alert alert-info"><code>{"{"}<br />
                                &nbsp;&nbsp;"lat": "12.02",<br />
                                &nbsp;&nbsp;"long": "-111.0",<br />
                                &nbsp;&nbsp;"phone": "8801752294542",<br />
                                &nbsp;&nbsp;"text": "hello"<br />
                                {"}"}<br />
                            </code></pre>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div>
                            <h4 className="alert alert-danger"><code>{baseURL + "/user/register"}</code></h4>
                            <p><strong>Request Type: </strong>POST</p>
                            <p><strong>Request Body: </strong>You have to send following JSON format</p>
                            <pre className="code alert alert-info"><code>{"{"}<br />
                                &nbsp;&nbsp;"firstname": "Shahan",<br />
                                &nbsp;&nbsp;"lastname": "Chy",<br />
                                &nbsp;&nbsp;"email": "info@mail.com",<br />
                                &nbsp;&nbsp;"username": "info"<br />
                                &nbsp;&nbsp;"password": "123456"<br />
                                &nbsp;&nbsp;"role": "reporter" (optional)<br />
                                {"}"}<br />
                            </code></pre>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div>
                            <h4 className="alert alert-danger"><code>{baseURL + "/user/login"}</code></h4>
                            <p><strong>Request Type: </strong>POST</p>
                            <p><strong>Request Body: </strong>You have to send following JSON format</p>
                            <pre className="code alert alert-info"><code>{"{"}<br />
                                &nbsp;&nbsp;"username": "info"<br />
                                &nbsp;&nbsp;"password": "123456"<br />
                                {"}"}<br />
                            </code></pre>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export const ApiDoc = View;