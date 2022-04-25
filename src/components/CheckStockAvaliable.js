import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './CommonCss.css';
import './CreateStockAvaliable.css';
import Table from 'react-bootstrap/Table'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import ServiceOrder from './ServiceOrder';
import { Switch,Route,Link} from 'react-router-dom';
import CreateServiceOrder from './CreateServiceOrder';
import CheckProduct from './CheckProduct';
import axios from 'axios';
import uuid from 'react-uuid'
import { FaSistrix } from 'react-icons/fa'


// const data =[
//     {code:"BOYYSRL",name:"BOYYSRL",inventory:0},
//     {code:"CK",name:"คลังเช่าพื้นที่เก็บข้างนอก เก็บหนังที่ไม่ใช้แล้ว",inventory:0},
//     {code:"DAMAGE",name:"Damage",inventory:0},
//     {code:"DEFECTED",name:"Defected",inventory:0},
//     {code:"ECOM",name:"ECOM",inventory:0},
//     {code:"ECOM-PEN",name:"ECOM Pending",inventory:0},
//     {code:"IN-TRANSIT",name:"In-Transit",inventory:0},
//     {code:"MATERIAL",name:"Material",inventory:0},
//     {code:"MATERIAL-D",name:"MATERIAL-Design",inventory:0}
// ]

