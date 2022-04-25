import React from 'react';
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './Main.css';
import ServiceOrder from './ServiceOrder';
import { Switch,Route,Link} from 'react-router-dom';
import CreateServiceOrder from './CreateServiceOrder';
import CheckStockAvaliable from './CheckStockAvaliable';
import CheckProduct from './CheckProduct';
const MainComponent = ()=>{
    return(
        <div>
            <Container fluid>
                <Row style={{paddingTop: "3%"}}>
                    <Col sm={5} className="ColTwiceTitleLeft">
                        <Link className="twiceTitle" to="/Main/CheckProduct" 
                         >Check Product</Link>
                    </Col>
                    <Col sm={6} className="ColTwiceTitleRight">
                        <Link className="twiceTitle" to="/Main/CheckStockAvaliable">Check Stock Avaliable</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
const Main = ()=>{
    return ( 
        <div style={{ margin : 0, padding : 0 }} >
            <Container fluid id="divTitle">
                <Row>
                    <Col sm={12} className="gfh-logo">
                        <a href="https://boyy.com/">
                            <img 
                            src="https://boyy-b2b-ss22.herokuapp.com/assets/logo-d96f23139d13c0c38b5b1d7d5f873cca65f5c22b030921fc64b27cdeac09955e.svg" 
                            alt="Boyy Logo"  
                            />
                        </a>
                    </Col>
                </Row>
                <Row className="RowMenu">
                    <Col sm={2} className="Menu">
                        <ul id="mainlist">
                            <li>                                
                                <Link to="/Main/CheckProduct">Check Product</Link>
                            </li>
                            <li>                                
                                <Link to="/Main/ServiceOrder">Service Order</Link>  
                            </li>
                            <li>
                                <Link to="/Main/CreateServiceOrder">Create Service Order</Link>
                            </li>
                            <li>
                                <Link to="/Main/CheckStockAvaliable">Check Stock Avaliable</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={10}>
                        {/* <Router> */}
                            <Switch>
                                <Route path="/Main" component={MainComponent}  exact />
                                <Route path="/Main/ServiceOrder" component={ServiceOrder} /> 
                                <Route path="/Main/CheckProduct" component={CheckProduct} /> 
                                <Route path="/Main/CreateServiceOrder" component={CreateServiceOrder} />   
                                <Route path="/Main/CheckStockAvaliable" component={CheckStockAvaliable} />                             
                                {/* <Route exact path="/Main/" /> */}
                            </Switch> 
                        {/* </Router> */}
                    </Col>
                </Row>
            </Container>

        </div>       
    );
}
export default Main;