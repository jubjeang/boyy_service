import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row} from "react-bootstrap";
import { Switch,Route,Link} from 'react-router-dom';
import CreateServiceOrder from './CreateServiceOrder';
import CheckStockAvaliable from './CheckStockAvaliable';
import './CommonCss.css';
import './CheckProduct.css';


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
const ResultSearch = ()=>{
    return (   
                <Container fluid>
                    <Row className="rowForm">
                        <Col sm={12} className="ColItem ColItemleft">
                            <div   className="MainTitle">
                                SERVICE ITEM CARD
                            </div>                           
                        </Col>
                    </Row>
                    <Row className="rowForm">
                        <Col sm={12} className="ColItem ColItemleft">
                            <label className="required">General</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="No" className="required">No.</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="No" id="No" className="required" placeholder="No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="WarrantyStartingDate" className="required">Warranty Starting Date(Parts)</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyStartingDate" id="WarrantyStartingDate" className="required" placeholder="Warranty Starting Date"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="Description" className="required">Description</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Description" id="Description" className="required" placeholder="Description"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="WarrantyEndingDate" className="required">Warranty Ending Date(Parts)</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyEndingDate" id="WarrantyEndingDate" className="required" placeholder="Warranty Endting Date"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="ItemNo" className="required">Item No.</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="ItemNo" id="ItemNo" className="required" placeholder="Item No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="WarrantyStartingDateLabor" className="required">Warranty Starting Date(Labor)</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyStartingDateLabor" id="WarrantyStartingDateLabor" className="required" placeholder="Warranty Starting Date(Labor)" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="ItemDescription" className="required">Item Description</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="ItemDescription" id="ItemDescription" className="required" placeholder="Item Description"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="WarrantyEndingDateLabor" className="required">Warranty Ending Date(Labor)</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyEndingDateLabor" id="WarrantyEndingDateLabor" className="required" placeholder="Warranty Ending Date(Labor)" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="SerialNo" className="required">Serial No.</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="SerialNo" id="SerialNo" className="required" placeholder="Serial No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                        </Col>                                                               
                    </Row>                        

                    <Row className="rowForm">
                        <Col sm={12} className="ColItem ColItemleft">
                            <label className="required">Customer</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="CustomerNo" className="required">Customer No.</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CustomerNo" id="CustomerNo" className="required" placeholder="Customer No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="City" className="required">City</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="City" id="City" className="required" placeholder="City"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="CustomerName" className="required">Customer Name</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CustomerName" id="CustomerName" className="required" placeholder="Customer Name" 
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="County" className="required">County</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="County" id="County" className="required" placeholder="County"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="Address" className="required">Address</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Address" id="Address" className="required" placeholder="Address"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="PostCode" className="required">Post Code</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="PostCode" id="PostCode" className="required" placeholder="Post Code" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="Address2" className="required">Address 2</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Address2" id="Address2" className="required" placeholder="Address 2"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="Contact" className="required">Contact</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Contact" id="Contact" className="required" placeholder="Contact" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft"></Col>
                        <Col sm={3} className="ColItem ColItemright">                           
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="PhoneNo" className="required">Phone No.</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="PhoneNo" id="PhoneNo" className="required" placeholder="Phone No" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>

                    <Row className="rowForm">
                        <Col sm={12} className="ColItem ColItemleft">
                            <label className="required">End Customer</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="EndCusCustomerNo" className="required">End-Cus. Customer No.</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCustomerNo" id="EndCusCustomerNo" className="required" placeholder="End-Cus Customer No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="EndCusCity" className="required">End-Cus. City</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCity" id="EndCusCity" className="required" placeholder="End-Cus. City"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="EndCusCustomerName" className="required">End-Cus. Customer Name</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCustomerName" id="EndCusCustomerName" className="required" placeholder="End-Cus. Customer Name" 
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="EndCusCounty" className="required">End-Cus. County</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCounty" id="EndCusCounty" className="required" placeholder="End-Cus. County"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="EndCusAddress" className="required">End-Cus. Address</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusAddress" id="EndCusAddress" className="required" placeholder="End-Cus. Address"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="EndCusPostCode" className="required">End-Cus. Post Code</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusPostCode" id="EndCusPostCode" className="required" placeholder="End-Cus. Post Code" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="EndCusAddress2" className="required">End-Cus. Address 2</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusAddress2" id="EndCusAddress2" className="required" placeholder="End-Cus. Address 2"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="EndCusContact" className="required">End-Cus. Contact</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusContact" id="EndCusContact" className="required" placeholder="End-Cus. Contact" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ColItem ColItemleft"></Col>
                        <Col sm={3} className="ColItem ColItemright">                           
                        </Col>
                        <Col sm={2} className="ColItem ColItemleft">                                        
                            <label htmlFor="EndCusPhoneNo" className="required">End-Cus. Phone No.</label>                                            
                        </Col>
                        <Col sm={3} className="ColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusPhoneNo" id="EndCusPhoneNo" className="required" placeholder="End-Cus. Phone No." defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>                    
                </Container>
        );
}
const MainComponent = ()=>{
    return (
            <Container fluid>                
                        <Row style={{display: "flex", alignItems: "center"}}>
                            <Col sm={2} className="ColItem ColItemleft">                                        
                                <label htmlFor="name" className="required">SERIAL NO.</label>                                            
                            </Col>
                            <Col sm={5} className="ColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="ItemNo" id="ItemNo" className="required" placeholder="SERIAL NO"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="align-left ColSubmitSearch">                                        
                                    <div className="text-center" 
                                    style={{height: "45px"}} >                                             
                                            <ul>
                                                <li>   
                                                    <Link to="/MainServices/CheckProduct/ResultSearch">
                                                        Submit
                                                    </Link>                                   
                                                </li>
                                            </ul>
                                    </div>                                           
                            </Col>           
                        </Row>
            </Container>
            );
}
const CheckProduct = ()=>{
        return (
            <div style={{ margin : 0, padding : 0 }} >
                <Container fluid>
                    <Row>
                        <Col xs={12} lg={12} xl={12} md={12} sm={12} xxl={12} className="gfh-logo">
                                <div style={{ marginTop : 0, paddingTop : "5%"}}>                                                    
                                    <Link className="TextLogo" to="/MainServices">B O Y Y</Link>
                                </div>
                        </Col>
                    </Row>
                    <Row className="RowMenu">
                        <Col sm={2} className="Menu">
                            <ul id="mainlist">
                                <li>                                
                                    <Link to="/MainServices/CheckProduct">Check Product</Link>
                                </li>
                                <li>                                
                                    <Link to="/MainServices/ServiceOrder">Service Order</Link>  
                                </li>
                                
                                <li>
                                    <Link to="/MainServices/CreateServiceOrder">Create Service Order</Link>
                                </li>
                                {/* 
                                <li>
                                    <Link to="/MainServices/CheckStockAvaliable">Check Stock Avaliable</Link>
                                </li> 
                                */}
                            </ul>
                        </Col>
                        <Col sm={10}>
                            {/* <Router> */}
                                <Switch>
                                    <Route path="/MainServices/CheckStockAvaliable" component={CheckStockAvaliable}   />                                    
                                    <Route path="/MainServices/CheckProduct" exact> 
                                    <div className="MainTitle">
                                        CHECK PRODUCT
                                    </div>
                                    <hr />
                                    <MainComponent />
                                    </Route>
                                    <Route path="/MainServices/CreateServiceOrder" component={CreateServiceOrder} />   
                                    <Route path="/MainServices/CheckProduct/ResultSearch" component={ResultSearch} />
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
