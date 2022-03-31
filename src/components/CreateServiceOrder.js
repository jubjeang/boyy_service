import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import { Col, Row} from "react-bootstrap";
import { Switch,Route,Link,useParams } from 'react-router-dom';
import CheckStockAvaliable from './CheckStockAvaliable';
import ServiceOrder from './ServiceOrder';
import './CommonCss.css';
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
    //console.log( props.serialno )
    const  { serialno } = useParams();
    console.log( serialno )
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
    // dropdown
    const [ServiceOrderType, setServiceOrderType] = useState([])  
    const [RepairStatus, setRepairStatus] = useState([])
    const [Branch, setBranch] = useState([])
    const [FaultArea, setFaultArea] = useState([])
    const [SymptomCode, setSymptomCode] = useState([])
    const [FaultCode, setFaultCode] = useState([])

    const refServiceOrderType_Val = React.createRef()
    const refRepairStatus_Val = React.createRef()
    const refBranch_Val = React.createRef()
    const refFaultArea_Val = React.createRef()
    const refSymptomCode_Val = React.createRef()
    const refFaultCode_Val = React.createRef()
    // end dropdown
    const SearchValueFieldChange = (e) => {
        // setSearchValueField_(e.target.value)
        // console.log(SearchValueField_)
    }
    let textCustName = React.createRef()
    console.log("http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/service_item?$filter=Serial_No eq '"+serialno+"'")
    //*********Initial GetCustInfo  */
    useEffect(async () => {
        const res = await axios({
            headers: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
            method: "get",
            url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/service_item?$filter=Serial_No eq '"+serialno+"'",
            auth: {
                username: 'TPPADMIN',
                password: 'P@ssw0rd@1'
            }
        }).then(res => {
            if (res.status == 200) {
                setCustsInfoFromSearch( JSON.parse(  JSON.stringify( res.data.value ) ) )
                console.log(CustsInfoFromSearch)                
            } else {
                
            }
        }).catch(err => {            
            console.log('err', err)
        });
    },[])
    //*********End Initial GetCustInfo  */
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
        if (res.status == 200) {
            setCustsInfo( JSON.parse(  JSON.stringify( res.data.value ) ) )
            console.log(CustsInfo)                
        } else {
            
        }
    }).catch(err => {            
        console.log('err', err)
    });
    }
    const GetCustInfo_ = (no_) => { 
        setCustsInfoFromSearch( [] )
        setCustsInfoFromSearch( CustsInfo.filter( CustsInfo => CustsInfo.No.includes( no_ ) ) )        
        console.log( CustsInfoFromSearch )
        console.log( CustsInfoFromSearch[0].No )
        handleCloseshowCustSearch()
    }
    const DDL_RelpairStatus = () => { 
        const [RepairStatus, setRepairStatus] = useState([])
        useEffect(async () => {
            const res = await axios({
                headers: {
                    "Content-Type": "application/json",
                    "If-Match": "*"
                },
                method: "get",
                url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/repair_status",
                auth: {
                    username: 'TPPADMIN',
                    password: 'P@ssw0rd@1'
                }
            }).then(res => {
                if (res.status == 200) {
                    setRepairStatus( JSON.parse(  JSON.stringify( res.data.value ) ) )
                    console.log(RepairStatus)                
                } else {
                    
                }
            }).catch(err => {            
                console.log('err', err)
            });
        },[])
        RepairStatus.map((element)=>{
            return(                                                    
                <option key={uuid()} value={element.Code}>
                    {element.Code+`: `+element.Description}
                </option>
                    ) 
                }
            )
    }
    return (<>
        <Container fluid style={{width:"120%"}}>
            <Row className="service_order_rowForm" style={{width:"110%", paddingLeft:"0px"}}>
                <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <div className="MainTitle">
                        SERVICE ORDERS
                    </div>                           
                </Col>
                <Col sm={6} className="CreateServiceOrderColItem ColItemright" style={{textAlign:"right !important"}}>                      
                    <Button variant="primary" className='CreateServiceOrder_buttun' onClick={handleCreateCustShow}>Create Customer</Button>&nbsp;                
                    <Button variant="primary" className='CreateServiceOrder_buttun' onClick={handleShow}>Attach files</Button>&nbsp; 
                    <Button variant="primary" className='CreateServiceOrder_buttun'>Print Tax Invoice/Receipt</Button>&nbsp; 
                    <Button variant="primary" className='CreateServiceOrder_buttun'>Print Repair Form</Button>&nbsp; 
                    <Button className='CreateServiceOrder_buttun CreateServiceOrderbtn-secondary'>Post Sales Invoice</Button>&nbsp;
                    <Button className='CreateServiceOrder_buttun CreateServiceOrderbtn-secondary'>Save</Button>
                </Col>                
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft" style={{paddingTop: "2%"}}>
                    <label className="required SubMainTitle">General</label>
                    <hr />
                </Col>
            </Row>                                                        
            <Row className="service_order_rowForm"  style={{marginTop: "2%"}}>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="No" className="required">No.</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="No" id="No" 
                        className="required CreateServiceOrderTB" 
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].No : ""}
                        placeholder="No"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="ContactName" className="required">Contact Name</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ContactName" id="ContactName" 
                        className="required CreateServiceOrderTB" 
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Contact : ""} placeholder="Contact Name"
                            />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="Description" className="required">Description</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Description" id="Description" 
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Description : ""}
                        className="required CreateServiceOrderTB" placeholder="Description"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="PhoneNo" className="required">Phone No.</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="PhoneNo" id="PhoneNo" 
                        className="required CreateServiceOrderTB" placeholder="Phone No"                          
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Phone_No : ""}
                            />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="CustomerNo" className="required">Customer No.</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="CustomerNo" id="CustomerNo"
                        className="required CreateServiceOrderCustNoSearchTB"                          
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Customer_No : ""}
                         placeholder="Customer No"
                           
                             />&nbsp;
                            <Button variant="primary" style={{width: "2.5rem" }}  className='CreateServiceOrder_buttun'
                             onClick={handleShowshowCustSearch}>Search
                            </Button>
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="CreateServiceOrderType" className="required">Service Order Type</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                         <select className="custom-select select_control"
                            id="CreateServiceOrderType" 
                            name="CreateServiceOrderType" 
                            ref={refServiceOrderType_Val} onChange={SearchValueFieldChange}>
                            {
                                useEffect(async () => {
                                    const res = await axios({
                                        headers: {
                                            "Content-Type": "application/json",
                                            "If-Match": "*"
                                        },
                                        method: "get",
                                        url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/service_order_type",
                                        auth: {
                                            username: 'TPPADMIN',
                                            password: 'P@ssw0rd@1'
                                        }
                                    }).then(res => {
                                        if (res.status == 200) {
                                            setServiceOrderType( JSON.parse(  JSON.stringify( res.data.value ) ) )
                                            console.log(ServiceOrderType)                
                                        } else {
                                            
                                        }
                                    }).catch(err => {            
                                        console.log('err', err)
                                    });
                                },[])
                            }
                            {
                            ServiceOrderType.map((element)=>{
                                return(                                                    
                                    <option key={uuid()} value={element.Code}>
                                        {element.Code+`: `+element.Description}
                                    </option>
                                        ) 
                                    }
                                )
                            } 
                         </select>
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="CustomerName" className="required">CustomerName</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text"                          
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Customer_Name : ""} name="CustomerName" id="CustomerName" 
                        className="required CreateServiceOrderTB" placeholder="Customer Name"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="Status" className="required">Status</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Status" id="Status" 
                        className="required CreateServiceOrderTB" placeholder="Status" />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="Address" className="required">Address</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Address" id="Address"                           
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Address : ""}
                        className="required CreateServiceOrderTB" placeholder="Address"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">  
                    <label htmlFor="ReleaseStatus" className="required">Release Status</label>                                       
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="ReleaseStatus" id="ReleaseStatus" 
                    className="required CreateServiceOrderTB" placeholder="Release Status"
                            />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="Address2" className="required">Address2</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Address2" id="Address2"                           
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Address_2 : ""} 
                        className="required CreateServiceOrderTB" placeholder="Address2"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">  
                    <label htmlFor="OrderDate" className="required">Order Date</label>                                       
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="OrderDate" id="OrderDate" 
                    className="required CreateServiceOrderTB" placeholder="OrderDate"
                            />
                    </div>
                </Col>                                                               
            </Row>   
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="City" className="required">City</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="City" id="City"                           
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].City : ""} 
                        className="required CreateServiceOrderTB" placeholder="City"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">  
                    <label htmlFor="OrderTime" className="required">OrderTime</label>                                       
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                <div className="form-group">                                            
                    <input type="text" name="OrderTime" id="OrderTime" 
                    className="required CreateServiceOrderTB" placeholder="Order Time"
                            />
                    </div>
                </Col>                                                               
            </Row>   
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="PostCode" className="required">Post Code</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="PostCode" id="PostCode"                           
                        value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].Post_Code : ""} 
                        className="required CreateServiceOrderTB" placeholder="Post Code"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">  
                    <label htmlFor="SalesInvoice<" className="required">Sales Invoice</label>                                       
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="SalesInvoice" id="SalesInvoice"
                        className="required CreateServiceOrderTB" placeholder="Sales Invoice"
                                />
                    </div>
                </Col>                                                               
            </Row>       
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="Email" className="required">Email</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="Email" id="Email"
                         className="required CreateServiceOrderTB" placeholder="Email"                           
                         value={CustsInfoFromSearch.length>0 ? CustsInfoFromSearch[0].E_Mail : ""}
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">  
                    <label htmlFor="Sendto365BC" className="required">Post Sales Invoice</label>                                       
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="checkbox" id="Sendto365BC" />
                    </div>
                </Col>                                                               
            </Row>                                                   

            <Row className="service_order_rowForm" style={{paddingTop:"1%"}}>
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label className="required SubMainTitle">Service Item Line</label>
                    <hr />
                </Col>
            </Row>                                                        
            <Row className="service_order_rowForm">
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft"> 
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
       useEffect( () => {
           const res =  axios({
               headers: {
                   "Content-Type": "application/json",
                   "If-Match": "*"
               },
               method: "get",
               url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/repair_status",
               auth: {
                   username: 'TPPADMIN',
                   password: 'P@ssw0rd@1'
               }
           }).then(res => {
               if (res.status == 200) {
                   setRepairStatus( JSON.parse(  JSON.stringify( res.data.value ) ) )
                   console.log(RepairStatus)                
               } else {
                   
               }
           }).catch(err => {            
               console.log('err', err)
           });
       },[])
       
       }
                                        {
                                            CustsInfoFromSearch.map((element)=>{
                                                return(
                                                    <tr key={uuid()}>                                
                                                        <td>{element.No}</td>
                                                        <td>{element.Item_No}</td>
                                                        <td>-</td>
                                                        <td>{element.Serial_No}</td>
                                                        <td>{element.Description}</td>
                                                        <td>
                                                            <div className="form-group">   
                                                                <select className="custom-select select_control"
                                                                    id="RelpairStatus" 
                                                                     name="RelpairStatus" 
                                                                    ref={refRepairStatus_Val} 
                                                                    onChange={SearchValueFieldChange}>     
                                                                    {
                                                                    RepairStatus.map((element)=>{
                                                                        return(                                                    
                                                                            <option key={uuid()} value={element.Code}>
                                                                                {element.Code+`: `+element.Description}
                                                                            </option>
                                                                                ) 
                                                                            }
                                                                        )
                                                                    }
                                                                    
                                                                </select>

                                                            </div>

                                                        </td>
                                                        <td>{element.Warranty}</td>
                                                        <td><input type='checkbox' /></td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>{element.Warranty_Starting_Date_Parts}</td>
                                                        <td>{element.Warranty_Ending_Date_Parts}</td>
                                                        <td>-</td>
                                                        <td>{element.Warranty_Starting_Date_Labor}</td>
                                                        <td>{element.Warranty_Ending_Date_Labor}</td>
                                                        <td>-</td>                                                    
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
                    <Col sm={10} className="CreateServiceOrderColItem CreateServiceOrderColItemleft" style={{paddingTop:"0%", marringTop:"0%"}}>
                        <label className="required SubMainTitle">Invoice Line</label>
                        <hr />
                    </Col>
                    <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft" style={{paddingTop:"0%", marringTop:"0%"}}>
                    <Button className='CreateServiceOrder_buttun CreateServiceOrderbtn-secondary'
                        style={{width:"3rem", height:"1.5rem", padding:"0", paddingBottom:"0rem"}}
                        >Add</Button>                           
                    </Col>                        
                </Row>                                                        
            <Row className="service_order_rowForm">
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">  
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
                        dataItemLine.map( ( element )=>{
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
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label className="required SubMainTitle">Invoicing</label>
                    <hr />
                </Col>
            </Row>                                                        
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="BilltoCustomerNo" className="required">Bill-to Customer No.</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="BilltoCustomerNo"
                        
                        id="BilltoCustomerNo"
                            className="required CreateServiceOrderTB" placeholder="Bill-to Customer No"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="BilltoCity" className="required">Bill-to City</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="BilltoCity" id="BilltoCity"
                            className="required CreateServiceOrderTB" placeholder="Bill-to City"
                            />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="BilltoName" className="required">Bill-to Name</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="BilltoName" id="BilltoName" 
                        className="required CreateServiceOrderTB" placeholder="Bill-to Name"
                            />
                    </div>
                </Col> 
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="BilltoPostCode" className="required">Bill-to Post Code</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="BilltoPostCode" 
                        id="BilltoPostCode" className="required CreateServiceOrderTB" placeholder="Bill-to Post Code"
                            />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="BilltoAddress" className="required">Bill-to Address</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="BilltoAddress" 
                        id="BilltoAddress" 
                        className="required CreateServiceOrderTB" placeholder="Bill-to Address"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="BilltoPhoneNo" className="required">Bill-to Phone No.</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="BilltoPhoneNo"
                            id="BilltoPhoneNo" className="required CreateServiceOrderTB" placeholder="Bill-to Phone No"
                            />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="BilltoAddress2" className="required">Bill-to Address 2</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="BilltoAddress2" 
                        id="BilltoAddress2" className="required CreateServiceOrderTB" placeholder="Bill-to Address 2"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="BilltoEmail" className="required">Bill-to Email</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="BilltoEmail" id="BilltoEmail" className="required" placeholder="Bill-to Email"
                            />
                    </div>
                </Col>                                                               
            </Row>                                                                                                                             
        </Container>
        <Container fluid style={{paddingTop:"1%"}}> 
            <Row className="service_order_rowForm">
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label className="required SubMainTitle">Ship to</label>
                    <hr />
                </Col>
            </Row>                                                        
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="ShiptoCustomerNo" className="required">Ship-to Customer No.</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ShiptoCustomerNo"                             
                        id="ShiptoCustomerNo"
                            className="required CreateServiceOrderTB" placeholder="Ship-to Customer No"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="ShiptoCity" className="required">Ship-to City</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ShiptoCity" id="ShiptoCity"
                            className="required CreateServiceOrderTB" placeholder="Ship-to City"
                            />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="ShiptoName" className="required">Ship-to Name</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ShiptoName" id="ShiptoName" 
                        className="required CreateServiceOrderTB" placeholder="Ship-to Name"
                            />
                    </div>
                </Col> 
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="ShiptoPostCode" className="required">Ship-to Post Code</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ShiptoPostCode" 
                        id="ShiptoPostCode" className="required CreateServiceOrderTB" placeholder="Ship-to Post Code"
                            />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="ShiptoAddress" className="required">Ship-to Address</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ShiptoAddress" 
                        id="ShiptoAddress" 
                        className="required CreateServiceOrderTB" placeholder="Ship-to Address"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="ShiptoPhoneNo" className="required">Ship-to Phone No.</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ShiptoPhoneNo"
                            id="ShiptoPhoneNo" className="required CreateServiceOrderTB" placeholder="Ship-to Phone No"
                            />
                    </div>
                </Col>                                                               
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                    <label htmlFor="ShiptoAddress2" className="required">Ship-to Address 2</label>                                            
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">                                            
                        <input type="text" name="ShiptoAddress2" 
                        id="ShiptoAddress2" className="required CreateServiceOrderTB" placeholder="Ship-to Address 2"
                            />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                                                                
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    
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
                        <Col sm={6} className="CreateServiceOrderColItem ColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CustomerNameSearch" id="CustomerNameSearch" 
                                className="required CreateServiceOrderCustNameSearchTB"
                                placeholder="Customer Name" ref={textCustName} />&nbsp;
                                <Button variant="primary"  className='CreateServiceOrder_buttun' onClick={GetCustInfo}>Search
                                </Button>
                            </div>
                        </Col>                                                              
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft"> 
                            <Table striped bordered hover style={{display: CustsInfo.length>0 ? 'block' : 'none', width:'100%' }}>
                                <thead>
                                    <tr>
                                        <th style={{width: '10%'}}>No.</th>
                                        <th style={{width: '90%'}}>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    CustsInfo.map( (element)=>{
                                        return(
                                            <tr key={uuid()}>                                
                                                <td><Link 
                                                    onClick={() => GetCustInfo_(element.No)}
                                                    className="CreateServiceOrder_Menu" to={"/MainServices/CreateServiceOrder/"+serialno}>
                                                        {element.No}
                                                    </Link></td>
                                                <td className="CreateServiceOrder_Menu">{element.Name}</td>
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
                                    <Button variant="primary" style={{width:'3rem'}} className='CreateServiceOrder_buttun'
                                    onClick={GetCustInfo}>Delete
                                    </Button>
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" style={{width:'3rem'}} className='CreateServiceOrder_buttun'
                            onClick={GetCustInfo}>Add
                            </Button>
                        </Col>                                                             
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft"> 
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
                        <Col sm={10} className="CreateServiceOrderColItem CreateServiceOrderColItemleft"
                            style={{paddingTop:"0.2rem", backgroundColor:"#e9ecef"}}>                                        
                            <h5>Create Customer</h5>
                        </Col>
                        <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft" 
                        style={{paddingTop:"0.2rem", backgroundColor:"#e9ecef",marginLeft:"0rem", paddingLeft:"1.1rem"}}>                                        
                            <Button className='CreateServiceOrder_buttun CreateServiceOrderbtn-secondary' style={{width:"3.5rem"}}>Save</Button>
                        </Col>                            
                    </Row>
                    <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CreateCustCustomerName" className="required">Customer Name</label>                                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CreateCustCustomerName" id="CreateCustCustomerName" 
                                className="required CreateServiceOrderTB_Small" placeholder="Customer Name"
                                    />
                            </div>
                        </Col>
                        <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CreateCustEmail" className="required">Email</label>                                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CreateCustEmail" id="CreateCustEmail"
                                    className="required CreateServiceOrderTB_Small" placeholder="Email"
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CreateCustAddress" className="required">Address</label>                                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CreateCustAddress" id="CreateCustAddress" 
                                className="required CreateServiceOrderTB_Small" placeholder="Address"
                                    />
                            </div>
                        </Col>
                        <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CreateCustContactName" className="required">Contact Name</label>                                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CreateCustContactName" id="CreateCustContactName"
                                    className="required CreateServiceOrderTB_Small" placeholder="Contact Name"
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CreateCustAddress2" className="required">Address</label>                                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CreateCustAddress2" id="CreateCustAddress2" 
                                className="required CreateServiceOrderTB_Small" placeholder="Address"
                                    />
                            </div>
                        </Col>
                        <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CreateCustPhoneNo" className="required">Phone No.</label>                                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CreateCustPhoneNo" id="CreateCustPhoneNo"
                                    className="required CreateServiceOrderTB_Small" placeholder="Phone No"
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CreateCustCity" className="required">City</label>                                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CreateCustCity" id="CreateCustCity" 
                                className="required CreateServiceOrderTB_Small" placeholder="City"
                                    />
                            </div>
                        </Col>
                        <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CreateCustVatRegis" className="required">Vat Registration No.</label>                                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CreateCustVatRegis" id="CreateCustVatRegis"
                                    className="required CreateServiceOrderTB_Small" placeholder="Vat Registration No."
                                    />
                            </div>
                        </Col>                                                               
                    </Row>
                    <Row className="service_order_rowForm" style={{paddingTop:"1.2rem"}}>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            <label htmlFor="CreateCustPostCode" className="required">Post Code</label>                                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">                                            
                                <input type="text" name="CreateCustPostCode" id="CreateCustPostCode" 
                                className="required CreateServiceOrderTB_Small" placeholder="Post Code"
                                    />
                            </div>
                        </Col>
                        <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">                                        
                            
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">                                
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

const CreateServiceOrder = ()=>{ 
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
                                <Route path="/MainServices/CreateServiceOrder/MainComponent/:serialno" exact> 
                                    <MainComponent  />
                                </Route>
                                <Route path="/MainServices/ServiceOrder" component={ServiceOrder} />   
                                {/* <Route path="/MainServices/CheckProduct/ResultSearch" component={ResultSearch} /> */}
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