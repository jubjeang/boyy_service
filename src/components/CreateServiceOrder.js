import React, { useState, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import { Col, Row } from "react-bootstrap";
import { Switch, Route, Link, useParams } from 'react-router-dom';
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
import moment from 'moment'
//import { AiOutlineSearch } from 'react-icons/fa';


const dataAttachFiles = [
    { No: "1", FileName: "Pic_Repair_1.JPG", AttachDate: "9-28-21 17:45" },
    { No: "2", FileName: "Pic_Repair_2.JPG", AttachDate: "9-29-21 17:46" },
    { No: "3", FileName: "Pic_Repair_3.JPG", AttachDate: "9-30-21 17:47" },
    { No: "4", FileName: "Pic_Repair_4.JPG", AttachDate: "10-1-21 17:48" },
    { No: "5", FileName: "Pic_Repair_5.JPG", AttachDate: "10-2-21 17:49" }
]
const MainComponent = () => {
    const { serialno } = useParams();
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
    let textCustName = React.createRef()
    //*********Initial GetCustInfo  */
    useEffect(async () => {
        const res = await axios({
            headers: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
            method: "get",
            url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/service_item?$filter=Serial_No eq '" + serialno + "'",
            auth: {
                username: 'TPPADMIN',
                password: 'P@ssw0rd@1'
            }
        }).then(res => {
            if (res.status == 200) {
                setCustsInfoFromSearch(JSON.parse(JSON.stringify(res.data.value)))
                //console.log(CustsInfoFromSearch)                
            } else {

            }
        }).catch(err => {
            console.log('err', err)
        });
    }, [])
    //*********End Initial GetCustInfo  */
    const GetCustInfo = () => {
        //setCustsInfo([])
        const CustName = textCustName.current.value
        console.log(CustName);
        const url_ = "http://office.triplepcloud.com:21012/Boyy_Dev/ODataV4/Company('CRONUS - LS Central')/API_Customer?$filter=Name eq '" + CustName + "*'"
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
                setCustsInfo(JSON.parse(JSON.stringify(res.data.value)))
                console.log(CustsInfo)
            } else {

            }
        }).catch(err => {
            console.log('err', err)
        });
    }
    const GetCustInfo_ = (no_) => {
        setCustsInfoFromSearch([])
        setCustsInfoFromSearch(CustsInfo.filter(CustsInfo => CustsInfo.No.includes(no_)))
        handleCloseshowCustSearch()
    }
    const refDescription = React.createRef()
    const refCustomerNo = React.createRef()
    const refService_Order_Type = React.createRef()
    const refShiptoName = React.createRef()
    const refShiptoAddress = React.createRef()
    const refShiptoAddress2 = React.createRef()
    const refShiptoCity = React.createRef()
    const refShiptoPostCode = React.createRef()
    const refShiptoPhoneNo = React.createRef()
    //Save Data->ServiceItemLine
    const refService_Item_No = React.createRef()
    const refRepair_Status_Code = React.createRef()
    const refFault_Area_Code = React.createRef()
    const refSymptom_Code = React.createRef()
    const refFault_Code = React.createRef()

    //General 
    const current = new Date()
    const date_ = `${current.getFullYear()}-${  ("0" + ( current.getMonth() + 1 ) ).slice(-2)  }-${ ("0" + current.getDate() ).slice(-2) }`
    var time_ = moment().format(' hh:mm:ss.SS')    
    const [Status_Val, setStatus_Val] = useState('Pending')
    const [Order_Date_Val, setOrder_Date_Val] = useState( date_ )
    const [Order_Time_Val, setOrder_Time_Val] = useState(time_)    
    //Invoice Line
    const [InvoiceLineDataAll, setInvoiceLineDataAll] = useState([])
    const [InvoiceLineNoData, setInvoiceLineNoData] = useState([])
    const [InvoiceLine_No, setInvoiceLine_No] = useState(0)
    
    const [InvoiceLineNo, setInvoiceLineNo] = useState('')
    const [Item_Desc_Val, setItem_Desc_Val] = useState('')
    
    
    const [InvoiceLineAPI_Data, setInvoiceLineAPI_Data] = useState([])
    const [ResponseData, setResponseData] = useState([])   
    const [Fault_Area_Selected, setFault_Area_Selected] = useState('')
  
    const [DDL_ItemType_Selected, setDDL_ItemType_Selected] = useState('')
    const [DDL_ItemTypeByText_Selected, setDDL_ItemTypeByText_Selected] = useState('')
    

    const GetItemNo = (e) => {
        let url_ = ""        
        setDDL_ItemType_Selected( e.target.value )
        setDDL_ItemTypeByText_Selected( e.target.options[e.target.selectedIndex].text )
        
        if (e.target.value == 'Service') {
            url_ = "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/item/?$filter=Type eq 'Service'"
        }
        else if (e.target.value == 'gl_account') {
            url_ = "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/gl_account"
        }
        else if (e.target.value == 'item_charge') {
            url_ = "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/item_charge"
        }
        else {
            setInvoiceLineNoData([])
        }
        //console.log(url_)
        const res = axios({
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
                setInvoiceLineNoData(JSON.parse(JSON.stringify(res.data.value)))
                // setInvoiceLineNo( ( prevItems ) => 
                //     [            
                //         JSON.parse(  JSON.stringify( res.data.value ) ),...prevItems 
                //     ]
                // )

                // console.log( InvoiceLineNo )                

            } else {

            }
        }).catch(err => {
            console.log('err', err)
        })// axios
    }
    const [DDL_ItemNo_Selected, setDDL_ItemNo_Selected] = useState('')
    const SetItemDesc = (e) => {                 
        const arrItem = (e.target.value).toString().split(':')        
        setDDL_ItemNo_Selected(e.target.value)
        setItem_Desc_Val( arrItem[1].trim() )
        setInvoiceLineNo( arrItem[0].trim() )
    }         
    const [Branch_Selected, setBranch_Selected] = useState('')
    const Set_Branch_Selected = (e) =>{ 
        setBranch_Selected( e.target.value )
    }
    const [CreateServiceOrderType_Selected,setCreateServiceOrderType_Selected] = useState('')
    const Set_CreateServiceOrderType_Selected = (e) =>{ 
        setCreateServiceOrderType_Selected( e.target.value )
    }
    const [RelpairStatus_Selected,setRelpairStatus_Selected] = useState('') 
    const Set_RelpairStatus_Selected = (e) =>{ 
        setRelpairStatus_Selected( e.target.value )
    }
    const [SymptomCode_Selected,setSymptomCode_Selected] = useState('') 
    const Set_SymptomCode_Selected = (e) =>{ 
        setSymptomCode_Selected( e.target.value ) 
        //fault code
        const res = axios({
            headers: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
            method: "get",
            url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/fault_code?$filter=Fault_Area_Code eq '"+Fault_Area_Selected+"' and Symptom_Code eq '"+e.target.value+"'" ,
            auth: {
                username: 'TPPADMIN',
                password: 'P@ssw0rd@1'
            }
        }).then(res => {
            if (res.status == 200) {
                setFaultCode(JSON.parse(JSON.stringify(res.data.value)))
            } else {

            }
        }).catch(err => {
            console.log('err', err)
        });

    }
    const [Fault_Code_Selected,setFault_Code_Selected] = useState('') 
    const Set_Fault_Code_Selected = (e) =>{ 
        setFault_Code_Selected( e.target.value )
    }  

    const SetDDL_Fault_Area_Selected = (e) =>{                    
         setFault_Area_Selected( e.target.value )
    }    
    const refItem_Quantity = React.createRef()
    const refItem_LineDiscount = React.createRef()
    const refItem_LineDiscountAmount = React.createRef()
    const refDDL_ItemType = React.createRef()
    const refDDL_ItemNo = React.createRef()
    const [ApiInvoiceLine_No, setApiInvoiceLine_No] = useState(10000)
    const AddInvoiceLine = () => {         
        setApiInvoiceLine_No( ( ApiInvoiceLine_No+10000) )
        setInvoiceLineDataAll( ( prevItems ) => [
            {
                Document_Type: 'Service'
                , Line_No: InvoiceLine_No
                , Type: DDL_ItemType_Selected
                , No: InvoiceLineNo
                , Description: Item_Desc_Val
                , Quantity: refItem_Quantity.current.value                               
                , UnitPriceExclVAT: <div id={'lblUmitPriceExclVat_'+InvoiceLine_No}></div>
                , LineDiscount: refItem_LineDiscount.current.value
                , LineDiscountAmount: refItem_LineDiscountAmount.current.value
                , LineAmountExclVAT: <div id={'lblLineAmountExclVAT_'+InvoiceLine_No} name={'lblLineAmountExclVAT_'+InvoiceLine_No} ></div>
                , AmountIncludingVAT: <div id={'lblAmountIncludingVAT_'+InvoiceLine_No} name={'lblAmountIncludingVAT_'+InvoiceLine_No}></div>
            }, ...prevItems])
        setInvoiceLineAPI_Data( ( prevItems ) => [
            {
                Document_Type: "Service",
                Line_No: ApiInvoiceLine_No,
                Type: DDL_ItemTypeByText_Selected,
                No: InvoiceLineNo,
                Quantity: parseInt(refItem_Quantity.current.value),
                Line_Discount_Percent: parseInt(refItem_LineDiscount.current.value),
                Line_Discount_Amount: parseInt(refItem_LineDiscountAmount.current.value),
            }, ...prevItems]) 
    }
    //PostSalesInvoice
    const PostSalesInvoice =()=>    { 
        
        const No_ = document.getElementById("No").value
        const data={No: No_} 
        let url=""
        url = "http://office.triplepcloud.com:27053/Boyy_UAT/ODataV4/APIPortal_PostSalesInvoice?company=26a95657-849b-ec11-a5c9-00155d040808"
         console.log( data )   
        // console.log( url )
        const ckPostSalesInvoice = eval( document.getElementById("ckPostSalesInvoice") )
        
        axios({
            header: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
                data: data,
                method: 'post',       
                url: url,
                auth: {
                username: 'TPPADMIN',
                password: 'P@ssw0rd@1'
            }
        }).then(res => {
            if (res.status == 201) {
                const outpu_ = JSON.parse( JSON.stringify( res.data ) ) 
                console.log(outpu_)                                
                if ( outpu_.Result == true ) ckPostSalesInvoice.checked = true                
            } else {
                 console.log( res.status )
                // console.log( JSON.parse(JSON.stringify(res.data)) )
            }
        }).catch(err => {
            console.log('err', err)
        });           
    } 
    //Save Data
    const SendData =()=>
    {
        const data={
            Description: refDescription.current.value,			
            Customer_No: refCustomerNo.current.value,			
            Service_Order_Type: refService_Order_Type.current.value,			
            Status: Status_Val,			
            Order_Date: Order_Date_Val,			
            Order_Time: Order_Time_Val,			
            Ship_to_Name: refShiptoName.current.value,			
            Ship_to_Address: refShiptoAddress.current.value,			
            Ship_to_Address_2: refShiptoAddress2.current.value,			
            Ship_to_City: refShiptoCity.current.value,			
            Ship_to_Post_Code: refShiptoPostCode.current.value,			
            Ship_to_Phone_No: refShiptoPhoneNo.current.value,
            Service_Item_No: refService_Item_No.current.value,
            service_item_line: [{
                Line_No: 10000,		
                Service_Item_No: refService_Item_No.current.value,		
                Repair_Status_Code: refRepair_Status_Code.current.value,		
                Fault_Area_Code: refFault_Area_Code.current.value,		
                Symptom_Code: refSymptom_Code.current.value,		
                Fault_Code: refFault_Code.current.value
            }],
            service_invoice_line:InvoiceLineAPI_Data
        }
        console.log( data )
        axios({
        header: {
            "Content-Type": "application/json",
            "If-Match": "*"
        },
            data: data,
            method: 'post',       
            url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/service_order?$expand=service_item_line,service_invoice_line",
            auth: {
            username: 'TPPADMIN',
            password: 'P@ssw0rd@1'
        }
        }).then(res => {
            if (res.status == 201) {
                //setResponseData( JSON.parse( JSON.stringify( res.data ) ) )   
                const outpu_ = JSON.parse( JSON.stringify( res.data ) ) 
                console.log(outpu_)
                document.getElementById("No").value=outpu_.No
                document.getElementById("SalesInvoice").value=outpu_.Sales_Invoice_No
                document.getElementById("Status").value=outpu_.Status                    
                
                
                for (let i = 0; i < outpu_["service_invoice_line"].length; i++) 
                {
                    document.getElementById("lblLineAmountExclVAT_"+(i)).innerHTML=outpu_["service_invoice_line"][i]["Line_Amount"]
                    document.getElementById("lblAmountIncludingVAT_"+(i)).innerHTML=outpu_["service_invoice_line"][i]["Amount_Including_VAT"]
                }
            } else {
                // console.log( res.status )
                // console.log( JSON.parse(JSON.stringify(res.data)) )
            }
        }).catch(err => {
        console.log('err', err)
    });           
    } 

    return (<>
        <Container fluid style={{ width: "100%" }}>
            <Row className="service_order_rowForm" style={{ width: "110%", paddingLeft: "0px" }}>
                <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <div className="MainTitle">
                        SERVICE ORDERS
                    </div>
                </Col>
                <Col sm={6} className="CreateServiceOrderColItem ColItemright" style={{ textAlign: "right !important" }}>
                    <Button variant="primary" className='CreateServiceOrder_buttun' onClick={handleCreateCustShow}>Create Customer</Button>&nbsp;
                    <Button variant="primary" className='CreateServiceOrder_buttun' onClick={handleShow}>Attach files</Button>&nbsp;
                    <Button variant="primary" className='CreateServiceOrder_buttun'>Print Tax Invoice/Receipt</Button>&nbsp;
                    <Button variant="primary" className='CreateServiceOrder_buttun'>Print Repair Form</Button>&nbsp;
                    <Button className='CreateServiceOrder_buttun CreateServiceOrderbtn-secondary' onClick={PostSalesInvoice}>Post Sales Invoice</Button>&nbsp;
                    <Button className='CreateServiceOrder_buttun CreateServiceOrderbtn-secondary' onClick={SendData}>Save</Button>
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft" style={{ paddingTop: "2%" }}>
                    <label className="required SubMainTitle CreateServiceOrder_label">General</label>
                    <hr />
                </Col>
            </Row>
            <Row className="service_order_rowForm" style={{ marginTop: "2%" }}>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="No" className="required CreateServiceOrder_label">No.</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="No" id="No"                             
                            className="required CreateServiceOrderTB"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].No : ""}
                            placeholder="No"
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="ContactName" className="required CreateServiceOrder_label">Contact Name</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="ContactName" id="ContactName"
                            className="required CreateServiceOrderTB"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Contact : ""} placeholder="Contact Name"
                        />
                    </div>
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="Description" className="required CreateServiceOrder_label">Description</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="Description" id="Description"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Description : ""} 
                            ref={refDescription} 
                            className="required CreateServiceOrderTB" placeholder="Description"
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="PhoneNo" className="required CreateServiceOrder_label">Phone No.</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="PhoneNo" id="PhoneNo"
                            className="required CreateServiceOrderTB" placeholder="Phone No"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Phone_No : ""}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="CustomerNo" className="required CreateServiceOrder_label">Customer No.</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group input-icon-wrap">                   
                        <input type="text" name="CustomerNo" id="CustomerNo" className="required CreateServiceOrderTB input-with-icon" 
                            ref={refCustomerNo}  
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Customer_No : ""}
                            placeholder="Customer No" 
                            style={{height:"1.6rem"}}
                            />
                        <span className="input-icon"  style={{height:"2rem"}}>
                            <FaSistrix onClick={handleShowshowCustSearch} style={{cursor: "pointer"}} />        
                        </span> 
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="CreateServiceOrderType" className="required CreateServiceOrder_label">Service Order Type</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                    {/* <select className="custom-select select_control"
                                            id="DDL_ItemType"
                                            name="DDL_ItemType"
                                            style={{ width: 'auto' }}
                                            onChange={GetItemNo}> */}
                        <select className="custom-select select_control"
                            id="DDL_CreateServiceOrderType"
                            name="DDL_CreateServiceOrderType"
                            ref={refService_Order_Type} 
                            value={CreateServiceOrderType_Selected} 
                            onChange={Set_CreateServiceOrderType_Selected} 
                            >
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
                                            setServiceOrderType(JSON.parse(JSON.stringify(res.data.value)))
                                        } else {

                                        }
                                    }).catch(err => {
                                        console.log('err', err)
                                    });
                                }, [])
                            }
                            <option key={uuid()}></option>
                            {
                                ServiceOrderType.map((element) => {
                                    return (
                                        <option key={uuid()} value={element.Code}>
                                            {element.Code + `: ` + element.Description}
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
                    <label htmlFor="CustomerName" className="required CreateServiceOrder_label">CustomerName</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Customer_Name : ""} name="CustomerName" id="CustomerName"
                            className="required CreateServiceOrderTB" placeholder="Customer Name"
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="Status" className="required CreateServiceOrder_label">Status</label>
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
                    <label htmlFor="Address" className="required CreateServiceOrder_label">Address</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="Address" id="Address"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Address : ""}
                            className="required CreateServiceOrderTB" placeholder="Address"
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="ReleaseStatus" className="required CreateServiceOrder_label">Release Status</label>
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
                    <label htmlFor="Address2" className="required CreateServiceOrder_label">Address2</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="Address2" id="Address2"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Address_2 : ""}
                            className="required CreateServiceOrderTB" placeholder="Address2"
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="OrderDate" className="required CreateServiceOrder_label">Order Date</label>
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
                    <label htmlFor="City" className="required CreateServiceOrder_label">City</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="City" id="City"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].City : ""}
                            className="required CreateServiceOrderTB" placeholder="City"
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="OrderTime" className="required CreateServiceOrder_label">OrderTime</label>
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
                    <label htmlFor="PostCode" className="required  CreateServiceOrder_label">Post Code</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="PostCode" id="PostCode"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Post_Code : ""}
                            className="required CreateServiceOrderTB" placeholder="Post Code"
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="SalesInvoice<" className="required CreateServiceOrder_label">Sales Invoice</label>
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
                    <label htmlFor="Email" className="required CreateServiceOrder_label">Email</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="Email" id="Email"
                            className="required CreateServiceOrderTB" placeholder="Email"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].E_Mail : ""}
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="ckPostSalesInvoice" className="required CreateServiceOrder_label">Post Sales Invoice</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="checkbox" id="ckPostSalesInvoice" name="ckPostSalesInvoice" />
                    </div>
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="Branch" className="required CreateServiceOrder_label">Branch</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <select className="custom-select select_control"
                            id="DDL_Branch"
                            name="DDL_Branch"
                            ref={refServiceOrderType_Val} 
                            style={{ width: "auto" }} 
                            value={Branch_Selected}                            
                            onChange={Set_Branch_Selected} 
                            >
                            {
                                useEffect(async () => {
                                    const res = await axios({
                                        headers: {
                                            "Content-Type": "application/json",
                                            "If-Match": "*"
                                        },
                                        method: "get",
                                        url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/get_company",
                                        auth: {
                                            username: 'TPPADMIN',
                                            password: 'P@ssw0rd@1'
                                        }
                                    }).then(res => {
                                        if (res.status == 200) {
                                            setBranch(JSON.parse(JSON.stringify(res.data.value)))

                                        } else {

                                        }
                                    }).catch(err => {
                                        console.log('err', err)
                                    });
                                }, [])
                            }
                            <option></option>
                            {
                                Branch.map((element) => {
                                    return (
                                        <option key={uuid()} value={element.Id}>
                                            {element.Name}
                                        </option>
                                    )
                                }
                                )
                            }
                        </select>
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="Sendto365BC" className="required CreateServiceOrder_label">Accessories included with handbags/SLG</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-check form-check-inline">
                        <input type="checkbox" id="Card" />
                        &nbsp;<label className="form-check-label CreateServiceOrder_label_DustBag" htmlFor="Card">Card</label>
                        <input type="checkbox" id="DustBag" />
                        &nbsp;<label className="form-check-label CreateServiceOrder_label_DustBag" htmlFor="DustBag">Dust Bag</label>
                        <input type="checkbox" id="Strap" />
                        &nbsp;<label className="form-check-label CreateServiceOrder_label">Strap</label>

                    </div>
                    <div className="form-check form-check-inline" style={{ verticalAlign: "middle" }}>
                        <input type="checkbox" id="Card" />
                        &nbsp;<label className="form-check-label CreateServiceOrder_label">Other</label>
                        <input type="text" name="Other_TB" id="Other_TB"
                            className="required CreateServiceOrder_Other_TB"
                            placeholder="Other"
                            style={{ width: "150rem" }} />
                    </div>
                </Col>
            </Row>

            <Row className="service_order_rowForm" style={{ paddingTop: "1%" }}>
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label className="required SubMainTitle  CreateServiceOrder_label">Service Item Line</label>
                    <hr />
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={12} style={{ width: "auto" }} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
                        <Table striped bordered hover style={{ width: "auto", overflowInline: "auto", whiteSpace: "nowrap" }}>
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
                                {  //repair_status 
                                    useEffect(() => {
                                        const res = axios({
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
                                                setRepairStatus(JSON.parse(JSON.stringify(res.data.value)))
                                            } else {

                                            }
                                        }).catch(err => {
                                            console.log('err', err)
                                        });
                                    }, [])
                                }
                                {   //fault_area
                                    useEffect(() => {
                                        const res = axios({
                                            headers: {
                                                "Content-Type": "application/json",
                                                "If-Match": "*"
                                            },
                                            method: "get",
                                            url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/fault_area",
                                            auth: {
                                                username: 'TPPADMIN',
                                                password: 'P@ssw0rd@1'
                                            }
                                        }).then(res => {
                                            if (res.status == 200) {
                                                setFaultArea(JSON.parse(JSON.stringify(res.data.value)))
                                            } else {

                                            }
                                        }).catch(err => {
                                            console.log('err', err)
                                        });
                                    }, [])
                                }
                                {   //symptom_code
                                    useEffect(() => {
                                        const res = axios({
                                            headers: {
                                                "Content-Type": "application/json",
                                                "If-Match": "*"
                                            },
                                            method: "get",
                                            url: "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/symptom_code",
                                            auth: {
                                                username: 'TPPADMIN',
                                                password: 'P@ssw0rd@1'
                                            }
                                        }).then(res => {
                                            if (res.status == 200) {
                                                setSymptomCode(JSON.parse(JSON.stringify(res.data.value)))
                                            } else {

                                            }
                                        }).catch(err => {
                                            console.log('err', err)
                                        });
                                    }, [])
                                }
                                {   
                                    //fault_code
                                    //console.log( Fault_Area_Selected_FromReducer );
                                }
                                {
                                    CustsInfoFromSearch.map((element) => {
                                        return (
                                            <tr key={uuid()}>
                                                <td>{element.No}<input type="hidden" name="hiddenInput" id="hiddenInput" ref={refService_Item_No} value={element.No} /></td>
                                                <td>{element.Item_No}</td>
                                                <td>-</td>
                                                <td>{element.Serial_No}</td>
                                                <td>{element.Description}</td>
                                                <td>
                                                    <div className="form-group">
                                                        <select className="custom-select select_control"
                                                            id="DDL_RelpairStatus"
                                                            name="DDL_RelpairStatus"
                                                            ref={refRepair_Status_Code}
                                                            style={{ width: "auto" }} 
                                                            value={RelpairStatus_Selected} 
                                                            onChange={Set_RelpairStatus_Selected} 
                                                            >
                                                            <option></option>
                                                            {
                                                                RepairStatus.map((element) => {
                                                                    return (
                                                                        <option key={uuid()} value={element.Code}>
                                                                            {element.Code + `: ` + element.Description}
                                                                        </option>
                                                                    )
                                                                }
                                                                )
                                                            }
                                                        </select>
                                                    </div>
                                                </td>
                                                <td><input type='checkbox' /></td>
                                                <td>
                                                    <select className="custom-select select_control"
                                                        id="DDL_Fault_Area"
                                                        name="DDL_Fault_Area"
                                                        value={Fault_Area_Selected}
                                                        ref={refFault_Area_Code}
                                                        onChange={SetDDL_Fault_Area_Selected}
                                                        style={{ width: "auto" }}
                                                        >
                                                        <option key={uuid()}></option>
                                                        {
                                                            FaultArea.map((element) => {
                                                                return (
                                                                    <option key={uuid()} value={element.Code}>
                                                                        {element.Code + `: ` + element.Description}
                                                                    </option>
                                                                )
                                                            }
                                                            )
                                                        }
                                                    </select>
                                                </td>
                                                <td>
                                                    <select className="custom-select select_control"
                                                        id="DDL_SymptomCode"
                                                        name="DDL_SymptomCode"
                                                        ref={refSymptom_Code}
                                                        style={{ width: "auto" }} 
                                                        value={SymptomCode_Selected} 
                                                        onChange={Set_SymptomCode_Selected} 
                                                        >
                                                        <option key={uuid()}></option>
                                                        {
                                                            SymptomCode.map((element) => {
                                                                return (
                                                                    <option key={uuid()} value={element.Code}>
                                                                        {element.Code + `: ` + element.Description}
                                                                    </option>
                                                                )
                                                            }
                                                            )
                                                        }
                                                    </select>
                                                </td>
                                                <td>
                                                    <select className="custom-select select_control"
                                                        id="DDL_Fault_Code"
                                                        name="DDL_Fault_Code"
                                                        ref={refFault_Code}
                                                        style={{ width: "auto" }} 
                                                        value={Fault_Code_Selected} 
                                                        onChange={Set_Fault_Code_Selected}
                                                        >
                                                        <option key={uuid()}></option>
                                                        {
                                                            FaultCode.map((element) => {
                                                                return (
                                                                    <option key={uuid()} value={element.Code}>
                                                                        {element.Code + `: ` + element.Description}
                                                                    </option>
                                                                )
                                                            }
                                                            )
                                                        }
                                                    </select>
                                                </td>
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
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{ paddingTop: "2%" }}>
            <Row className="service_order_rowForm" style={{ paddingTop: "0%", marringTop: "0%" }}>
                <Col sm={10} className="CreateServiceOrderColItem CreateServiceOrderColItemleft" style={{ paddingTop: "0%", marringTop: "0%" }}>
                    <label className="required SubMainTitle CreateServiceOrder_label">Invoice Line</label>
                    <hr />
                </Col>
                <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft" style={{ paddingTop: "0%", marringTop: "0%" }}>
                    <Button className='CreateServiceOrder_buttun CreateServiceOrderbtn-secondary' onClick={AddInvoiceLine}
                        style={{ width: "3rem", height: "1.5rem", padding: "0", paddingBottom: "0rem" }}
                    >Add</Button>
                </Col>
            </Row>
            <Row className="service_order_rowForm" style={{ width: "100%" }}>
                <Col sm={12} style={{ width: "auto" }} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
                        <Table striped bordered hover style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>No.</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                     <th>Unit Price Excl Vat</th>
                                    <th>Line Discount %</th>
                                    <th>Line Discount Amount</th>
                                    <th>Line Amount Excl VAT</th>
                                    <th>Amount Including VAT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    InvoiceLineDataAll.map((element) => {
                                        return (
                                            <tr>
                                                <td>{element.Type}</td>
                                                <td>{element.No}</td>
                                                <td>{element.Description}</td>
                                                <td>{element.Quantity}</td>
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
                                <tr>
                                    <td>
                                        <select className="custom-select select_control"
                                            id="DDL_ItemType"
                                            name="DDL_ItemType"
                                            style={{ width: 'auto' }} 
                                            ref={refDDL_ItemType}
                                            onChange={GetItemNo} 
                                            value={DDL_ItemType_Selected}
                                            >
                                            <option></option>
                                            <option value="Service">Item</option>
                                            <option value="gl_account">G/L Account</option>
                                            <option value="item_charge">Charge (Item)</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className="custom-select select_control"
                                            id="DDL_ItemNo" name="DDL_ItemNo"
                                            style={{ width: '7rem' }} 
                                            ref={refDDL_ItemNo} 
                                            value={DDL_ItemNo_Selected}
                                            onChange={SetItemDesc}>
                                            <option key={uuid()}></option>
                                            {
                                                InvoiceLineNoData.map((element) => {                                                     
                                                    return (
                                                        <option key={uuid()} value={element.No + `: ` + element.Description}>
                                                            {element.No + `: ` + element.Description}
                                                        </option>
                                                    )
                                                }
                                                )
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" name="Item_Desc" id="Item_Desc" style={{ width: "15rem" }}
                                            className="required CreateServiceOrderTB_InvoiceLineReadOnly"
                                            defaultValue={Item_Desc_Val}
                                            readOnly="readOnly" />
                                    </td>
                                    <td>
                                        <input type="text" name="Item_Quantity" id="Item_Quantity"
                                            className="required CreateServiceOrderTB_InvoiceLine" style={{ width: "5rem" }} 
                                            ref={refItem_Quantity} 
                                            defaultValue="" />
                                    </td>                                    
                                    <td>
                                        <input type="text"  name="Item_UnitPriceExclVAT" readOnly="readOnly" id="Item_UnitPriceExclVAT" className="required CreateServiceOrderTB_InvoiceLineReadOnly" />
                                    </td>
                                    <td>
                                        <input type="text" name="Item_LineDiscount" id="Item_LineDiscount" 
                                        ref={refItem_LineDiscount}                                          
                                        className="required CreateServiceOrderTB_InvoiceLine" />
                                    </td>
                                    <td>
                                        <input type="text" 
                                        name="Item_LineDiscountAmount" 
                                        id="Item_LineDiscountAmount"  
                                        ref={refItem_LineDiscountAmount}                                        
                                        className="required CreateServiceOrderTB_InvoiceLine" />
                                    </td>
                                    <td>
                                        <input type="text" name="Item_LineAmountExclVAT" id="Item_LineAmountExclVAT" readOnly="readOnly" className="required CreateServiceOrderTB_InvoiceLineReadOnly" />
                                    </td>
                                    <td>
                                        <input type="text" name="Item_AmountIncludingVAT" id="Item_AmountIncludingVAT" readOnly="readOnly" className="required CreateServiceOrderTB_InvoiceLineReadOnly" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{ paddingTop: "3%" }}>
            <Row className="service_order_rowForm">
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label className="required SubMainTitle CreateServiceOrder_label">Invoicing</label>
                    <hr />
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="BilltoCustomerNo" className="required CreateServiceOrder_label">Bill-to Customer No.</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="BilltoCustomerNo"
                            id="BilltoCustomerNo"
                            className="required CreateServiceOrderTB"
                            placeholder="Bill-to Customer No"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Customer_No : ""}
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="BilltoCity" className="required CreateServiceOrder_label">Bill-to City</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="BilltoCity" id="BilltoCity"
                            className="required CreateServiceOrderTB" placeholder="Bill-to City"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Customer_No : ""}
                        />
                    </div>
                </Col>
            </Row>

            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="BilltoName" className="required CreateServiceOrder_label">Bill-to Name</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="BilltoName" id="BilltoName"
                            className="required CreateServiceOrderTB" placeholder="Bill-to Name"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Customer_Name : ""}
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="BilltoPostCode" className="required CreateServiceOrder_label">Bill-to Post Code</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="BilltoPostCode"
                            id="BilltoPostCode" className="required CreateServiceOrderTB"
                            placeholder="Bill-to Post Code"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Post_Code : ""}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="BilltoAddress" className="required CreateServiceOrder_label">Bill-to Address</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="BilltoAddress"
                            id="BilltoAddress"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Address : ""}
                            className="required CreateServiceOrderTB"
                            placeholder="Bill-to Address"
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="BilltoPhoneNo" className="required CreateServiceOrder_label">Bill-to Phone No.</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="BilltoPhoneNo"
                            id="BilltoPhoneNo" className="required CreateServiceOrderTB"
                            placeholder="Bill-to Phone No"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Phone_No : ""}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="BilltoAddress2" className="required CreateServiceOrder_label">Bill-to Address 2</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="BilltoAddress2"
                            id="BilltoAddress2"
                            className="required CreateServiceOrderTB"
                            placeholder="Bill-to Address 2"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Address_2 : ""}
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="BilltoEmail" className="required CreateServiceOrder_label">Bill-to Email</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="BilltoEmail"
                            id="BilltoEmail"
                            className="required"
                            placeholder="Bill-to Email"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{ paddingTop: "1%" }}>
            <Row className="service_order_rowForm">
                <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label className="required SubMainTitle CreateServiceOrder_label">Ship to</label>
                    <hr />
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="ShiptoCustomerNo" className="required CreateServiceOrder_label">Ship-to Name</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="ShiptoName" id="ShiptoName"
                            className="required CreateServiceOrderTB" placeholder="Ship-to Name" 
                            ref={refShiptoName}
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Customer_Name : ""}
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="ShiptoCity" className="required CreateServiceOrder_label">Ship-to City</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="ShiptoCity" id="ShiptoCity"
                            className="required CreateServiceOrderTB" placeholder="Ship-to City" 
                            ref={refShiptoCity} 
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].City : ""}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="ShiptoName" className="required CreateServiceOrder_label">Ship-to Address</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="ShiptoAddress" 
                            ref={refShiptoAddress} 
                            id="ShiptoAddress"
                            className="required CreateServiceOrderTB" placeholder="Ship-to Address"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Address : ""}
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="ShiptoPostCode" className="required CreateServiceOrder_label">Ship-to Post Code</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="ShiptoPostCode"
                            id="ShiptoPostCode" className="required CreateServiceOrderTB" 
                            ref={refShiptoPostCode} 
                            placeholder="Ship-to Post Code"
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Post_Code : ""}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="service_order_rowForm">
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="ShiptoAddress" className="required CreateServiceOrder_label">Ship-to Address 2</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="ShiptoAddress2"
                            id="ShiptoAddress2" className="required CreateServiceOrderTB" 
                            ref={refShiptoAddress2} 
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Address_2 : ""}
                            placeholder="Ship-to Address 2"
                        />
                    </div>
                </Col>
                <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                    <label htmlFor="ShiptoPhoneNo" className="required CreateServiceOrder_label">Ship-to Phone No.</label>
                </Col>
                <Col sm={3} className="CreateServiceOrderColItem ColItemright">
                    <div className="form-group">
                        <input type="text" name="ShiptoPhoneNo"
                            id="ShiptoPhoneNo"
                            className="required CreateServiceOrderTB"
                            placeholder="Ship-to Phone No" 
                            ref={refShiptoPhoneNo}                             
                            defaultValue={CustsInfoFromSearch.length > 0 ? CustsInfoFromSearch[0].Phone_No : ""}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
        {/* search customer */}
        <Modal show={showCustSearch} onHide={handleCloseshowCustSearch}
            centered size="ms" scrollable={true}>
            <Modal.Header>
                <Modal.Title>Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: "23rem" }}>
                <Container fluid style={{ width: "100%" }}>
                    <Row className="service_order_rowForm" style={{ marginTop: "2%" }}>
                        <Col sm={6} className="CreateServiceOrderColItem ColItemright">
                            <div className="form-group">
                                <input type="text" name="CustomerNameSearch" id="CustomerNameSearch"
                                    className="required CreateServiceOrderCustNameSearchTB"
                                    placeholder="Customer Name" ref={textCustName} />&nbsp;
                                <Button variant="primary" className='CreateServiceOrder_buttun' onClick={GetCustInfo}>Search
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <Table striped bordered hover style={{ display: CustsInfo.length > 0 ? 'block' : 'none', width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>No.</th>
                                        <th style={{ width: '90%' }}>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        CustsInfo.map((element) => {
                                            return (
                                                <tr key={uuid()}>
                                                    <td><Link
                                                        onClick={() => GetCustInfo_(element.No)}
                                                        className="CreateServiceOrder_Menu" to={"/MainServices/CreateServiceOrder/" + serialno}>
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
            <Modal.Body style={{ height: "20rem" }}>
                <Container fluid style={{ width: "100%" }}>
                    <Row className="service_order_rowForm" style={{ marginTop: "2%" }}>
                        <Col sm={8}>
                            <div className="form-group">
                                <input type="file" name="file" placeholder="Attachments" />&nbsp;
                            </div>
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" style={{ width: '3rem' }} className='CreateServiceOrder_buttun'
                                onClick={GetCustInfo}>Delete
                            </Button>
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" style={{ width: '3rem' }} className='CreateServiceOrder_buttun'
                                onClick={GetCustInfo}>Add
                            </Button>
                        </Col>
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={12} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th style={{ width: '5%' }}></th>
                                        <th style={{ width: '50%' }}>Attach File Name</th>
                                        <th style={{ width: '45%' }}>Attach Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataAttachFiles.map((element) => {
                                            return (
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
            <Modal.Body style={{ height: "20rem" }}>
                <Container fluid style={{ width: "100%" }}>
                    <Row className="service_order_rowForm" style={{ height: "2rem" }}>
                        <Col sm={10} className="CreateServiceOrderColItem CreateServiceOrderColItemleft"
                            style={{ paddingTop: "0.2rem", backgroundColor: "#e9ecef" }}>
                            <h5>Create Customer</h5>
                        </Col>
                        <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft"
                            style={{ paddingTop: "0.2rem", backgroundColor: "#e9ecef", marginLeft: "0rem", paddingLeft: "1.1rem" }}>
                            <Button className='CreateServiceOrder_buttun CreateServiceOrderbtn-secondary' style={{ width: "3.5rem" }}>Save</Button>
                        </Col>
                    </Row>
                    <Row className="service_order_rowForm" style={{ paddingTop: "1.2rem" }}>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <label htmlFor="CreateCustCustomerName" className="required CreateServiceOrder_label">Customer Name</label>
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
                    <Row className="service_order_rowForm" style={{ paddingTop: "1.2rem" }}>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <label htmlFor="CreateCustAddress" className="required CreateServiceOrder_label">Address</label>
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">
                                <input type="text" name="CreateCustAddress" id="CreateCustAddress"
                                    className="required CreateServiceOrderTB_Small" placeholder="Address"
                                />
                            </div>
                        </Col>
                        <Col sm={1} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <label htmlFor="CreateCustContactName" className="required CreateServiceOrder_label">Contact Name</label>
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">
                                <input type="text" name="CreateCustContactName" id="CreateCustContactName"
                                    className="required CreateServiceOrderTB_Small" placeholder="Contact Name"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="service_order_rowForm" style={{ paddingTop: "1.2rem" }}>
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
                            <label htmlFor="CreateCustPhoneNo" className="required CreateServiceOrder_label">Phone No.</label>
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">
                                <input type="text" name="CreateCustPhoneNo" id="CreateCustPhoneNo"
                                    className="required CreateServiceOrderTB_Small" placeholder="Phone No"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="service_order_rowForm" style={{ paddingTop: "1.2rem" }}>
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
                            <label htmlFor="CreateCustVatRegis" className="required CreateServiceOrder_label">Vat Registration No.</label>
                        </Col>
                        <Col sm={4} className="CreateServiceOrderColItem CreateServiceOrderColItemright">
                            <div className="form-group">
                                <input type="text" name="CreateCustVatRegis" id="CreateCustVatRegis"
                                    className="required CreateServiceOrderTB_Small" placeholder="Vat Registration No."
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="service_order_rowForm" style={{ paddingTop: "1.2rem" }}>
                        <Col sm={2} className="CreateServiceOrderColItem CreateServiceOrderColItemleft">
                            <label htmlFor="CreateCustPostCode" className="required CreateServiceOrder_label">Post Code</label>
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
const CreateServiceOrder = () => {
    return (
        <div style={{ margin: 0, padding: 0 }} >
            <Container fluid>
                <Row>
                    <Col xs={12} lg={12} xl={12} md={12} sm={12} xxl={12} className="gfh-logo">
                        <div style={{ marginTop: 0, paddingTop: "5%" }}>
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
                            <Route path="/MainServices/CheckStockAvaliable" component={CheckStockAvaliable} />
                            <Route path="/MainServices/CreateServiceOrder/MainComponent/:serialno" exact>
                                <MainComponent />
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