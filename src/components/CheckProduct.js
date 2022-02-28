import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row} from "react-bootstrap";
import './CheckProduct.css';
import { Switch,Route,Link} from 'react-router-dom';
import ServiceOrder from './ServiceOrder';
import CreateServiceOrder from './CreateServiceOrder';
import CheckStockAvaliable from './CheckStockAvaliable';
import './CommonCss.css';


const MainComponent = ()=>{
    return (<div id="CheckStockAvaliable" style={{ margin : 0, padding : 0 }} >
                    <Container fluid>                
                        <Row className="rowForm">
                                <Col sm={12}>
                                    <div className="MenuTitle">CHECK PRODUCT</div>
                                </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">                                        
                                <label htmlFor="name" className="required">General</label>                                            
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">                       
                            </Col>                                    
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">                                        
                                <label htmlFor="No" className="required">No</label>                                            
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="No" id="No" className="required" placeholder="Full name"
                                        defaultValue="" />
                                </div>
                            </Col>                                    
                        </Row>
                        <Row  className="rowForm" >
                            <Col sm={4} className="ColItem ColItemleft">
                                <label htmlFor="Description" className="required">Description</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright ">
                                    <div className="form-group">                                            
                                        <input type="text" name="Description" id="Description" className="required" placeholder="DESCRIPTION"
                                        defaultValue="" />
                                    </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                                <label htmlFor="ItemNo" className="required">Item No</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                    <div className="form-group">
                                        <input type="text" name="ItemNo" id="ItemNo" className="required" placeholder="Item No"
                                        defaultValue=""
                                        />
                                    </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                                <label htmlFor="WarrantyStartingDateParts" className="required">Warranty Starting Date(Part<span className="text-lowercase">s</span>)</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="WarrantyStartingDateParts" id="WarrantyStartingDateParts" className="required" placeholder="Warranty Starting Date Parts"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row  className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                                <label htmlFor="WarrantyEndingDateParts" className="required">Warranty Ending Date(Part<span className="text-lowercase">s</span>)</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="WarrantyEndingDateParts" id="WarrantyEndingDateParts" className="required" placeholder="Warranty Ending Date Parts"
                                        defaultValue="" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                                <label htmlFor="Warranty" className="required">Warranty % (Part<span className="text-lowercase">s</span>)</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="Warranty" id="Warranty" className="required" placeholder="Warranty"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row> 
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                                <label htmlFor="WarrantyStartingDateLabor" className="required">Warranty Starting Date (Labor)</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">  
                                    <input type="text" name="WarrantyStartingDateLabor" id="WarrantyStartingDateLabor" className="required" placeholder="Warranty Starting Date(Labor)"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>                                
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="WarrantyEndingDateLabor" className="required">Quantity</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="Quantity" id="WarrantyEndingDateLabor" className="required" placeholder="Warranty Ending Date (Labor)"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="" className="required">Customer</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="CustomerNo" className="required">Customer No</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CustomerNo" id="CustomerNo" className="required" placeholder="Customer No"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>                                
                        <Row className="rowForm" >
                            <Col sm={4} className="ColItem ColItemleft">
                                <label htmlFor="" className="required">Sell-to</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                            
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="Name" className="required">Name</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">
                                    <input type="text" name="Name" id="Name" className="required" placeholder="Name"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="Address" className="required">Address</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">
                                    <input type="text" name="Address" id="Address" className="required" placeholder="Address"
                                        defaultValue="" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="PhoneNo" className="required">Phone No</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="PhoneNo" id="PhoneNo" className="required" placeholder="Phone No"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="LocationServiceItem" className="required">Location of Service Item</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="LocationServiceItem" id="LocationServiceItem" className="required" placeholder="Location of Service Item"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="" className="required">End Customer</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerNo" className="required">End Customer No</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerNo" id="EndCustomerNo" className="required" placeholder="End Customer No"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerName" className="required">End Customer Name</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerName" id="EndCustomerName" className="required" placeholder="End Customer Name"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerName" className="required">End Customer Name</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerName" id="EndCustomerName" className="required" placeholder="End Custome rName"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerAddress" className="required">End Customer Address</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerAddress" id="EndCustomerAddress" className="required" placeholder="End Customer Address"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerAddress2" className="required">EndCustomerNo</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerAddress2" id="EndCustomerAddress2" className="required" placeholder="End Custome rAddress2"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerCountry" className="required">End Customer Country/Region Code</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerCountry" id="EndCustomerCountry" className="required" placeholder="End Customer Country/Region Code"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerCity" className="required">End Customer City</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerCity" id="EndCustomerCity" className="required" placeholder="End Customer City"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerPostCode" className="required">End Customer Post Code</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerPostCode" id="EndCustomerPostCode" className="required" placeholder="End Customer Post Code"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerContact" className="required">End Customer Contact</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerContact" id="EndCustomerContact" className="required" placeholder="End Customer Contact"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={4} className="ColItem ColItemleft">
                            <label htmlFor="EndCustomerPhoneNo" className="required">End Customer Phone No</label>
                            </Col>
                            <Col sm={4} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCustomerPhoneNo" id="EndCustomerPhoneNo" className="required" placeholder="End Customer Phone No"
                                        defaultValue=""
                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="ColItem ColItemleft">
                                
                            </Col>
                            <Col sm={8} className="ColItem ColItemright">
                                <div className="col-12 text-center horizontal-menu-serviceorder">                                            
                                    <ul>
                                        <li>                                                    
                                            <a href="#">Submit</a>                                   
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>            
                </div>
    );
}

