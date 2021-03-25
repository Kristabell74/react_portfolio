import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return (
        <div style={{ backgroundColor: 'lightBlue' }}>
            <footer class="mt-5" >

                <Container fluid={true}>
                    <Row class="border-top justify-content-between p-3">
                        <Col class="p-0" md={3} sm={12}>
                            Thank you for looking!!!
                    </Col>
                        <Col class="p-0 d-flex justify-content-end" md={3}>
                            Email: Bell77iam@gmail.com
                    </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );

}

export default Footer;