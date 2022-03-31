import React from 'react';
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './MainServices.css';
import './CommonCss.css';
import { Switch,Route,Link} from 'react-router-dom';
import CheckStockAvaliable from './CheckStockAvaliable';
import CheckProduct from './CheckProduct';
import ServiceOrder from './ServiceOrder';
import CreateServiceOrder from './CreateServiceOrder';

// const MainComponent = ()=>{
//     return(
//         <div>
//             <Container fluid>
                
//             </Container>
//         </div>
//     );
// }
const MainServices = ()=>{ 
    return ( 
        <div style={{ margin : 0, padding : 0 }} >
                        <Switch>
                                <Route path="/MainServices" exact>
                                    <Container fluid id="divTitle">
                                        <Row>
                                            <Col xs={12} lg={12} xl={12} md={12} sm={12} xxl={12} className="gfh-logo">
                                                {/* <a href="https://boyy.com/">
                                                    <img 
                                                    src="https://boyy-b2b-ss22.herokuapp.com/assets/logo-d96f23139d13c0c38b5b1d7d5f873cca65f5c22b030921fc64b27cdeac09955e.svg" 
                                                    alt="Boyy Logo"  
                                                    />
                                                </a> */}
                                                <div className='TextLogo' style={{ marginTop : 0, paddingTop : "5%"}}>
                                                    <p>B O Y Y</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} lg={6} xl={6} md={6} sm={6} xxl={6} className="ColTwiceTitle">
                                                <Card className="Card">
                                                    <Card.Body>
                                                        <Link className="twiceTitle" to="/MainServices/CheckStockAvaliable">Check Stock Avaliable</Link>
                                                    </Card.Body>
                                                </Card>                       
                                            </Col>
                                            <Col xs={6} lg={6} xl={6} md={6} sm={6} xxl={6} className="ColTwiceTitle">
                                                <Card className="Card">
                                                    <Card.Body>
                                                        <Link className="twiceTitle" to="/MainServices/CheckProduct">Service Order</Link>
                                                    </Card.Body>
                                                </Card> 
                                            </Col>
                                        </Row> 
                                    </Container>
                                </Route>
                                <Route path="/MainServices/CheckStockAvaliable" component={CheckStockAvaliable} />
                                <Route path="/MainServices/CheckProduct" component={CheckProduct} />
                                <Route path="/MainServices/ServiceOrder" component={ServiceOrder} />                                
                                <Route path="/MainServices/CreateServiceOrder/MainComponent" component={CreateServiceOrder} />                                
                                {/* <Route exact path="/Main/" /> */}
                        </Switch>                      


        </div>       
    );
}
export default MainServices;