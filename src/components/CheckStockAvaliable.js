import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './CommonCss.css';
import './CreateStockAvaliable.css';
import Table from 'react-bootstrap/Table'
import ServiceOrder from './ServiceOrder';
import { Switch,Route,Link} from 'react-router-dom';
import CreateServiceOrder from './CreateServiceOrder';
import CheckProduct from './CheckProduct';
import axios from 'axios';
import uuid from 'react-uuid'


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
    const [StockInfo, setStockInfo] = useState([]) 
    let ItemNo = React.createRef()
    const GetStockInfo = () => {
        const ItemNo_=ItemNo.current.value
        console.log(ItemNo_);       
        const url_ = "http://office.triplepcloud.com:21012/Boyy_Dev/api/TPP/API/v1.0/companies(b9f4932b-b493-ec11-a5c8-00155d040808)/stock?$filter=ItemNo eq '"+ItemNo_+"'"
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
                setStockInfo( JSON.parse(  JSON.stringify( res.data.value ) ) )
                console.log(StockInfo)
                console.log(StockInfo[2].LocationCode) 
                console.log(StockInfo.length) 
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
                    <Col sm={5} className=" CheckStockAvailColItem CheckStockAvailColSubmitSearch">
                        <div className="form-group">                                            
                            <input type="text" 
                            style={{fontFamily: 'FontAwesome',width:"25rem",height:'2rem'}} 
                            name="ItemNo" id="ItemNo" 
                            className="required" 
                            placeholder="&#xf002;" 
                            ref={ItemNo}
                                defaultValue="" />
                        </div>
                    </Col>
                    <Col sm={2} className=" CheckStockAvailColItem CheckStockAvailColSubmitSearch"
                    style={{marginLeft:'0',paddingLeft:'0'}}
                    >
                        <ul>
                            <li>   
                                <Link
                                onClick={GetStockInfo} 
                                style={{fontFamily:'GothamBook'}}>
                                    Search
                                </Link>                                   
                            </li>
                        </ul>
                    </Col>  
       
                </Row>
                <Row className="CheckStockAvailrowForm">
                    <Col sm={12} className="CheckStockAvailColContent">                   
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