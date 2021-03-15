import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return (
        <Jumbotron class="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row class="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 class="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h3 class="display-4 font-weight-light">{props.subTitle}</h3>}
                        {props.text && <h3 class="lead font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}


export default Hero;