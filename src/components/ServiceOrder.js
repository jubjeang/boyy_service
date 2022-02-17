import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './ServiceOrder.css';

const ServiceOrder = ()=>{
    return (
        <div id="Service_Order" style={{ margin : 0, padding : 0 }} >
            <Container fluid>
                <Row className="rowForm">
                    <Col sm={12}>
                        <div className="MenuTitle">Service Order</div>
                    </Col>
                </Row>
                <Row>                                    
                    <Col sm={12} style={{marginLeft:'0',marginTop:'0'}}>                                        
                        <img src={process.env.PUBLIC_URL + '/images/service_order.jpeg'} 
                        alt="Service Order" alig="left"
                        style={{width: '100%', height: '100%',float:'left'}}
                        />
                    </Col>                                    
                </Row>
            </Container>
        </div>       
    );
}
export default ServiceOrder;