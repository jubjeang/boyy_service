import React from 'react';
import { Container } from "reactstrap";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './MainServices.css';
import './CommonCss.css';
import { Switch,Route,Link,useHistory} from 'react-router-dom';
import CheckStockAvaliable from './CheckStockAvaliable';
import CheckProduct from './CheckProduct';
import ServiceOrder from './ServiceOrder';
import CreateServiceOrder from './CreateServiceOrder';
import CreateAccount from './CreateAccount';
import CustomerInfo from './CustomerInfo';
import SidebarNav from './SidebarNav';

const MainServices = ()=>{ 
    let history = useHistory();
    const handleLogout =()=> {
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('admin');
    sessionStorage.clear();
    history.push("/login");
    
    }


    return ( 
        <div style={{ margin : 0, padding : 0 }} >
                        <Switch>
                                <Route path="/MainServices" exact>
                                    <Container fluid id="divTitle">
                                        <Row>
                                            <Col xs={12} lg={12} xl={12} md={12} sm={12} xxl={12} className="gfh-logo">
                                                <div className='TextLogo' style={{ marginTop : 0, paddingTop : "5%"}}>
                                                    <p>B O Y Y</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={7} lg={7} xl={7} md={7} sm={7} xxl={7} >                                                
                                            </Col>
                                            <Col xs={5} lg={5} xl={5} md={5} sm={5} xxl={5} >
                                                <SidebarNav />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} lg={6} xl={6} md={6} sm={6} xxl={6} className="ColTwiceTitle">
                                                <div className="Card">
                                                    <Card.Body>
                                                        <Link className="twiceTitle" to="/MainServices/CheckStockAvaliable">Check Stock Avaliable</Link>
                                                    </Card.Body>
                                                </div>                       
                                            </Col>
                                            <Col xs={6} lg={6} xl={6} md={6} sm={6} xxl={6} className="ColTwiceTitle">
                                                <div className="Card">
                                                    <Card.Body>
                                                        <Link className="twiceTitle" to="/MainServices/CheckProduct">Service Order</Link>
                                                    </Card.Body>
                                                </div> 
                                            </Col>
                                        </Row>                                       
                                    </Container>
                                </Route>
                                <Route path="/MainServices/CheckStockAvaliable" component={CheckStockAvaliable} />
                                <Route path="/MainServices/Register" component={CreateAccount} />
                                <Route path="/MainServices/CheckProduct" component={CheckProduct} />
                                <Route path="/MainServices/ServiceOrder" component={ServiceOrder} />  
                                <Route path="/MainServices/ChangePass" component={CustomerInfo} />                              
                                <Route path="/MainServices/CreateServiceOrder/MainComponent" component={CreateServiceOrder} />                                
                                {/* <Route exact path="/Main/" /> */}
                        </Switch>
        </div>       
    );
}
export default MainServices;