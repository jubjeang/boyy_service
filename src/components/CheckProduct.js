import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './CheckProduct.css';
import Table from 'react-bootstrap/Table'

const data =[
    {code:"BOYYSRL",name:"BOYYSRL",inventory:0},
    {code:"CK",name:"คลังเช่าพื้นที่เก็บข้างนอก เก็บหนังที่ไม่ใช้แล้ว",inventory:0},
    {code:"DAMAGE",name:"Damage",inventory:0},
    {code:"DEFECTED",name:"Defected",inventory:0},
    {code:"ECOM",name:"ECOM",inventory:0},
    {code:"ECOM-PEN",name:"ECOM Pending",inventory:0},
    {code:"IN-TRANSIT",name:"In-Transit",inventory:0},
    {code:"MATERIAL",name:"Material",inventory:0},
    {code:"MATERIAL-D",name:"MATERIAL-Design",inventory:0}
]
const CheckProduct = ()=>{
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
export default CheckProduct;