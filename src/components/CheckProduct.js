import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap"
import { Col, Row} from "react-bootstrap"
import { Switch,Route,Link} from 'react-router-dom'
import CreateServiceOrder from './CreateServiceOrder'
import CheckStockAvaliable from './CheckStockAvaliable'
import './CommonCss.css'
import './CheckProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';

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

const MainComponent = ()=>{
    const ResultSearch = ()=>{
        return (   
                    <Container fluid>
                        <Row className="rowForm">
                            <Col sm={12} className="CheckProductColItem CheckProductColItemleft">
                                <div   className="MainTitle">
                                    SERVICE ITEM CARD
                                </div>                           
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col sm={12} className="CheckProductColItem CheckProductColItemleft">
                                <label className="required" style={{fontWeight:"bold" }}>General</label>
                                <hr />
                            </Col>
                        </Row>                                                        
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="No" className="required">No.</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="No" id="No"
                                     className="required CheckProductTBandTextArea" placeholder="No"
                                        defaultValue=""  />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="WarrantyStartingDate" className="required">Warranty Starting Date(Parts)</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="WarrantyStartingDate" 
                                    id="WarrantyStartingDate"
                                     className="required CheckProductTBandTextArea" placeholder="Warranty Starting Date"
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="Description" className="required">Description</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="Description" id="Description" className="required CheckProductTBandTextArea" placeholder="Description"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="WarrantyEndingDate" className="required">Warranty Ending Date(Parts)</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="WarrantyEndingDate" id="WarrantyEndingDate" className="required CheckProductTBandTextArea" placeholder="Warranty Endting Date"
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="ItemNo" className="required">Item No.</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="ItemNo" id="ItemNo" className="required CheckProductTBandTextArea" placeholder="Item No"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="WarrantyStartingDateLabor" className="required">Warranty Starting Date(Labor)</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="WarrantyStartingDateLabor" id="WarrantyStartingDateLabor" 
                                    className="required CheckProductTBandTextArea" placeholder="Warranty Starting Date(Labor)" defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="ItemDescription" className="required">Item Description</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="ItemDescription" id="ItemDescription" 
                                    className="required CheckProductTBandTextArea" placeholder="Item Description"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="WarrantyEndingDateLabor" className="required">Warranty Ending Date(Labor)</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="WarrantyEndingDateLabor" id="WarrantyEndingDateLabor"
                                     className="required CheckProductTBandTextArea" placeholder="Warranty Ending Date(Labor)" defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="SerialNo" className="required">Serial No.</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="SerialNo" id="SerialNo" className="required CheckProductTBandTextArea" placeholder="Serial No"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                            </Col>                                                               
                        </Row>                        
    
                        <Row className="rowForm">
                            <Col sm={12} className="CheckProductColItem CheckProductColItemleft">
                                <label className="required" style={{fontWeight:"bold" }}>Customer</label>
                                <hr />
                            </Col>
                        </Row>                                                        
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="CustomerNo" className="required">Customer No.</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CustomerNo" id="CustomerNo" className="required CheckProductTBandTextArea" placeholder="Customer No"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="City" className="required">City</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="City" id="City" className="required CheckProductTBandTextArea" placeholder="City"
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="CustomerName" className="required">Customer Name</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CustomerName" id="CustomerName" className="required CheckProductTBandTextArea" placeholder="Customer Name" 
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="County" className="required">County</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="County" id="County" className="required CheckProductTBandTextArea" placeholder="County"
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="Address" className="required">Address</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="Address" id="Address" className="required CheckProductTBandTextArea" placeholder="Address"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="PostCode" className="required">Post Code</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="PostCode" id="PostCode" className="required CheckProductTBandTextArea" placeholder="Post Code" defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="Address2" className="required">Address 2</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="Address2" id="Address2" className="required CheckProductTBandTextArea" placeholder="Address 2"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="Contact" className="required">Contact</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="Contact" id="Contact" className="required CheckProductTBandTextArea" placeholder="Contact" defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft"></Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">                           
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="PhoneNo" className="required">Phone No.</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="PhoneNo" id="PhoneNo" className="required CheckProductTBandTextArea" placeholder="Phone No" defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
    
                        <Row className="rowForm">
                            <Col sm={12} className="CheckProductColItem CheckProductColItemleft">
                                <label className="required" style={{fontWeight:"bold" }}>End Customer</label>
                                <hr />
                            </Col>
                        </Row>                                                        
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="EndCusCustomerNo" className="required">End-Cus. Customer No.</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCusCustomerNo" id="EndCusCustomerNo" className="required CheckProductTBandTextArea" placeholder="End-Cus Customer No"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="EndCusCity" className="required">End-Cus. City</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCusCity" id="EndCusCity" className="required CheckProductTBandTextArea" placeholder="End-Cus. City"
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="EndCusCustomerName" className="required">End-Cus. Customer Name</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCusCustomerName" id="EndCusCustomerName" className="required CheckProductTBandTextArea" placeholder="End-Cus. Customer Name" 
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="EndCusCounty" className="required">End-Cus. County</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCusCounty" id="EndCusCounty" className="required CheckProductTBandTextArea" placeholder="End-Cus. County"
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="EndCusAddress" className="required">End-Cus. Address</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCusAddress" id="EndCusAddress" className="required CheckProductTBandTextArea" placeholder="End-Cus. Address"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="EndCusPostCode" className="required">End-Cus. Post Code</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCusPostCode" id="EndCusPostCode" className="required CheckProductTBandTextArea" placeholder="End-Cus. Post Code" defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="EndCusAddress2" className="required">End-Cus. Address 2</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCusAddress2" id="EndCusAddress2" className="required CheckProductTBandTextArea" placeholder="End-Cus. Address 2"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="EndCusContact" className="required">End-Cus. Contact</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCusContact" id="EndCusContact" className="required CheckProductTBandTextArea" placeholder="End-Cus. Contact" defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="rowForm">
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft"></Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">                           
                            </Col>
                            <Col sm={2} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="EndCusPhoneNo" className="required">End-Cus. Phone No.</label>                                            
                            </Col>
                            <Col sm={3} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="EndCusPhoneNo" id="EndCusPhoneNo" className="required CheckProductTBandTextArea" placeholder="End-Cus. Phone No." defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>                    
                    </Container>
            );
    }
    const [ProductsInfo, setProductsInfo] = useState([])
    const textSerialNo = React.createRef()    
    const GetProductInfo = () => {
        const SerialNo_=textSerialNo.current.value
        console.log(SerialNo_);       
         const url_ = "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/service_item?$filter=Serial_No eq '"+SerialNo_+"'"
        //const url_ = "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/service_item?$filter=Serial_No eq '54263207'"
        console.log(url_)
        axios({
            headers: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
            method: "get",
            url: url_,
            auth: {
                username: 'TPPADMIN',
                password: 'P@ssw0rd@1'
            }
        }).then(res => {
            if (res.status === 200) {
                setProductsInfo( JSON.parse(  JSON.stringify( res.data.value ) ) )
                console.log(ProductsInfo)     
                this.ResultSearch()
            } else {
                
            }
        }).catch(err => {            
            console.log('err', err)
        });
    }
    return (
            <Container fluid>                
                        <Row style={{display: "flex", alignItems: "center"}}>
                            <Col sm={1} className="CheckProductColItem CheckProductColItemleft">                                        
                                <label htmlFor="name" className="required">SERIAL NO.</label>                                            
                            </Col>
                            <Col sm={5} className="CheckProductColItem CheckProductColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="SerialNo" id="SerialNo" 
                                    className="required CheckProductTBandTextArea" 
                                    style={{width:"150%"}} 
                                     placeholder="SERIAL NO"
                                        defaultValue="" ref={textSerialNo} />
                                </div>
                            </Col>
                            <Col sm={2} className="align-left ColSubmitSearch">                                        
                                    <div className="text-center" 
                                    style={{height: "45px", padding:"0px", marginLeft:'0px', paddingLeft:'0px'}} >                                             
                                            <ul>
                                                <li>
                                                <FontAwesomeIcon icon={['fab', 'google']} />
                                                <Link to="/MainServices/CheckProduct/ResultSearch" 
                                                onClick={GetProductInfo}>                                                        
                                                        Search
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
                                {/*
                                <li>
                                    <Link to="/MainServices/CreateServiceOrder">Create Service Order</Link>
                                </li>
                                 
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