const MainComponent = ()=>{ 

    const handleCloseshowCustSearch = () => setshowCustSearch(false)
    const handleShowshowCustSearch = () => setshowCustSearch(true)
    const [showCustSearch, setshowCustSearch] = useState(false)
    const [ItemInfo, setItemInfo] = useState([])
    let textDesc = React.createRef()
    const [StockInfo, setStockInfo] = useState([]) 
    let ItemNo = React.createRef()
    const GetStockInfo = ( ItemNo_ ) => {
        //const ItemNo_=ItemNo.current.value
        document.getElementById("SearchValue").value = ItemNo_
        //console.log(ItemNo_);       
        const url_ = "http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/API/v1.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/stock?$filter=ItemNo eq '"+ItemNo_+"'"
        console.log(url_)
        axios({
            headers: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
            method: "get",
            url: url_,
            auth: {
                username: process.env.REACT_APP_UNSPLASH_USERNAME_API,
                password: process.env.REACT_APP_UNSPLASH_PASSWORD_API
            }
        }).then(res => {
            if (res.status == 200) {
                setStockInfo( JSON.parse(  JSON.stringify( res.data.value ) ) )
                console.log(StockInfo)
                console.log(StockInfo[2].LocationCode) 
                console.log(StockInfo.length) 
            } else {
                
            }
        }).catch(err => {            
            console.log('err', err)
        });
        handleCloseshowCustSearch()
    }
    const GetItem = () => {
        //setCustsInfo([])
        const textDesc_ = textDesc.current.value
        console.log(textDesc_);
        const url_="http://office.triplepcloud.com:27053/Boyy_UAT/api/TPP/BC/v2.0/companies(26a95657-849b-ec11-a5c9-00155d040808)/item/?$filter=Type eq 'Inventory' and Description eq '" + textDesc_ + "*'"
        //const url_ = "http://office.triplepcloud.com:21012/Boyy_Dev/ODataV4/Company('CRONUS - LS Central')/API_Customer?$filter=Name eq '" + CustName + "*'"
       // console.log(url_)
        axios({
            headers: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
            method: "get",
            url: url_,
            auth: {
                username: process.env.REACT_APP_UNSPLASH_USERNAME_API,
                password: process.env.REACT_APP_UNSPLASH_PASSWORD_API
            }
        }).then(res => {
            if (res.status == 200) {
                setItemInfo(JSON.parse(JSON.stringify(res.data.value)))
                console.log( ItemInfo )
            } else {

            }
        }).catch(err => {
            console.log('err', err)
        });
    }
    return (<div id="CheckStockAvaliable" style={{ margin : 0, padding : 0 }} >
            <Container fluid>                
                <Row style={{display: "flex", alignItems: "center", verticalAlign:'middle'}}>
                    <Col sm={1} className=" CheckStockAvailColItem  CheckStockAvailColItemleft">                                        
                        <label htmlFor="name" className="required">Item No</label>                                            
                    </Col>
                    <Col sm={5} className=" CheckStockAvailColItem"   style={{paddingTop:"1.7rem"}}>
                        <div className="form-group CheckStockAvailable_input-icon-wrap">                   
                            <input type="text" name="SearchValue" id="SearchValue" 
                                className="required CheckStockAvailable_input-with-icon" 
                                style={{height:"1.7rem"}} 
                                placeholder=""                                         
                                defaultValue="" 
                                ref={ItemNo} />
                            <span className="CheckStockAvailable_input-icon"  style={{height:"1.7rem", width:"2rem",cursor:"pointer"}}> 
                                <a onClick={handleShowshowCustSearch}>
                                    <FaSistrix  /> 
                                </a> 
                            </span> 
                        </div>
                    </Col>       
                </Row>
                <Row className="CheckStockAvailrowForm">
                    <Col sm={11} className="CheckStockAvailColContent">                   
                        <Table striped bordered hover className='table_display_result' 
                        style={{tableLayout: 'fixed', display: StockInfo.length>0 ? 'table' : 'none'
                        , width:'100%' }}>
                            <thead style={{width: '850px !important' }}>
                                <tr style={{width: '100%' }}> 
                                    <th style={{width: '20%' }}>Code</th>
                                    <th style={{width:'60%' }}>Name</th>
                                    <th  style={{width:'20%' }}>Inventory</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                StockInfo.map( (element)=>{
                                    return(
                                    <tr key={uuid()}>                                
                                        <td>{element.ItemNo}</td>
                                        <td>{element.LocationCode}</td>
                                        <td style={{textAlign: "right"}}>{element.Inventory}</td>
                                    </tr>
                                ) } )
                                } 
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
                    {/* search customer */}
        <Modal show={showCustSearch} onHide={handleCloseshowCustSearch}
            centered size="ms" scrollable={true}>
            <Modal.Header>
                <Modal.Title>Items</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: "23rem" }}>
                <Container fluid style={{ width: "100%" }}>
                    <Row className="service_order_rowForm" style={{ marginTop: "2%" }}>
                        <Col sm={6} className="CheckStockAvailable_ColItem ColItemright">
                            <div className="form-group CheckStockAvailable_input-icon-wrap">
                                <input type="text" name="DescriptionSearch" id="DescriptionSearch"
                                    className="required CheckStockAvailable_IconInTB CheckStockAvailable_input-with-icon"
                                    placeholder="Description"
                                    ref={textDesc}
                                     />
                                <span className="CheckStockAvailable_input-icon" style={{ height: "2rem", cursor: "pointer" }}>
                                    <FaSistrix style={{ cursor: "pointer" }} onClick={GetItem} />
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="service_order_rowForm">
                        <Col sm={12} className="CheckStockAvailable_ColItem CheckStockAvailable_ColItemleftleft">
                            <Table striped bordered hover style={{ display: ItemInfo.length > 0 ? 'block' : 'none', width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>No.</th>
                                        <th style={{ width: '90%' }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ItemInfo.map((element) => {
                                            return (
                                                <tr key={uuid()}>
                                                    <td className="CreateServiceOrder_Menu">
                                                    <label className="CreateServiceOrder_Menu" 
                                                        onClick={() => GetStockInfo( element.No )} 
                                                        style={{cursor:"pointer"}}
                                                        >{element.No} </label>
                                                        
                                                    </td>
                                                    <td>
                                                        <label className="CreateServiceOrder_Menu" 
                                                        onClick={() => GetStockInfo( element.No )}  
                                                        style={{cursor:"pointer"}}
                                                        >{element.Description} </label>
                                                    </td>
                                                    
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
    </div>
    );
}
const CheckStockAvaliable = ()=>{
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
                                                <div style={{ marginTop : 0, paddingTop : "5%"}} className="TextLogo">                                                     
                                                    <Link  to="/MainServices">B O Y Y</Link>
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
                                    <Route path="/MainServices/CheckStockAvaliable" component={MainComponent}  exact />
                                    <Route path="/MainServices/ServiceOrder" component={ServiceOrder} /> 
                                    <Route path="/MainServices/CheckProduct" component={CheckProduct} /> 
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
export default CheckStockAvaliable;