const CheckProduct = ()=>{
        return (
            <div style={{ margin : 0, padding : 0 }} >
                <Container fluid id="divTitle">
                    <Row>
                        {/* <Col xs={12} lg={12} xl={12} md={12} sm={12} xxl={12} className="gfh-logo">
                            <div className='TextLogo' style={{ marginTop : 0, paddingTop : "5%"}}>

                                <p>
                                    <Link to="/MainServices">B O Y Y</Link>
                                    <p>B O Y Y</p>
                                </p>
                            </div>
                        </Col> */}
                        <Col xs={12} lg={12} xl={12} md={12} sm={12} xxl={12} className="gfh-logo">
                                                {/* <a href="https://boyy.com/">
                                                    <img 
                                                    src="https://boyy-b2b-ss22.herokuapp.com/assets/logo-d96f23139d13c0c38b5b1d7d5f873cca65f5c22b030921fc64b27cdeac09955e.svg" 
                                                    alt="Boyy Logo"  
                                                    />
                                                </a> */}
                                                <div style={{ marginTop : 0, paddingTop : "5%"}}>                                                    
                                                    <Link className="TextLogo" to="/MainServices">B O Y Y</Link>
                                                </div>
                        </Col>
                    </Row>
                    <Row className="RowMenu">
                        <Col sm={2} className="Menu">
                            <ul id="mainlist">
                                {/* <li>                                
                                    <Link to="/MainServices/CheckProduct">Check Product</Link>
                                </li>
                                <li>                                
                                    <Link to="/MainServices/ServiceOrder">Service Order</Link>  
                                </li>
                                <li>
                                    <Link to="/MainServices/CreateServiceOrder">Create Service Order</Link>
                                </li> */}
                                <li>
                                    <Link to="/MainServices/CheckStockAvaliable">Check Stock Avaliable</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={10}>
                            {/* <Router> */}
                                <Switch>
                                    <Route path="/MainServices/CheckStockAvaliable" component={CheckStockAvaliable}   />
                                    <Route path="/MainServices/ServiceOrder" component={ServiceOrder} /> 
                                    <Route path="/MainServices/CheckProduct" component={MainComponent} exact /> 
                                    <Route path="/MainServices/CreateServiceOrder" component={CreateServiceOrder} />   
                                    <Route path="/MainServices/CheckStockAvaliable" component={CheckStockAvaliable} />                             
                                    <Route path="/MainServices" component={CheckStockAvaliable} />
                                    {/* <Route exact path="/Main/" /> */}
                                </Switch> 
                            {/* </Router> */}
                        </Col>
                    </Row>
                </Container>
            </div>         
    );
}
export default CheckProduct;