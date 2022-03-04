import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import { Col, Row} from "react-bootstrap";
import { Switch,Route,Link} from 'react-router-dom';
import CreateServiceOrder from './CreateServiceOrder';
import CheckStockAvaliable from './CheckStockAvaliable';
import './CommonCss.css';
import './ServiceOrder.css';
import Table from 'react-bootstrap/Table';


const dataServiceItemLine =[
    {ServiceItemNo:"SND05155",ItemNo:"1BKBB23EPO1SB",Code:"HANDBAG",SerialNo:"SN05155",Description:"BOBBY 23 EP SOME"
    ,RepairStatusCode:"COMPLETED",Warranty:"1",FaultAreaCode:"STRAP",SymptomCode:"ENDGE PAINT",FaultCode:"S001"
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
const ServiceOrderCard = ()=>{
    return (
        <Container fluid>
        <Row className="rowForm">
            <Col sm={12} className="ColItem ColItemleft">
                <div className="MainTitle">
                    SERVICE ORDERS
                </div>                           
            </Col>
        </Row>
        <Row className="rowForm">
            <Col sm={12} className="ColItem ColItemleft" style={{paddingTop: "2%"}}>
                <label className="required SubMainTitle">General</label>
                <hr />
            </Col>
        </Row>                                                        
        <Row className="rowForm"  style={{paddingTop: "2%"}}>
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
                <label htmlFor="ContactName" className="required">Contact Name</label>                                            
            </Col>
            <Col sm={3} className="ColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="ContactName" id="ContactName" className="required" placeholder="Contact Name"
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
                <label htmlFor="PhoneNo" className="required">Phone No.</label>                                            
            </Col>
            <Col sm={3} className="ColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="PhoneNo" id="PhoneNo" className="required" placeholder="Phone No"
                        defaultValue="" />
                </div>
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
                <label htmlFor="ServiceOrderType" className="required">Service Order Type</label>                                            
            </Col>
            <Col sm={3} className="ColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="ServiceOrderType" id="ServiceOrderType" className="required" placeholder="Service Order Type" defaultValue="" />
                </div>
            </Col>                                                               
        </Row>
        <Row className="rowForm">
            <Col sm={2} className="ColItem ColItemleft">                                        
                <label htmlFor="CustomerName" className="required">CustomerName</label>                                            
            </Col>
            <Col sm={3} className="ColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="CustomerName" id="CustomerName" className="required" placeholder="Customer Name"
                        defaultValue="" />
                </div>
            </Col>
            <Col sm={2} className="ColItem ColItemleft">                                        
                <label htmlFor="Status" className="required">Status</label>                                            
            </Col>
            <Col sm={3} className="ColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="Status" id="Status" className="required" placeholder="Status" defaultValue="" />
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
                <label htmlFor="ReleaseStatus" className="required">Release Status</label>                                       
            </Col>
            <Col sm={3} className="ColItem ColItemright">
            <div className="form-group">                                            
                <input type="text" name="ReleaseStatus" id="ReleaseStatus" className="required" placeholder="Release Status"
                        defaultValue="" />
                </div>
            </Col>                                                               
        </Row>
        <Row className="rowForm">
            <Col sm={2} className="ColItem ColItemleft">                                        
                <label htmlFor="Address2" className="required">Address2</label>                                            
            </Col>
            <Col sm={3} className="ColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="Address2" id="Address2" className="required" placeholder="Address2"
                        defaultValue="" />
                </div>
            </Col>
            <Col sm={2} className="ColItem ColItemleft">  
                <label htmlFor="OrderDate" className="required">Order Date</label>                                       
            </Col>
            <Col sm={3} className="ColItem ColItemright">
            <div className="form-group">                                            
                <input type="text" name="OrderDate" id="OrderDate" className="required" placeholder="OrderDate"
                        defaultValue="" />
                </div>
            </Col>                                                               
        </Row>   
        <Row className="rowForm">
            <Col sm={2} className="ColItem ColItemleft">                                        
                <label htmlFor="City" className="required">City</label>                                            
            </Col>
            <Col sm={3} className="ColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="City" id="City" className="required" placeholder="City"
                        defaultValue="" />
                </div>
            </Col>
            <Col sm={2} className="ColItem ColItemleft">  
                <label htmlFor="OrderTime" className="required">OrderTime</label>                                       
            </Col>
            <Col sm={3} className="ColItem ColItemright">
            <div className="form-group">                                            
                <input type="text" name="OrderTime" id="OrderTime" className="required" placeholder="Order Time"
                        defaultValue="" />
                </div>
            </Col>                                                               
        </Row>   
        <Row className="rowForm">
            <Col sm={2} className="ColItem ColItemleft">                                        
                <label htmlFor="PostCode" className="required">Post Code</label>                                            
            </Col>
            <Col sm={3} className="ColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="PostCode" id="PostCode" className="required" placeholder="Post Code"
                        defaultValue="" />
                </div>
            </Col>
            <Col sm={2} className="ColItem ColItemleft">  
                <label htmlFor="SalesInvoice<" className="required">Sales Invoice</label>                                       
            </Col>
            <Col sm={3} className="ColItem ColItemright">
            <div className="form-group">                                            
                <input type="text" name="SalesInvoice" id="SalesInvoice" className="required" placeholder="Sales Invoice"
                        defaultValue="" />
                </div>
            </Col>                                                               
        </Row>       
        <Row className="rowForm">
            <Col sm={2} className="ColItem ColItemleft">                                        
                <label htmlFor="Email" className="required">Email</label>                                            
            </Col>
            <Col sm={3} className="ColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="Email" id="Email" className="required" placeholder="Email"
                        defaultValue="" />
                </div>
            </Col>
            <Col sm={2} className="ColItem ColItemleft">  
                <label htmlFor="Sendto365BC" className="required">Send to 365BC</label>                                       
            </Col>
            <Col sm={3} className="ColItem ColItemright">
            <div className="form-group">                                            
                <input type="text" name="Sales Invoice" id="Sales Invoice" className="required" placeholder="Sales Invoice"
                        defaultValue="" />
                </div>
            </Col>                                                               
        </Row>                                                   

        <Row className="rowForm">
            <Col sm={12} className="ColItem ColItemleft">
                <label className="required SubMainTitle">Service Item Line</label>
                <hr />
            </Col>
        </Row>                                                        
        <Row className="rowForm">
            <Col sm={12} className="ColItem ColItemleft"> 
                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Service Item No.</th>
                                            <th>Item No.</th>
                                            <th>Service item Group Code</th>
                                            <th>Serial No.</th>
                                            <th>Description</th>
                                            <th>Repair Status Code</th>
                                            <th>Warranty</th>
                                            <th>Fault Area Code</th>
                                            <th>Symptom Code</th>
                                            <th>Fault Code</th>
                                            <th>Warranty Starting Date(Parts)</th>
                                            <th>Warranty Ending</th>
                                            <th>Warranty % (Parts)</th>
                                            <th>Starting Date</th>
                                            <th>Ending Date(Labor)</th>
                                            <th>Warranty % (Labor)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                     dataServiceItemLine.map((element)=>{
                                            return(
                                                <tr key="{element.ServiceItemNo}">                                
                                                    <td>{element.ServiceItemNo}</td>
                                                    <td>{element.ItemNo}</td>
                                                    <td>{element.Code}</td>
                                                    <td>{element.SerialNo}</td>
                                                    <td>{element.Description}</td>
                                                    <td>{element.RepairStatusCode}</td>
                                                    <td>{element.Warranty}</td>
                                                    <td>{element.FaultAreaCode}</td>
                                                    <td>{element.SymptomCode}</td>
                                                    <td>{element.FaultCode}</td>
                                                    <td>{element.WarrantyStartingDateParts}</td>
                                                    <td>{element.WarrantyEndingDateParts}</td>
                                                    <td>{element.WarrantyParts}</td>
                                                    <td>{element.StartingDateLabor}</td>
                                                    <td>{element.EndingDateLabor}</td>
                                                    <td>{element.WarrantyLabor}</td>                                                    
                                                </tr>
                                        ) } )
                                    } 
                                    </tbody>
                            </Table>
            </Col>                                                               
        </Row>


        <Row className="rowForm">
            <Col sm={12} className="ColItem ColItemleft">
                <label className="required SubMainTitle">Invoice Line</label>
                <hr />
            </Col>
        </Row>                                                        
        <Row className="rowForm">
            <Col sm={12} className="ColItem ColItemleft">  





            </Col>                                                               
        </Row>        

        <Row className="rowForm">
            <Col sm={12} className="ColItem ColItemleft">
                <label className="required SubMainTitle">Invoicing</label>
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
    </Container>        
    );
}
const ResultSearch = ()=>{
    return (   

                <Container fluid>
                    <Row className="rowForm">
                        <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                            <div   className="MainTitle">
                                SERVICE ITEM CARD
                            </div>                           
                        </Col>
                    </Row>
                    <Row className="rowForm">
                        <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                            <label className="required">General</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="No" className="required">No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="No" id="No" className="required" placeholder="No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyStartingDate" className="required">Warranty Starting Date(Parts)</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyStartingDate" id="WarrantyStartingDate" className="required" placeholder="Warranty Starting Date"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="Description" className="required">Description</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Description" id="Description" className="required" placeholder="Description"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyEndingDate" className="required">Warranty Ending Date(Parts)</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyEndingDate" id="WarrantyEndingDate" className="required" placeholder="Warranty Endting Date"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="ItemNo" className="required">Item No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="ItemNo" id="ItemNo" className="required" placeholder="Item No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyStartingDateLabor" className="required">Warranty Starting Date(Labor)</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyStartingDateLabor" id="WarrantyStartingDateLabor" className="required" placeholder="Warranty Starting Date(Labor)" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="ItemDescription" className="required">Item Description</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="ItemDescription" id="ItemDescription" className="required" placeholder="Item Description"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyEndingDateLabor" className="required">Warranty Ending Date(Labor)</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyEndingDateLabor" id="WarrantyEndingDateLabor" className="required" placeholder="Warranty Ending Date(Labor)" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="SerialNo" className="required">Serial No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="SerialNo" id="SerialNo" className="required" placeholder="Serial No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderServiceOrderColItem ServiceOrderColItemleft">                                        
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                        </Col>                                                               
                    </Row>                        

                    <Row className="rowForm">
                        <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                            <label className="required">Customer</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="CustomerNo" className="required">Customer No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CustomerNo" id="CustomerNo" className="required" placeholder="Customer No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="City" className="required">City</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="City" id="City" className="required" placeholder="City"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="CustomerName" className="required">Customer Name</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CustomerName" id="CustomerName" className="required" placeholder="Customer Name" 
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="County" className="required">County</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="County" id="County" className="required" placeholder="County"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="Address" className="required">Address</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Address" id="Address" className="required" placeholder="Address"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="PostCode" className="required">Post Code</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="PostCode" id="PostCode" className="required" placeholder="Post Code" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="Address2" className="required">Address 2</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Address2" id="Address2" className="required" placeholder="Address 2"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="Contact" className="required">Contact</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Contact" id="Contact" className="required" placeholder="Contact" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft"></Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">                           
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="PhoneNo" className="required">Phone No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="PhoneNo" id="PhoneNo" className="required" placeholder="Phone No" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>

                    <Row className="rowForm">
                        <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                            <label className="required">End Customer</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCustomerNo" className="required">End-Cus. Customer No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCustomerNo" id="EndCusCustomerNo" className="required" placeholder="End-Cus Customer No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCity" className="required">End-Cus. City</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCity" id="EndCusCity" className="required" placeholder="End-Cus. City"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCustomerName" className="required">End-Cus. Customer Name</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCustomerName" id="EndCusCustomerName" className="required" placeholder="End-Cus. Customer Name" 
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCounty" className="required">End-Cus. County</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCounty" id="EndCusCounty" className="required" placeholder="End-Cus. County"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusAddress" className="required">End-Cus. Address</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusAddress" id="EndCusAddress" className="required" placeholder="End-Cus. Address"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusPostCode" className="required">End-Cus. Post Code</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusPostCode" id="EndCusPostCode" className="required" placeholder="End-Cus. Post Code" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusAddress2" className="required">End-Cus. Address 2</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusAddress2" id="EndCusAddress2" className="required" placeholder="End-Cus. Address 2"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusContact" className="required">End-Cus. Contact</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusContact" id="EndCusContact" className="required" placeholder="End-Cus. Contact" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft"></Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">                           
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusPhoneNo" className="required">End-Cus. Phone No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
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
                <div className="ServiceOrderColItem ServiceOrderColSubmitSearch" style={{width:"100%",display: "flex" ,verticalAlign:"middle"}}>     
                    <input type="text" 
                    name="ItemNo" 
                    id="ItemNo" 
                    className="required" 
                    placeholder="SEARCH" style={{height: "50%"}}></input>
                    <ul  style={{width:"50%"}}>
                        <li>   
                            <Link to="/MainServices/CheckProduct/ResultSearch">
                                Search
                            </Link>                                   
                        </li>
                    </ul>
                </div>     
            );
}
const MainList = () =>{
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={12} xl={12} md={12} sm={12} xxl={12} className="ColContent">
                        <form action="#">                   
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th>Order Date</th>
                                            <th>Serial No.</th>
                                            <th>Branch</th>
                                            <th>Customer No.</th>
                                            <th>Name</th>
                                            <th>Send to 365 BC</th>
                                            <th>Service Order Type</th>
                                            <th>Release Status<input type="checkbox" checked="checked" />  </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map((element)=>{
                                            return(
                                                <tr key="{element.No}">                                
                                                    <td><Link to="/MainServices/ServiceOrder/ServiceOrderCard">{element.No}</Link></td>
                                                    <td>{element.Description}</td>
                                                    <td>{element.Status}</td>
                                                    <td>{element.OrderDate}</td>
                                                    <td>{element.SerialNo}</td>
                                                    <td>{element.Branch}</td>
                                                    <td>{element.CustomerNo}</td>
                                                    <td>{element.Name}</td>
                                                    <td>
                                                        <input type="checkbox" />
                                                        <span>Red</span>                                 
                                                    </td>
                                                    <td>{element.ServiceOrderType}</td>
                                                    <td>{element.ReleaseStatus}</td>
                                                </tr>
                                        ) } )
                                    } 
                                    </tbody>
                            </Table>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>   
    );
}
const ServiceOrder = ()=>{
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
                        </ul>
                    </Col>
                    <Col sm={10}>
                        {/* <Router> */}
                            <Switch>
                                <Route path="/MainServices/CheckStockAvaliable" component={CheckStockAvaliable}   />                                    
                                <Route path="/MainServices/ServiceOrder" exact> 
                                    <div className="MainTitle">
                                        SERVICE ORDERS LIST
                                    </div>
                                    <hr />
                                    <MainComponent />
                                    <MainList />
                                </Route>
                                <Route path="/MainServices/CreateServiceOrder" component={CreateServiceOrder} />   
                                <Route path="/MainServices/CheckProduct/ResultSearch" component={ResultSearch} />
                                <Route path="/MainServices/ServiceOrder/ServiceOrderCard" component={ServiceOrderCard} /> 
                                {/* <Route exact path="/Main/" /> */}
                            </Switch> 
                        {/* </Router> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default ServiceOrder;