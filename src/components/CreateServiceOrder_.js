import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import { Col, Row} from "react-bootstrap";
import { Switch,Route,Link,useParams } from 'react-router-dom';
import CheckStockAvaliable from './CheckStockAvaliable';
import ServiceOrder from './ServiceOrder';
import './CreateServiceOrder.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import uuid from 'react-uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSistrix } from 'react-icons/fa'


const dataItemLine =[
    {Type:"Item",No:"SV005",Description:"เปลี่ยนซิมในกระเป๋า Slash+Pocket",Quantity:"1",UnitofMeasureCode:"PSC",UnitPriceExclVAT:"2,200.00",LineDiscount:"10",LineDiscountAmount:"220",LineAmountExclVAT:"1,980.00",AmountIncludingVAT:"2,118.60"},
    {Type:"Item",No:"SV006",Description:"กรณี Handle ล้มซ่อมได้เฉพาะ Bobby",Quantity:"1",UnitofMeasureCode:"PSC",UnitPriceExclVAT:"0",LineDiscount:"0",LineDiscountAmount:"0",LineAmountExclVAT:"4000",AmountIncludingVAT:""}   
]
const dataAttachFiles =[
    {No:"1",FileName:"Pic_Repair_1.JPG",AttachDate:"9-28-21 17:45"},
    {No:"2",FileName:"Pic_Repair_2.JPG",AttachDate:"9-29-21 17:46"},
    {No:"3",FileName:"Pic_Repair_3.JPG",AttachDate:"9-30-21 17:47"},
    {No:"4",FileName:"Pic_Repair_4.JPG",AttachDate:"10-1-21 17:48"},
    {No:"5",FileName:"Pic_Repair_5.JPG",AttachDate:"10-2-21 17:49"}
]
const dataServiceItemLine =[
    {ServiceItemNo:"SND05155",ItemNo:"1BKBB23EPO1SB",Code:"HANDBAG",SerialNo:"SN05155",Description:"BOBBY 23 EP SOME"
    ,RepairStatusCode:"COMPLETED",Warranty:<input type='checkbox' />,FaultAreaCode:"STRAP",SymptomCode:"ENDGE PAINT",FaultCode:"S001"
    ,WarrantyStartingDateParts:"27-09-21",WarrantyEndingDateParts:"27-09-21",WarrantyParts:"100",StartingDateLabor:"27-09-21"
    ,EndingDateLabor:"27-09-26",WarrantyLabor:10 }    
]
const data =[
    {No:"BTH-SVO21090001",Description:"BOBBY TOURIST GOLD BUCKLE POUSSIN",Status:"Finished",OrderDate:"27-09-21",SerialNo:"SN00023",Branch:"CHIDLOM",CustomerNo:"3000001",Name:"Triple P Applications Co.,Ltd.",Sendto365BC:"1",ServiceOrderType:"REPAIR",ReleaseStatus:"Locked"},
    {No:"BTH-SVO21090002",Description:"KARL 24 GOLD BUCKLE T-REX",Status:"Pending",OrderDate:"27-09-21",SerialNo:"SN00024",Branch:"CHIDLOM",CustomerNo:"3000001",Name:"BOYY PTE LTD.",Sendto365BC:"0",ServiceOrderType:"REPAIR",ReleaseStatus:"Open"},
    {No:"BTH-SVO21090003",Description:"BOBBY TOURIST GOLD BUCKLE POUSSIN",Status:"In process",OrderDate:"27-09-21",SerialNo:"SN00025",Branch:"CHIDLOM",CustomerNo:"3000001",Name:"BOYY PTE LTD.",Sendto365BC:"0",ServiceOrderType:"REPAIR",ReleaseStatus:"Open"},
    {No:"BTH-SVO21090004",Description:"KARL 24 GOLD BUCKLE T-REX",Status:"Pending",OrderDate:"27-09-21",SerialNo:"SN00026",Branch:"CHIDLOM",CustomerNo:"3000001",Name:"BOYY PTE LTD.",Sendto365BC:"0",ServiceOrderType:"REPAIR",ReleaseStatus:"Open"},
    {No:"BTH-SVO21090005",Description:"BOBBY TOURIST GOLD BUCKLE POUSSIN",Status:"Pending",OrderDate:"27-09-21",SerialNo:"SN00027",Branch:"CHIDLOM",CustomerNo:"3000001",Name:"BOYY PTE LTD.",Sendto365BC:"1",ServiceOrderType:"REPAIR",ReleaseStatus:"Open"},
    {No:"BTH-SVO21090006",Description:"KARL 24 GOLD BUCKLE T-REX",Status:"Pending",OrderDate:"27-09-21",SerialNo:"SN00028",Branch:"CHIDLOM",CustomerNo:"3000001",Name:"Triple P Applications Co.,Ltd.",Sendto365BC:"0",ServiceOrderType:"REPAIR",ReleaseStatus:"Open"},
    {No:"BTH-SVO21090007",Description:"KARL 24 GOLD BUCKLE T-REX",Status:"Pending",OrderDate:"27-09-21",SerialNo:"SN00029",Branch:"CHIDLOM",CustomerNo:"3000001",Name:"Triple P Applications Co.,Ltd.",Sendto365BC:"0",ServiceOrderType:"REPAIR",ReleaseStatus:"Open"}
]
const MainComponent = ()=>{ 
    //console.log(props.serialno_)
return (<>

<h1>hi</h1>
    </>        
    )
}
const ResultSearch = ()=>{ 
    
    return (   

                <Container fluid>
                    <Row className="service_order_rowForm">
                        <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <div   className="MainTitle">
                                SERVICE ITEM CARD
                            </div>                           
                        </Col>
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <label className="required">General</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="No" className="required">No.</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="No" id="No" 
                                className="required CreateServiceOrderTB" placeholder="No"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyStartingDate" className="required">Warranty Starting Date(Parts)</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyStartingDate" id="WarrantyStartingDate" className="required" placeholder="Warranty Starting Date"
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="Description" className="required">Description</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Description" 
                                id="Description" className="required CreateServiceOrderTB" placeholder="Description"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyEndingDate" className="required">Warranty Ending Date(Parts)</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyEndingDate" 
                                id="WarrantyEndingDate" className="required CreateServiceOrderTB" placeholder="Warranty Endting Date"
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="ItemNo" className="required">Item No.</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="ItemNo" id="ItemNo" 
                                className="required CreateServiceOrderTB" placeholder="Item No"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyStartingDateLabor" className="required">Warranty Starting Date(Labor)</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyStartingDateLabor" 
                                id="WarrantyStartingDateLabor"
                                 className="required CreateServiceOrderTB" placeholder="Warranty Starting Date(Labor)" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="ItemDescription" className="required">Item Description</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="ItemDescription"
                                 id="ItemDescription" className="required CreateServiceOrderTB" placeholder="Item Description"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyEndingDateLabor" className="required">Warranty Ending Date(Labor)</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyEndingDateLabor" id="WarrantyEndingDateLabor" className="required" placeholder="Warranty Ending Date(Labor)" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="SerialNo" className="required">Serial No.</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="SerialNo" id="SerialNo"
                                 className="required CreateServiceOrderTB" placeholder="Serial No"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                        </Col>                                                               
                    </Row>                        

                    <Row className="service_order_rowForm">
                        <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <label className="required">Customer</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CustomerNo" className="required">Customer No.</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CustomerNo" id="CustomerNo"
                                 className="required CreateServiceOrderTB" placeholder="Customer No"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="City" className="required">City</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="City" id="City"
                                 className="required CreateServiceOrderTB" placeholder="City"
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CustomerName" className="required">Customer Name</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CustomerName" id="CustomerName" 
                                className="required CreateServiceOrderTB" placeholder="Customer Name" 
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="County" className="required">County</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="County" id="County" 
                                className="required CreateServiceOrderTB" placeholder="County"
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="Address" className="required">Address</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Address" id="Address"
                                 className="required CreateServiceOrderTB" placeholder="Address"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="PostCode" className="required">Post Code</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="PostCode" id="PostCode" 
                                className="required CreateServiceOrderTB" placeholder="Post Code" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="Address2" className="required">Address 2</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Address2" id="Address2"
                                 className="required CreateServiceOrderTB" placeholder="Address 2"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="Contact" className="required">Contact</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Contact" id="Contact"
                                 className="required CreateServiceOrderTB" placeholder="Contact" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft"></Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">                           
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="PhoneNo" className="required">Phone No.</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="PhoneNo" id="PhoneNo"
                                 className="required CreateServiceOrderTB" placeholder="Phone No" />
                            </div>
                        </Col>                                                               
                    </Row>

                    <Row className="service_order_rowForm">
                        <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <label className="required">End Customer</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCustomerNo" className="required">End-Cus. Customer No.</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCustomerNo"
                                 id="EndCusCustomerNo"
                                  className="required CreateServiceOrderTB" placeholder="End-Cus Customer No"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCity" className="required">End-Cus. City</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCity" id="EndCusCity"
                                 className="required CreateServiceOrderTB" placeholder="End-Cus. City"
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCustomerName" className="required">End-Cus. Customer Name</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCustomerName"
                                 id="EndCusCustomerName" className="required CreateServiceOrderTB" 
                                 placeholder="End-Cus. Customer Name" 
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCounty" className="required">End-Cus. County</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCounty" id="EndCusCounty"
                                 className="required CreateServiceOrderTB" placeholder="End-Cus. County"
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusAddress" className="required">End-Cus. Address</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusAddress" id="EndCusAddress" 
                                className="required CreateServiceOrderTB" placeholder="End-Cus. Address"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusPostCode" className="required">End-Cus. Post Code</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusPostCode" id="EndCusPostCode"
                                 className="required CreateServiceOrderTB" placeholder="End-Cus. Post Code" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusAddress2" className="required">End-Cus. Address 2</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusAddress2"
                                 id="EndCusAddress2" className="required CreateServiceOrderTB" placeholder="End-Cus. Address 2"
                                    />
                            </div>
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusContact" className="required">End-Cus. Contact</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusContact" id="EndCusContact"
                                 className="required CreateServiceOrderTB" placeholder="End-Cus. Contact" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft"></Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">                           
                        </Col>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusPhoneNo" className="required">End-Cus. Phone No.</label>                                            
                        </Col>
                        <Col sm={3} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusPhoneNo" id="EndCusPhoneNo"
                                 className="required CreateServiceOrderTB" placeholder="End-Cus. Phone No." />
                            </div>
                        </Col>                                                               
                    </Row>                    
                </Container>
        );
}
const CreateServiceOrder = ()=>{ 
    //const { serialno } = useParams()
    //console.log(serialno)
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
                    <Col sm={2} className="CreateServiceOrder_Menu">
                        <ul id="mainlist">
                            <li>                                
                                <Link to="/MainServices/CheckProduct">Check Product</Link>
                            </li>
                            <li>                                
                                <Link to="/MainServices/ServiceOrder">Service Order</Link>  
                            </li>                            
                            {/* <li>
                                <Link to="/MainServices/CreateServiceOrder">Create Service Order</Link>
                            </li> */}
                        </ul>
                    </Col>
                    <Col sm={10}>
                        {/* <Router> */}
                            <Switch>
                                <Route path="/MainServices/CheckStockAvaliable" component={CheckStockAvaliable}   />                                    
                                <Route path="/MainServices/CreateServiceOrder/" exact> 
                                    <div className="MainTitle">
                                        SERVICE ORDERS LIST
                                    </div>
                                    <hr />
                                    <MainComponent />
                                </Route>
                                {/* <Route path="/MainServices/CreateServiceOrder" component={CreateServiceOrder} />    */}
                                <Route path="/MainServices/CheckProduct/ResultSearch" component={ResultSearch} />
                                {/* <Route path="/MainServices/ServiceOrder/ServiceOrderCard/:ProductNo" component={ServiceOrderCard} />  */}
                                {/* <Route exact path="/Main/" /> */}
                            </Switch> 
                        {/* </Router> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default CreateServiceOrder;