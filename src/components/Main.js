import React from 'react';
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './Main.css';
import ServiceOrder from './ServiceOrder';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import CreateServiceOrder from './CreateServiceOrder';
const Main = ()=>{
    return (
        <div style={{ margin : 0, padding : 0 }} >
            <Container fluid>
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
                                <Link to="/Main">Check Product</Link>
                            </li>
                            <li>                                
                                <Link to="/ServiceOrder">Service Order</Link>  
                            </li>
                            <li>
                                <Link to="/CreateServiceOrder">Create Service Order</Link>
                            </li>
                            <li>
                                <Link to="/Main">Check Stock Avaliable</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={10}>
                        <Router>
                            <Switch>
                                <Route path="/Main">                
                                    {/* <Main />  */}
                                </Route>
                                <Route path="/ServiceOrder">                
                                    <ServiceOrder />
                                </Route>
                                <Route path="/CreateServiceOrder">                
                                    <CreateServiceOrder />
                                </Route>                                
                                <Route path="/" exact>
                                    <ServiceOrder />
                                </Route>              
                            </Switch> 
                        </Router>
                    </Col>
                </Row>
                <Row style={{paddingTop:'90px'}}>
                    <Col sm={12}  style={{ textAlign: "center",fontSize:"12px" }}>
                        <p className="copy-text-footer">BOYY &copy; 2021</p>
                    </Col>
                </Row>
            </Container> 
        </div>       
    );
}
export default Main;