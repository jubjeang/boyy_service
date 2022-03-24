import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import { Col, Row} from "react-bootstrap";
import { Switch,Route,Link } from 'react-router-dom';
import CreateServiceOrder from './CreateServiceOrder';
import CheckStockAvaliable from './CheckStockAvaliable';
import './CommonCss.css';
import './ServiceOrder.css';
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

const ServiceOrderCard = ()=>{ 
    const [CustsInfo, setCustsInfo] = useState([])
    
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [ShoweCreateCust, setShoweCreateCust] = useState(false)
    const handleCreateCustClose = () => setShoweCreateCust(false)
    const handleCreateCustShow = () => setShoweCreateCust(true)    
    
    const [showCustSearch, setshowCustSearch] = useState(false)
    const handleCloseshowCustSearch = () => setshowCustSearch(false)     
    const handleShowshowCustSearch = () => {
        setshowCustSearch(true)
        setCustsInfo([])
        //setCustsInfoFromSearch([])       
    }

    const [CustsInfoFromSearch, setCustsInfoFromSearch] = useState([])
    let textCustName = React.createRef()
    const GetCustInfo = () => {
    //setCustsInfo([])
    const CustName=textCustName.current.value
    console.log(CustName);       
    const url_ = "http://office.triplepcloud.com:21012/Boyy_Dev/ODataV4/Company('CRONUS - LS Central')/API_Customer?$filter=Name eq '"+CustName+"*'"
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
            setCustsInfo( JSON.parse(  JSON.stringify( res.data.value ) ) )
            console.log(CustsInfo)                
        } else {
            
        }
    }).catch(err => {            
        console.log('err', err)
    });
    }
    const GetCustInfo_ = (no_) => { 
        //console.log( CustsInfo.filter( CustsInfo => CustsInfo.No.includes( no_ ) ) )               
        setCustsInfoFromSearch( [] )
        setCustsInfoFromSearch( CustsInfo.filter( CustsInfo => CustsInfo.No.includes( no_ ) ) )
        //setCustsInfoFromSearch( CustsInfo.filter( [ CustsInfo => CustsInfo.No.includes( no_ ) ),...prevItem ] )
        // setCustsInfoFromSearch((prevItem)=>{
        //     return [CustsInfo.filter( CustsInfo => CustsInfo.No.includes( no_ ) ),...prevItem]
        // })
        console.log( CustsInfoFromSearch )
        console.log( CustsInfoFromSearch[0].No )
        handleCloseshowCustSearch()

    }
    return (<>
        <Container fluid style={{width:"120%"}}>
            <Row className="service_order_rowForm" style={{width:"110%", paddingLeft:"0px"}}>
                <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemleft">
                    <div className="MainTitle">
                        SERVICE ORDERS
                    </div>                           
                </Col>
                <Col sm={6} className="ServiceOrderColItem ColItemright" style={{textAlign:"right !important"}}>                      
                    <Button variant="primary" className='servic_eorder_buttun' onClick={handleCreateCustShow}>Create Customer</Button>&nbsp;                
                    <Button variant="primary" className='servic_eorder_buttun' onClick={handleShow}>Attach files</Button>&nbsp; 
                    <Button variant="primary" className='servic_eorder_buttun'>Print Tax Invoice/Receipt</Button>&nbsp; 
                    <Button variant="primary" className='servic_eorder_buttun'>Print Repair Form</Button>&nbsp; 
                    <Button className='servic_eorder_buttun ServiceOrderbtn-secondary'>Post Sales Invoice</Button>&nbsp;
                    <Button className='servic_eorder_buttun ServiceOrderbtn-secondary'>Save</Button>
                </Col>                
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft" style={{paddingTop: "2%"}}>
                    <label className="required SubMainTitle">General</label>
                    <hr />
                </Col>
            </Row>                                                        
            <Row className="service_order_rowForm"  style={{marginTop: "2%"}}>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="No" className="required">No.</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="No" id="No" 
                        className="required ServiceOrderTB" 
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].No : ""}
                        placeholder="No"
                            defaultValue="" />
                    </div>
                </Col>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="ContactName" className="required">Contact Name</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ContactName" id="ContactName" 
                        className="required ServiceOrderTB" 
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Contact_Name : ""} placeholder="Contact Name"
                            defaultValue="" />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="Description" className="required">Description</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Description" id="Description" 
                        className="required ServiceOrderTB" placeholder="Description"
                            defaultValue="" />
                    </div>
                </Col>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="PhoneNo" className="required">Phone No.</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="PhoneNo" id="PhoneNo" 
                        className="required ServiceOrderTB" placeholder="Phone No"                          
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Phone_No : ""}
                            defaultValue="" />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="CustomerNo" className="required">Customer No.</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="CustomerNo" id="CustomerNo"
                        className="required ServiceOrderCustNoSearchTB"                          
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].No : ""}
                         placeholder="Customer No"
                            defaultValue=""
                             />&nbsp;
                            <Button variant="primary" style={{width: "2.5rem" }}  className='servic_eorder_buttun'
                             onClick={handleShowshowCustSearch}>Search
                            </Button>
                    </div>
                </Col>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="ServiceOrderType" className="required">Service Order Type</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ServiceOrderType" 
                        id="ServiceOrderType"
                         className="required ServiceOrderTB" 
                         placeholder="Service Order Type" defaultValue="" />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="CustomerName" className="required">CustomerName</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text"                          
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Name : ""} name="CustomerName" id="CustomerName" 
                        className="required ServiceOrderTB" placeholder="Customer Name"
                            defaultValue="" />
                    </div>
                </Col>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="Status" className="required">Status</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Status" id="Status" 
                        className="required ServiceOrderTB" placeholder="Status" defaultValue="" />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="Address" className="required">Address</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Address" id="Address"                           
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Address : ""}
                        className="required ServiceOrderTB" placeholder="Address"
                            defaultValue="" />
                    </div>
                </Col>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">  
                    <label htmlFor="ReleaseStatus" className="required">Release Status</label>                                       
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="ReleaseStatus" id="ReleaseStatus" 
                    className="required ServiceOrderTB" placeholder="Release Status"
                            defaultValue="" />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="Address2" className="required">Address2</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Address2" id="Address2"                           
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Address_2 : ""} 
                        className="required ServiceOrderTB" placeholder="Address2"
                            defaultValue="" />
                    </div>
                </Col>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">  
                    <label htmlFor="OrderDate" className="required">Order Date</label>                                       
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="OrderDate" id="OrderDate" 
                    className="required ServiceOrderTB" placeholder="OrderDate"
                            defaultValue="" />
                    </div>
                </Col>                                                               
            </Row>   
            <Row className="service_order_rowForm">
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="City" className="required">City</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="City" id="City"                           
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].City : ""} 
                        className="required ServiceOrderTB" placeholder="City"
                            defaultValue="" />
                    </div>
                </Col>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">  
                    <label htmlFor="OrderTime" className="required">OrderTime</label>                                       
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="OrderTime" id="OrderTime" 
                    className="required ServiceOrderTB" placeholder="Order Time"
                            defaultValue="" />
                    </div>
                </Col>                                                               
            </Row>   
            <Row className="service_order_rowForm">
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="PostCode" className="required">Post Code</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="PostCode" id="PostCode"                           
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Post_Code : ""} 
                        className="required ServiceOrderTB" placeholder="Post Code"
                            defaultValue="" />
                    </div>
                </Col>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">  
                    <label htmlFor="SalesInvoice<" className="required">Sales Invoice</label>                                       
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="SalesInvoice" id="SalesInvoice"
                     className="required ServiceOrderTB" placeholder="Sales Invoice"
                            defaultValue="" />
                    </div>
                </Col>                                                               
            </Row>       
            <Row className="service_order_rowForm">
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                    <label htmlFor="Email" className="required">Email</label>                                            
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Email" id="Email"
                         className="required ServiceOrderTB" placeholder="Email"                           
                         value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].E_Mail : ""}
                            defaultValue="" />
                    </div>
                </Col>
                <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">  
                    <label htmlFor="Sendto365BC" className="required">Send to 365 BC</label>                                       
                </Col>
                <Col sm={3} className="ServiceOrderColItem ColItemright">
                <div className="form-group">                                            
                    <input type="checkbox" id="Sendto365BC" />
                    </div>
                </Col>                                                               
            </Row>                                                   

            <Row className="service_order_rowForm" style={{paddingTop:"1%"}}>
                <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                    <label className="required SubMainTitle">Service Item Line</label>
                    <hr />
                </Col>
            </Row>                                                        
            <Row className="service_order_rowForm">
                <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft"> 
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
                                                    <tr key={uuid()}>                                
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
                                                    ) 
                                                }
                                            )
                                        } 
                                        </tbody>
                    </Table>
                </Col>                                                               
            </Row>
            </Container>
            <Container fluid style={{paddingTop:"2%"}}>
                <Row className="service_order_rowForm" style={{paddingTop:"0%", marringTop:"0%"}}>
                        <Col sm={10} className="ServiceOrderColItem ServiceOrderColItemleft" style={{paddingTop:"0%", marringTop:"0%"}}>
                            <label className="required SubMainTitle">Invoice Line</label>
                            <hr />
                        </Col>
                        <Col sm={1} className="ServiceOrderColItem ServiceOrderColItemleft" style={{paddingTop:"0%", marringTop:"0%"}}>
                        <Button className='servic_eorder_buttun ServiceOrderbtn-secondary'
                         style={{width:"3rem", height:"1.5rem", padding:"0", paddingBottom:"0rem"}}
                         >Add</Button>                           
                        </Col>                        
                    </Row>                                                        
                <Row className="service_order_rowForm">
                    <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">  
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>No.</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Unit of Measure Code</th>
                                    <th>Umit Price Excl Vat</th>
                                    <th>Line Discount %</th>
                                    <th>Line Discount Amount</th>
                                    <th>Line Amount Excl VAT</th>
                                    <th>Amount Including VAT</th>                                    
                                </tr>
                            </thead>
                            <tbody>                            
                            {
                            dataItemLine.map((element)=>{
                            return(
                                    <tr>                                
                                        <td>{element.Type}</td>
                                        <td>{element.No}</td>
                                        <td>{element.Description}</td>
                                        <td>{element.Quantity}</td>
                                        <td>{element.UnitofMeasureCode}</td>
                                        <td>{element.UnitPriceExclVAT}</td>
                                        <td>{element.LineDiscount}</td>
                                        <td>{element.LineDiscountAmount}</td>
                                        <td>{element.LineAmountExclVAT}</td>
                                        <td>{element.AmountIncludingVAT}</td>                                               
                                    </tr>
                                    ) 
                                }
                            )
                            } 
                            </tbody>
                        </Table>
                    </Col>                                                               
                </Row>  
            </Container>
            <Container fluid style={{paddingTop:"3%"}}> 
                <Row className="service_order_rowForm">
                    <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                        <label className="required SubMainTitle">Invoicing</label>
                        <hr />
                    </Col>
                </Row>                                                        
                <Row className="service_order_rowForm">
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="BilltoCustomerNo" className="required">Bill-to Customer No.</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="BilltoCustomerNo"
                            
                            id="BilltoCustomerNo"
                             className="required ServiceOrderTB" placeholder="Bill-to Customer No"
                                defaultValue="" />
                        </div>
                    </Col>
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="BilltoCity" className="required">Bill-to City</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="BilltoCity" id="BilltoCity"
                             className="required ServiceOrderTB" placeholder="Bill-to City"
                                defaultValue="" />
                        </div>
                    </Col>                                                               
                </Row>
                <Row className="service_order_rowForm">
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="BilltoName" className="required">Bill-to Name</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="BilltoName" id="BilltoName" 
                            className="required ServiceOrderTB" placeholder="Bill-to Name"
                                defaultValue="" />
                        </div>
                    </Col> 
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="BilltoPostCode" className="required">Bill-to Post Code</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="BilltoPostCode" 
                            id="BilltoPostCode" className="required ServiceOrderTB" placeholder="Bill-to Post Code"
                                defaultValue="" />
                        </div>
                    </Col>                                                               
                </Row>
                <Row className="service_order_rowForm">
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="BilltoAddress" className="required">Bill-to Address</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="BilltoAddress" 
                            id="BilltoAddress" 
                            className="required ServiceOrderTB" placeholder="Bill-to Address"
                                defaultValue="" />
                        </div>
                    </Col>
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="BilltoPhoneNo" className="required">Bill-to Phone No.</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="BilltoPhoneNo"
                             id="BilltoPhoneNo" className="required ServiceOrderTB" placeholder="Bill-to Phone No"
                                defaultValue="" />
                        </div>
                    </Col>                                                               
                </Row>
                <Row className="service_order_rowForm">
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="BilltoAddress2" className="required">Bill-to Address 2</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="BilltoAddress2" 
                            id="BilltoAddress2" className="required ServiceOrderTB" placeholder="Bill-to Address 2"
                                defaultValue="" />
                        </div>
                    </Col>
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="BilltoEmail" className="required">Bill-to Email</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="BilltoEmail" id="BilltoEmail" className="required" placeholder="Bill-to Email"
                                defaultValue="" />
                        </div>
                    </Col>                                                               
                </Row>                                                                                                                             
            </Container>
            <Container fluid style={{paddingTop:"1%"}}> 
                <Row className="service_order_rowForm">
                    <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                        <label className="required SubMainTitle">Ship to</label>
                        <hr />
                    </Col>
                </Row>                                                        
                <Row className="service_order_rowForm">
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="ShiptoCustomerNo" className="required">Ship-to Customer No.</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="ShiptoCustomerNo"                             
                            id="ShiptoCustomerNo"
                             className="required ServiceOrderTB" placeholder="Ship-to Customer No"
                                defaultValue="" />
                        </div>
                    </Col>
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="ShiptoCity" className="required">Ship-to City</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="ShiptoCity" id="ShiptoCity"
                             className="required ServiceOrderTB" placeholder="Ship-to City"
                                defaultValue="" />
                        </div>
                    </Col>                                                               
                </Row>
                <Row className="service_order_rowForm">
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="ShiptoName" className="required">Ship-to Name</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="ShiptoName" id="ShiptoName" 
                            className="required ServiceOrderTB" placeholder="Ship-to Name"
                                defaultValue="" />
                        </div>
                    </Col> 
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="ShiptoPostCode" className="required">Ship-to Post Code</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="ShiptoPostCode" 
                            id="ShiptoPostCode" className="required ServiceOrderTB" placeholder="Ship-to Post Code"
                                defaultValue="" />
                        </div>
                    </Col>                                                               
                </Row>
                <Row className="service_order_rowForm">
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="ShiptoAddress" className="required">Ship-to Address</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="ShiptoAddress" 
                            id="ShiptoAddress" 
                            className="required ServiceOrderTB" placeholder="Ship-to Address"
                                defaultValue="" />
                        </div>
                    </Col>
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="ShiptoPhoneNo" className="required">Ship-to Phone No.</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="ShiptoPhoneNo"
                             id="ShiptoPhoneNo" className="required ServiceOrderTB" placeholder="Ship-to Phone No"
                                defaultValue="" />
                        </div>
                    </Col>                                                               
                </Row>
                <Row className="service_order_rowForm">
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                        <label htmlFor="ShiptoAddress2" className="required">Ship-to Address 2</label>                                            
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        <div className="form-group">                                            
                            <input type="text" name="ShiptoAddress2" 
                            id="ShiptoAddress2" className="required ServiceOrderTB" placeholder="Ship-to Address 2"
                                defaultValue="" />
                        </div>
                    </Col>
                    <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                                                    
                    </Col>
                    <Col sm={3} className="ServiceOrderColItem ColItemright">
                        
                    </Col>                                                               
                </Row>                                                                                                                             
            </Container>            
            {/* search customer */}
            <Modal show={showCustSearch} onHide={handleCloseshowCustSearch} 
            centered size="ms" scrollable={true}>
                <Modal.Header>
                <Modal.Title>Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height:"23rem"}}>
                    <Container fluid style={{width:"100%"}}>
                        <Row className="service_order_rowForm"  style={{marginTop: "2%"}}>                            
                            <Col sm={6} className="ServiceOrderColItem ColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CustomerNameSearch" id="CustomerNameSearch" 
                                    className="required ServiceOrderCustNameSearchTB"
                                    placeholder="Customer Name" ref={textCustName} />&nbsp;
                                    <Button variant="primary"  className='servic_eorder_buttun' onClick={GetCustInfo}>Search
                                    </Button>
                                </div>
                            </Col>                                                              
                        </Row>
                        <Row className="service_order_rowForm">
                            <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft"> 
                                <Table striped bordered hover style={{display: CustsInfo.length>0 ? 'block' : 'none', width:'100%' }}>
                                    <thead>
                                        <tr>
                                            <th style={{width: '10%'}}>No.</th>
                                            <th style={{width: '90%'}}>Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        CustsInfo.map((element)=>{
                                            return(
                                                <tr key={uuid()}>                                
                                                    <td>
                                                        <Link 
                                                        onClick={() => GetCustInfo_(element.No)}
                                                        className="ServiceOrder_Menu" to="/MainServices/ServiceOrder/ServiceOrderCard">
                                                            {element.No}
                                                        </Link>
                                                    </td>
                                                    <td className="ServiceOrder_Menu">{element.Name}</td>
                                                </tr>
                                                ) 
                                            }
                                        )
                                    } 
                                    </tbody>
                                </Table>
                            </Col>                                                               
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseshowCustSearch}>
                    Close
                </Button>         
                </Modal.Footer>
            </Modal>
            {/* Attach File */}
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Body style={{height:"20rem"}}>
                    <Container fluid style={{width:"100%"}}>
                        <Row className="service_order_rowForm"  style={{marginTop: "2%"}}>
                            <Col sm={8}>
                                <div className="form-group">                                                                            
                                    <input type="file" name="file" placeholder="Attachments" />&nbsp;                                    
                                </div>
                            </Col>
                            <Col sm={2}>
                                        <Button variant="primary" style={{width:'3rem'}} className='servic_eorder_buttun'
                                        onClick={GetCustInfo}>Delete
                                        </Button>
                            </Col>
                            <Col sm={2}>
                                <Button variant="primary" style={{width:'3rem'}} className='servic_eorder_buttun'
                                onClick={GetCustInfo}>Add
                                </Button>
                            </Col>                                                             
                        </Row>
                        <Row className="service_order_rowForm">
                            <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft"> 
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th style={{width:'5%'}}></th>
                                            <th style={{width:'50%'}}>Attach File Name</th>
                                            <th style={{width:'45%'}}>Attach Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        dataAttachFiles.map((element)=>{
                                            return(
                                                <tr key={uuid()}>                                
                                                    <td></td>
                                                    <td>{element.FileName}</td>
                                                    <td>{element.AttachDate}</td>                                                
                                                </tr>
                                                ) 
                                            }
                                        )
                                    } 
                                    </tbody>
                                </Table>
                            </Col>                                                               
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>            
                </Modal.Footer>
            </Modal>
            {/* Create Customer */}
            <Modal show={ShoweCreateCust} onHide={handleCreateCustClose} centered size="xl">
                <Modal.Body style={{height:"20rem"}}>                    
                    <Container fluid style={{width:"100%"}}>
                        <Row className="service_order_rowForm" style={{height:"2rem"}}>
                            <Col sm={10} className="ServiceOrderColItem ServiceOrderColItemleft"
                             style={{paddingTop:"0.2rem", backgroundColor:"#e9ecef"}}>                                        
                                <h5>Create Customer</h5>
                            </Col>
                            <Col sm={1} className="ServiceOrderColItem ServiceOrderColItemleft" 
                            style={{paddingTop:"0.2rem", backgroundColor:"#e9ecef",marginLeft:"0rem", paddingLeft:"1.1rem"}}>                                        
                                <Button className='servic_eorder_buttun ServiceOrderbtn-secondary' style={{width:"3.5rem"}}>Save</Button>
                            </Col>                            
                        </Row>
                        <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                            <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                <label htmlFor="CreateCustCustomerName" className="required">Customer Name</label>                                            
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CreateCustCustomerName" id="CreateCustCustomerName" 
                                    className="required ServiceOrderTB_Small" placeholder="Customer Name"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={1} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                <label htmlFor="CreateCustEmail" className="required">Email</label>                                            
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CreateCustEmail" id="CreateCustEmail"
                                     className="required ServiceOrderTB_Small" placeholder="Email"
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                            <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                <label htmlFor="CreateCustAddress" className="required">Address</label>                                            
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CreateCustAddress" id="CreateCustAddress" 
                                    className="required ServiceOrderTB_Small" placeholder="Address"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={1} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                <label htmlFor="CreateCustContactName" className="required">Contact Name</label>                                            
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CreateCustContactName" id="CreateCustContactName"
                                     className="required ServiceOrderTB_Small" placeholder="Contact Name"
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                            <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                <label htmlFor="CreateCustAddress2" className="required">Address</label>                                            
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CreateCustAddress2" id="CreateCustAddress2" 
                                    className="required ServiceOrderTB_Small" placeholder="Address"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={1} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                <label htmlFor="CreateCustPhoneNo" className="required">Phone No.</label>                                            
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CreateCustPhoneNo" id="CreateCustPhoneNo"
                                     className="required ServiceOrderTB_Small" placeholder="Phone No"
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                            <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                <label htmlFor="CreateCustCity" className="required">City</label>                                            
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CreateCustCity" id="CreateCustCity" 
                                    className="required ServiceOrderTB_Small" placeholder="City"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={1} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                <label htmlFor="CreateCustVatRegis" className="required">Vat Registration No.</label>                                            
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CreateCustVatRegis" id="CreateCustVatRegis"
                                     className="required ServiceOrderTB_Small" placeholder="Vat Registration No."
                                        defaultValue="" />
                                </div>
                            </Col>                                                               
                        </Row>
                        <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                            <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                <label htmlFor="CreateCustPostCode" className="required">Post Code</label>                                            
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">
                                <div className="form-group">                                            
                                    <input type="text" name="CreateCustPostCode" id="CreateCustPostCode" 
                                    className="required ServiceOrderTB_Small" placeholder="Post Code"
                                        defaultValue="" />
                                </div>
                            </Col>
                            <Col sm={1} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                                
                            </Col>
                            <Col sm={4} className="ServiceOrderColItem ServiceOrderColItemright">                                
                            </Col>                                                               
                        </Row>                                                                                                
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCreateCustClose}>Close</Button>            
                </Modal.Footer>
            </Modal>

    </>        
    )

}
const ResultSearch = ()=>{
    return (   

                <Container fluid>
                    <Row className="service_order_rowForm">
                        <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                            <div   className="MainTitle">
                                SERVICE ITEM CARD
                            </div>                           
                        </Col>
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                            <label className="required">General</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="No" className="required">No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="No" id="No" 
                                className="required ServiceOrderTB" placeholder="No"
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
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="Description" className="required">Description</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Description" 
                                id="Description" className="required ServiceOrderTB" placeholder="Description"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyEndingDate" className="required">Warranty Ending Date(Parts)</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyEndingDate" 
                                id="WarrantyEndingDate" className="required ServiceOrderTB" placeholder="Warranty Endting Date"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="ItemNo" className="required">Item No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="ItemNo" id="ItemNo" 
                                className="required ServiceOrderTB" placeholder="Item No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="WarrantyStartingDateLabor" className="required">Warranty Starting Date(Labor)</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="WarrantyStartingDateLabor" 
                                id="WarrantyStartingDateLabor"
                                 className="required ServiceOrderTB" placeholder="Warranty Starting Date(Labor)" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="ItemDescription" className="required">Item Description</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="ItemDescription"
                                 id="ItemDescription" className="required ServiceOrderTB" placeholder="Item Description"
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
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="SerialNo" className="required">Serial No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="SerialNo" id="SerialNo"
                                 className="required ServiceOrderTB" placeholder="Serial No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderServiceOrderColItem ServiceOrderColItemleft">                                        
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                        </Col>                                                               
                    </Row>                        

                    <Row className="service_order_rowForm">
                        <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                            <label className="required">Customer</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="CustomerNo" className="required">Customer No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CustomerNo" id="CustomerNo"
                                 className="required ServiceOrderTB" placeholder="Customer No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="City" className="required">City</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="City" id="City"
                                 className="required ServiceOrderTB" placeholder="City"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="CustomerName" className="required">Customer Name</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CustomerName" id="CustomerName" 
                                className="required ServiceOrderTB" placeholder="Customer Name" 
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="County" className="required">County</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="County" id="County" 
                                className="required ServiceOrderTB" placeholder="County"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="Address" className="required">Address</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Address" id="Address"
                                 className="required ServiceOrderTB" placeholder="Address"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="PostCode" className="required">Post Code</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="PostCode" id="PostCode" 
                                className="required ServiceOrderTB" placeholder="Post Code" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="Address2" className="required">Address 2</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Address2" id="Address2"
                                 className="required ServiceOrderTB" placeholder="Address 2"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="Contact" className="required">Contact</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="Contact" id="Contact"
                                 className="required ServiceOrderTB" placeholder="Contact" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft"></Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">                           
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="PhoneNo" className="required">Phone No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="PhoneNo" id="PhoneNo"
                                 className="required ServiceOrderTB" placeholder="Phone No" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>

                    <Row className="service_order_rowForm">
                        <Col sm={12} className="ServiceOrderColItem ServiceOrderColItemleft">
                            <label className="required">End Customer</label>
                            <hr />
                        </Col>
                    </Row>                                                        
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCustomerNo" className="required">End-Cus. Customer No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCustomerNo"
                                 id="EndCusCustomerNo"
                                  className="required ServiceOrderTB" placeholder="End-Cus Customer No"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCity" className="required">End-Cus. City</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCity" id="EndCusCity"
                                 className="required ServiceOrderTB" placeholder="End-Cus. City"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCustomerName" className="required">End-Cus. Customer Name</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCustomerName"
                                 id="EndCusCustomerName" className="required ServiceOrderTB" 
                                 placeholder="End-Cus. Customer Name" 
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusCounty" className="required">End-Cus. County</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusCounty" id="EndCusCounty"
                                 className="required ServiceOrderTB" placeholder="End-Cus. County"
                                    defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusAddress" className="required">End-Cus. Address</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusAddress" id="EndCusAddress" 
                                className="required ServiceOrderTB" placeholder="End-Cus. Address"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusPostCode" className="required">End-Cus. Post Code</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusPostCode" id="EndCusPostCode"
                                 className="required ServiceOrderTB" placeholder="End-Cus. Post Code" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusAddress2" className="required">End-Cus. Address 2</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusAddress2"
                                 id="EndCusAddress2" className="required ServiceOrderTB" placeholder="End-Cus. Address 2"
                                    defaultValue="" />
                            </div>
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusContact" className="required">End-Cus. Contact</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusContact" id="EndCusContact"
                                 className="required ServiceOrderTB" placeholder="End-Cus. Contact" defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft"></Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">                           
                        </Col>
                        <Col sm={2} className="ServiceOrderColItem ServiceOrderColItemleft">                                        
                            <label htmlFor="EndCusPhoneNo" className="required">End-Cus. Phone No.</label>                                            
                        </Col>
                        <Col sm={3} className="ServiceOrderColItem ServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="EndCusPhoneNo" id="EndCusPhoneNo"
                                 className="required ServiceOrderTB" placeholder="End-Cus. Phone No." defaultValue="" />
                            </div>
                        </Col>                                                               
                    </Row>                    
                </Container>
        );
}
const MainComponent = ()=>{
    return (
                <div className="ServiceOrderColItem ServiceOrderColSubmitSearch" 
                style={{width:"70%",display: "flex" ,verticalAlign:"middle",fontFamily: 'FontAwesome'}}>     
                   &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" 
                    name="ItemNo" 
                    id="ItemNo" 
                    className="required  ServiceOrderTB"                     
                    placeholder="&#xf002;"></input>
                    <ul>
                        <li>   
                            <Link to="/MainServices/CheckProduct/ResultSearch/" style={{fontFamily:'GothamBook'}}>
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
                                            <th>Release Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map((element)=>{
                                            return(
                                                <tr key={uuid()}>                                
                                                    <td><Link to="/MainServices/ServiceOrder/ServiceOrderCard">{element.No}</Link></td>
                                                    <td>{element.Description}</td>
                                                    <td>{element.Status}</td>
                                                    <td>{element.OrderDate}</td>
                                                    <td>{element.SerialNo}</td>
                                                    <td>{element.Branch}</td>
                                                    <td>{element.CustomerNo}</td>
                                                    <td>{element.Name}</td>
                                                    <td style={{textAlign:"center", verticalAlign:"top", paddingTop:"0px"}}>
                                                        <input type='checkbox' />                                 
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
                    <Col sm={2} className="ServiceOrder_Menu">
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
                                <Route path="/MainServices/ServiceOrder" exact> 
                                    <div className="MainTitle">
                                        SERVICE ORDERS LIST
                                    </div>
                                    <hr />
                                    <MainComponent />
                                    <MainList />
                                </Route>
                                <Route path="/MainServices/CreateServiceOrder" component={CreateServiceOrder} />   
                                <Route path="/MainServices/CheckProduct/ResultSearch/" component={ResultSearch} />
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