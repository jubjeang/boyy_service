import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "reactstrap";
import { Row, Form } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import './Footer.css';
class Footer extends React.Component {
    render() {
      return (        
        <div style={{ margin : 0, paddingTop : 100 }}>{/* <div className="container"></div> */}
            <Container fluid>
                <Row>
                    <Col xs={3}>
                    </Col>
                    <Col xxl={1}>
                        <div className="footer-title">
                            EXPLORE BOYY
                        </div>
                        <div className="footer-content">
                            <ul className="vertical-menu">								
                                <li><a href="https://www.boyy.com/collections/buckle-handbags">
                                    BUCKLE BAGS</a></li>								
                                <li><a href="https://www.boyy.com/collections/tote">
                                    TOTE BAGS</a></li>								
                                <li><a href="https://www.boyy.com/collections/cross-body">
                                    CROSS BODY BAGS</a></li>								
                                <li><a href="https://www.boyy.com/collections/shoulder">
                                    SHOULDER BAGS</a></li>								
                                <li><a href="https://www.boyy.com/collections/raffia">
                                    RAFFIA BAGS</a></li>								
                                <li><a href="https://www.boyy.com/collections/weekender">
                                    WEEKENDER</a></li>								
                                <li><a href="https://www.boyy.com/collections/boyy-up">
                                    UPCYCLED</a></li>								
                            </ul>
                        </div>
                    </Col>
                    <Col xs={1}>
                        <div className="footer-title">
                            Customer care
                        </div>
                        <div className="footer-content">
                            <ul className="vertical-menu">								
                                    <li><a href="https://www.boyy.com/pages/contact">
                                        Contact Us </a></li>                        
                                    <li><a href="https://www.boyy.com/pages/faqs">
                                        FAQ </a></li>                        
                                    <li><a href="https://www.boyy.com/pages/instructional-videos">
                                        Instructional Videos </a></li>                           
                            </ul>
                        </div>                        
                    </Col>
                    <Col xxl={1}>
                        <div className="footer-title">
                            Locations
                        </div>
                        <div className="footer-content">
                            <ul className="vertical-menu">								
                                <li><a href="https://www.boyy.com/pages/boyy-stores">
                                    BOYY Stores </a></li>                    
                                <li><a href="https://www.boyy.com/pages/stockists">
                                    Stockists </a></li>                    
                            </ul>
                        </div> 
                    </Col>
                    <Col xs={1}>
                        <div className="footer-title">
                            Legal
                        </div>
                        <div className="footer-content">
                            <ul className="vertical-menu">								
                                <li><a href="https://www.boyy.com/pages/terms-conditions">
                                    Terms &amp; Conditions </a></li>                    
                                <li><a href="https://www.boyy.com/pages/privacy-policy">
                                    Privacy Policy </a></li>                    
                                <li><a href="https://www.boyy.com/pages/cookies">
                                    Cookie Policy </a></li>                    
                            </ul>
                        </div>
                    </Col>
                    <Col xxl={1}>
                        <div className="footer-title">
                            Connect
                        </div>
                        <div className="footer-content">
                            <ul className="vertical-menu">								
                                <li><a href="https://www.instagram.com/boyyboutique/" target="_blank">
                                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-instagram" viewBox="0 0 30 30"><path d="M15 10.893c.738 0 1.423.184 2.054.553a4.12 4.12 0 0 1 1.5 1.5c.369.631.553 1.316.553 2.054 0 .738-.184 1.423-.553 2.054a4.12 4.12 0 0 1-1.5 1.5 3.997 3.997 0 0 1-2.054.553 3.997 3.997 0 0 1-2.054-.553 4.12 4.12 0 0 1-1.5-1.5A3.997 3.997 0 0 1 10.893 15c0-.738.184-1.423.553-2.054a4.12 4.12 0 0 1 1.5-1.5A3.997 3.997 0 0 1 15 10.893zm0 6.786a2.58 2.58 0 0 0 1.893-.786A2.58 2.58 0 0 0 17.679 15a2.58 2.58 0 0 0-.786-1.893A2.58 2.58 0 0 0 15 12.321a2.58 2.58 0 0 0-1.893.786A2.58 2.58 0 0 0 12.321 15c0 .738.262 1.369.786 1.893a2.58 2.58 0 0 0 1.893.786zm5.25-6.965a1.113 1.113 0 0 1-.304.679.87.87 0 0 1-.66.286.927.927 0 0 1-.679-.286.927.927 0 0 1-.286-.679c0-.262.096-.488.286-.678a.927.927 0 0 1 .679-.286c.262 0 .488.095.678.286.19.19.286.416.286.678zm2.714.965c.024.666.036 1.773.036 3.321 0 1.548-.018 2.66-.054 3.34-.035.678-.136 1.267-.303 1.767a4.163 4.163 0 0 1-.982 1.554c-.44.44-.959.768-1.554.982-.5.167-1.09.268-1.768.303-.678.036-1.791.054-3.339.054s-2.66-.018-3.34-.054c-.678-.035-1.267-.148-1.767-.339a3.807 3.807 0 0 1-1.554-.946 4.163 4.163 0 0 1-.982-1.554c-.167-.5-.268-1.09-.303-1.768C7.018 17.661 7 16.548 7 15s.018-2.66.054-3.34c.035-.678.136-1.267.303-1.767a4.163 4.163 0 0 1 .982-1.554c.44-.44.959-.768 1.554-.982.5-.167 1.09-.268 1.768-.303C12.339 7.018 13.452 7 15 7s2.66.018 3.34.054c.678.035 1.267.136 1.767.303a4.163 4.163 0 0 1 1.554.982c.44.44.768.959.982 1.554.167.5.274 1.095.321 1.786zm-1.714 8.035c.143-.404.238-1.047.286-1.928.024-.524.035-1.262.035-2.215V14.43c0-.977-.011-1.715-.035-2.215-.048-.904-.143-1.547-.286-1.928a2.578 2.578 0 0 0-1.536-1.536c-.38-.143-1.024-.238-1.928-.286a52.106 52.106 0 0 0-2.215-.035H14.43c-.953 0-1.69.011-2.215.035-.88.048-1.524.143-1.928.286a2.578 2.578 0 0 0-1.536 1.536c-.143.38-.238 1.024-.286 1.928a52.106 52.106 0 0 0-.035 2.215v1.142c0 .953.011 1.69.035 2.215.048.88.143 1.524.286 1.928.31.738.821 1.25 1.536 1.536.404.143 1.047.238 1.928.286.524.024 1.262.035 2.215.035h1.142c.977 0 1.715-.011 2.215-.035.904-.048 1.547-.143 1.928-.286.738-.31 1.25-.821 1.536-1.536z" fill="#000" fillRule="nonzero"></path></svg>
                                    Instagram</a></li>
                                <li><a href="https://www.facebook.com/Boyy-Bag-39565570181/" target="_blank">
                                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-facebook" viewBox="0 0 30 30"><path d="M13.3 23.203V15.72H10.78v-2.917H13.3v-2.15c0-2.497 1.524-3.856 3.751-3.856 1.066 0 1.983.08 2.25.115V9.52l-1.544.001c-1.211 0-1.445.576-1.445 1.42v1.862H19.2l-.377 2.917h-2.511v7.483H13.3z" fill="#000" fillRule="nonzero"></path></svg>
                                    Facebook</a></li>
                                <li><a href="https://page.line.me/anv1571h" target="_blank">
                                    <img src="https://cdn.shopify.com/s/files/1/0279/0447/5214/t/49/assets/line-icon_small.png?v=1092003170710065535" alt="" className="icon" /> 
                                    &nbsp;Line Official</a></li>
                                <li><a href="https://www.boyy.com/pages/boyy-wechat" target="_blank">
                                    <img src="https://cdn.shopify.com/s/files/1/0279/0447/5214/t/49/assets/wechat-icon_small.png?v=2538478481479787271" alt="" className="icon" />
                                    &nbsp;Wechat</a></li>
                                <li><a href="https://www.boyy.com/pages/boyy-weibo" target="_blank">
                                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-weibo" viewBox="0 0 512 512"><path fill="currentColor" d="M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z"></path></svg>
                                    &nbsp;Weibo</a></li>                            
                            </ul>
                        </div>
                    </Col>
                    <Col xs={1}>
                        <div className="footer-title">
                            Careers
                        </div>
                        <div className="footer-content">                            
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="footer-title">
                            SIGN UP TO OUR NEWSLETTER
                        </div>                       
                    </Col>
                   
                </Row>
            </Container>
        </div>
        )
    }
  }  
  export default Footer