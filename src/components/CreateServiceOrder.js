import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Col, Row, Form } from "react-bootstrap";
import './CreateServiceOrder.css';
const CreateServiceOrder = ()=>{
    return (
        <div style={{ margin : 0, padding : 0 }} >
            <Container fluid>
                <Row>
                    <Col sm={12} className="gfh-logo">
                        <a href="https://boyy.com/">
                            <img 
                            src="https://boyy-b2b-ss22.herokuapp.com/assets/logo-d96f23139d13c0c38b5b1d7d5f873cca65f5c22b030921fc64b27cdeac09955e.svg" 
                            alt="Boyy Logo" 
                            />
                        </a>
                    </Col>
                </Row>
                <Row className="RowMenu">
                    <Col sm={2} className="Menu">
                        <ul id="mainlist">
                            <li>
                                {/* <a href="javascript: scrollToCollection('buckle-collection');" className="collection__list-item__link">BUCKLE Collection</a> */}
                                <a href="#buckle-collection-anchor">Check Product</a>
                            </li>
                            <li>
                                {/* <a href="javascript: scrollToCollection('take-away-collection');" className="collection__list-item__link">TAKE AWAY Collection</a> */}
                                <a href="#take-away-collection-anchor">Service Order</a>
                            </li>
                            <li>
                                {/* <a href="javascript: scrollToCollection('soft-collection');" className="collection__list-item__link">SOFT COLLECTION</a> */}
                                <a href="#soft-collection-anchor">Create Service Order</a>
                            </li>
                            <li>
                                {/* <a href="javascript: scrollToCollection('slg-collection');" className="collection__list-item__link">ACCESSORIES Collection</a> */}
                                <a href="#slg-collection-anchor" className="collection__list-item__link">Check Stock Avaliable</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={10}>
                        <div id="CreateServiceOrder">                            
                            <Container fluid>
                                <Row className="rowForm">
                                        <Col sm={12}>
                                            <div className="MenuTitle">Create Service Order</div>
                                        </Col>
                                </Row>
                                <Row className="rowForm">
                                    <Col sm={4} className="ColItem ColItemleft">                                        
                                        <label htmlFor="name" className="required">Full name</label>                                            
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                        <div className="form-group">                                            
                                          <input type="text" name="name" id="name" className="required" placeholder="Full name"
                                                value="" />
                                        </div>
                                    </Col>                                    
                                </Row>
                                <Row  className="rowForm" style={{height:'80px'}}>
                                    <Col sm={4} className="ColItem ColItemleft">
                                        <label htmlFor="Address" className="required">Address</label>
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                            <div className="form-group">                                            
                                                <textarea rows="3" name="Address" id="Address" className="required" placeholder="Address">						
                                                </textarea>
                                            </div>
                                    </Col>
                                </Row>
                                <Row className="rowForm">
                                    <Col sm={4} className="ColItem ColItemleft">
                                        <label htmlFor="Phone" className="required">Phone</label>
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                            <div className="form-group">
                                                <input type="text" name="Phone" id="Phone" className="required" placeholder="Phone"
                                                value=""
                                                />
                                            </div>
                                    </Col>
                                </Row>
                                <Row className="rowForm">
                                    <Col sm={4} className="ColItem ColItemleft">
                                        <label htmlFor="DateOfRepair" className="required">Date Of Repair</label>
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                        <div className="form-group">                                            
                                            <input type="text" name="Phone" id="Phone" className="required" placeholder="Date Of Repair"
                                             value=""
                                             />
                                        </div>
                                    </Col>
                                </Row>
                                <Row  className="rowForm">
                                    <Col sm={4} className="ColItem ColItemleft">
                                        <label htmlFor="Styles" className="required">Styles</label>
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                        <div className="form-group">                                            
                                            <input type="text" name="Styles" id="Styles" className="required" placeholder="Styles"
                                                value="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="rowForm">
                                    <Col sm={4} className="ColItem ColItemleft">
                                        <label htmlFor="Colors" className="required">Color(<span className="text-lowercase">s</span>)</label>
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                        <div className="form-group">                                            
                                            <input type="text" name="Colors" id="Colors" className="required" placeholder="Colors"
                                             value=""
                                             />
                                        </div>
                                    </Col>
                                </Row> 
                                <Row className="rowForm">
                                    <Col sm={4} className="ColItem ColItemleft">
                                        <label htmlFor="Season" className="required">Season</label>
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                        <div className="form-group">                                            
                                            <input type="text" name="Season" id="Season" className="required" placeholder="Season"
                                             value=""
                                             />
                                        </div>
                                    </Col>
                                </Row>                                
                                <Row className="rowForm">
                                    <Col sm={4} className="ColItem ColItemleft">
                                    <label htmlFor="Quantity" className="required">Quantity</label>
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                        <div className="form-group">                                            
                                            <input type="text" name="Quantity" id="Quantity" className="required" placeholder="Quantity"
                                             value=""
                                             />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="rowForm">
                                    <Col sm={4} className="ColItem ColItemleft">
                                    <label htmlFor="RepairCharges" className="required">Repair Charges</label>
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                        <div className="form-group">                                            
                                        <input type="text" name="RepairCharges" id="RepairCharges" className="required" placeholder="Repair Charges"
                                             value=""
                                             />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="rowForm" style={{height:'90px'}}>
                                    <Col sm={4} className="ColItem ColItemleft">
                                    <label htmlFor="" className="required">Accessories Included with handbages/SLG</label>
                                    </Col>
                                    <Col sm={7} className="ColItem ColItemright" style={{paddingLeft:'15px'}}>
                                        <div className="form-check">                                             
                                                <input type="checkbox" id="Card" className="form-check-input" />
                                                <label class="form-check-label" for="Card">&nbsp;Card</label>
                                                <input type="checkbox" id="DustBag" className="form-check-input" />
                                                <label class="form-check-label" for="DustBag">&nbsp;Dust Bag</label>                                                
                                                <input type="checkbox" id="Strap" className="form-check-input" />
                                                <label class="form-check-label" for="Strap">&nbsp;Strap</label> 
                                                <input type="checkbox" id="Other" className="form-check-input" />
                                                <label class="form-check-label" for="Other">&nbsp;Other&nbsp;
                                                <input type="text" 
                                                id="tbOther" 
                                                className="textboxother" 
                                                style={{width:'30%'}}
                                                />
                                                </label>                                                                       
                                        </div>
                                    </Col>
                                </Row>                                
                                <Row className="rowForm" style={{height:'80px'}}>
                                    <Col sm={4} className="ColItem ColItemleft">
                                        <label htmlFor="Description" className="required">Description</label>
                                    </Col>
                                    <Col sm={4} className="ColItem ColItemright">
                                        <div className="form-group">                                            
                                            <textarea rows="3" name="Description" id="Description" className="required" placeholder="Description">						
                                            </textarea>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="rowForm">
                                    <Col sm={2} className="ColItem ColItemleft">                                        
                                    </Col>
                                    <Col sm={8} className="ColItem ColItemright">
                                        <div className="col-12 text-center horizontal-menu">                                            
                                            <ul>
                                                <li>                                                    
                                                    <a href="#recover">Submit</a>                                   
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
                <Row style={{paddingTop:'90px'}}>
                    <Col sm={12}  style={{ textAlign: "center",fontSize:"12px" }}>
                        <p className="copy-text-footer">BOYY &copy; 2021</p>
                    </Col>
                </Row>

            </Container>
            {/* <div className="gfh-logo"></div> */}
            <div>
                {/* <div className="video-hero-section">
                    <video src="https://player.vimeo.com/external/652565825.hd.mp4?s=07605c722590521e51dd5df1da97fc7fbe036119&amp;profile_id=174" type="video/mp4" autoplay="autoplay" loop="loop" muted="muted" playsinline=""></video>
                </div>  */}
                <div>
                    <div>
                    {/*เมนู*/}
                        {/* <div className="Menu left">
                        </div> 
                    */}
                    {/*End เมนู*/}
                        {/* <div id="collection-start" className='right'>
                        </div> */}
                    </div>
                </div>
            </div> 
        </div>       
    );
}
export default CreateServiceOrder;