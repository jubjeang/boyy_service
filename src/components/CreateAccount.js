import React , { useState, useRef, useEffect } from 'react'
import './CreateAccount.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Password } from '@mui/icons-material';
import { Box } from '@mui/system';
import MuiAlert from '@mui/material/Alert';
// import { navigate } from 'hookrouter';
import { useHistory } from "react-router-dom";
import { Backdrop, CircularProgress, Snackbar } from '@mui/material';
import { Config } from './Config';

//     P@ssw0rd@1

const errorMessage = {
    code: 'Code not found in the system',
    email: 'Email format is incorrect',
    name: 'Fullname required',
    password : 'Password requirement:\n\n- At least 8 character\n- 1 Uppercase Character\n- 1 Lowercase Character\n- 1 valid symbol\n- 1 number',
    confirmPassword: 'Password mismatch with previous field',
    mobile: 'incorrect format ex.0812345678',
    required: 'Required'
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateAccount = () => { 
    let history = useHistory();
    const md5 = require('md5');
    const axios = require('axios');
    const userBasicAuth = Config.UserBasicAuth;
    const passBasicAuth = Config.PassBasicAuth;
    const encryptSessionStorage = Config.EncryptSessionStorage;
    const baseUserAPI = Config.BaseUserAPI;
    let baseJsonUser = Config.BaseJsonUser;

    const [error, setError] = useState(
        {
        code: false,
        email: false,
        name: false,
        password : false,
        confirmPassword: false,
        mobile: false
        }
    );
    const [required, setRequired] = useState(
        {
        requiredCode: false,
        requiredEmail: false,
        requiredName: false,
        requiredPassword : false,
        requiredConfirmPassword: false,
        requiredMobile: false
        }
    );
    const [dataLoadedStatus, setDataLoadedStatus] = useState(true);
    const [errStatus,setErrStatus] = useState({
        show: false,
        type: "", //error, warning, info, success
        message: ""
    })
    const handleErrStatusClose = () => {
       setErrStatus ({show: false, type: "", message: ""});
    }

    const checkRequired = (object) => {
        // console.log('object',object);
        let errorForcheck = error;
        let requiredForCheck = required;
        let emptyField = false;
        console.log(object.code.length === 0,object.email.length === 0,object.name.length === 0,object.password.length === 0,object.confirmPassword.length === 0,object.mobile.length === 0);
        if(object.code.length === 0){
            errorForcheck={...errorForcheck,code: false};
            requiredForCheck = ({...requiredForCheck, requiredCode: true});
            emptyField = true;
        }
        if(object.email.length === 0){
            errorForcheck={...errorForcheck,email: false};
            requiredForCheck = ({...requiredForCheck, requiredEmail: true});
            emptyField = true;
        }
        if(object.name.length === 0){
            errorForcheck={...errorForcheck,name: false};
            requiredForCheck = ({...requiredForCheck, requiredName: true});
            emptyField = true;
        }
        if(object.password.length === 0){
            errorForcheck={...errorForcheck,password: false};
            requiredForCheck = ({...requiredForCheck, requiredPassword: true});
            emptyField = true;
        }
        if(object.confirmPassword.length === 0){
            errorForcheck={...errorForcheck,confirmPassword: false};
            requiredForCheck = ({...requiredForCheck, requiredConfirmPassword: true});
            emptyField = true;
        }
        if(object.mobile.length === 0){
            errorForcheck={...errorForcheck,mobile: false};
            requiredForCheck = ({...requiredForCheck, requiredMobile: true});
            emptyField = true;
        }
        setRequired(requiredForCheck);
        setError(errorForcheck);

        if(emptyField){
            return true;
        }

        return false;
    }

    const checkCode = () => {
        const code = document.getElementById("CustomerCode").value;
        const codeForCheck = '1000001' || '1000002' || '50000' || '5000001' || '5000002' || '5000003' || '5000004';
        if(required.requiredCode){
            setRequired({...required,requiredCode: false});
        }
        if(code !== codeForCheck){
            return setError({...error,code: true})
        }
        setError({...error,code: false})
    }

    const checkEmail = () => {
        const email = document.getElementById("CustomerEmail").value;
        var testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        if(required.requiredEmail){
            setRequired({...required,requiredEmail: false});
        }
        if(!testEmail.test(email)){
            return setError({...error,email: true})
        }
        setError({...error,email: false})
    }

    const checkName = () => {
        const name = document.getElementById("CustomerFullname").value.toLowerCase();
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(required.requiredName){
            setRequired({...required,requiredName: false});
        }
        if(!regName.test(name)){
            return setError({...error,name: true})
        }
        setError({...error,name: false})
    }

    const checkPassword = () => {
        var CheckRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
        const password = document.getElementById("CustomerPassword").value;
        if(required.requiredPassword){
            setRequired({...required,requiredPassword: false});
        }
        // if(password.length < 8 || !CheckRegex.test(password)){
        //     return setError({...error,password: true})
        // }
        
        setError({...error,password: false})
    }

    const checkPasswordMatch = () => {
        const password = document.getElementById("CustomerPassword").value;  
        const confirmPassword = document.getElementById("CustomerConfirmPassword").value;  
        if(required.requiredConfirmPassword){
            setRequired({...required,requiredConfirmPassword: false});
        }
        if(password !== confirmPassword){
            return setError({...error,confirmPassword: true})
        }
        setError({...error,confirmPassword: false})
    }

    const checkMobile = () => {
        const mobile = document.getElementById("phone").value;
        if(required.requiredMobile){
            setRequired({...required,requiredMobile: false});
        }
        if(isNaN(mobile)){
            return setError({...error,mobile: true})
        }
        setError({...error,mobile: false})
    }

    const handleCreateAccountSubmit = (e) => {
        e.preventDefault();

        const firstname = e.target[2].value.split(" ")
        const dataObject = {
            code: e.target[0].value,
            email: e.target[1].value,
            name: e.target[2].value,
            password: e.target[3].value,
            confirmPassword: e.target[4].value,
            mobile: e.target[5].value,
            portalType: "SERVICE"//e.target[6].value
        }

        if(checkRequired(dataObject)){
            return console.log('Error Required field');
        }

        if( error.code===true || error.email==true || error.name===true || 
            error.password===true || error.confirmPassword===true || error.mobile===true ||
            required.requiredCode===true || required.requiredEmail===true || required.requiredName===true || 
            required.requiredPassword===true || required.requiredConfirmPassword===true || required.requiredMobile===true ){
                return console.log('Error-Field');
        }
        
        baseJsonUser = {
            ...baseJsonUser,
            isfunction: "REGISTER",
            email: dataObject.email,
            // password: md5(dataObject.password),
            password: dataObject.password,
            username: firstname[0],
            phone: dataObject.mobile,
            mobile: dataObject.mobile,
            fullname: dataObject.name,
            customerno: dataObject.code
        }
        
        axios({
            header: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
            method: 'post',
            url: baseUserAPI,
            auth: {
                username: userBasicAuth,
                password: passBasicAuth
            },
            data: baseJsonUser
          })
        .then(res => {
            if(res.status === 200){
                const JsonToObj = JSON.parse(res.data.value);
                console.log('JsonToObj',JsonToObj);
                if(JsonToObj.value[0].status === "COMPLETE"){
                    alert('Create new account successful'.toUpperCase());
                    // navigate("/main",true);
                    history.push("/MainServices")

                } else {
                    setErrStatus({ show: true, type: "warning", message: JsonToObj.value[0].status })
                }
            }
        }).catch(err =>{
            console.log(err);
            setErrStatus({show: true, type: 'warning' , message: err})
        });

    }

    useEffect(() => {    
        // if(encryptSessionStorage.decrypt('admin') !== true){
        //     navigate('/main', true);
        // } 
        console.log(encryptSessionStorage.decrypt('admin'))
    }, []);

    return (
        <form className='needs-validation' onSubmit={handleCreateAccountSubmit} noValidate>
            <Snackbar
            open={errStatus.show}
            autoHideDuration={3000}
            onClose={handleErrStatusClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity={errStatus.type}>
                    {errStatus.message}
                </Alert>
            </Snackbar>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={!dataLoadedStatus}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Container fluid id="divFormLogin" style={{padding: 5}}>
                <Col xs={12} sm={6} md={5} xl={4} style={{maxWidth: '29rem'}}>
                    <Row>
                        <Col sm={12} className="text-center">
                            <label className="uppercase bold" style={{fontSize: 'larger', margin: '20px auto'}}>CREATE ACCOUNT</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <label htmlFor="CustomerCode" className="form-label label-text">Customer Code</label>
                                <input
                                type="text"
                                className="form-control rounded-0 textbox_login_fixed"
                                id="CustomerCode"
                                name="CustomerCode"
                                spellCheck="false"
                                // onChange={checkCode}
                                required
                                />
                                <div className={`${ required.requiredCode || error.code ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {required.requiredCode && errorMessage.required.toUpperCase()}
                                    {error.code && errorMessage.code.toUpperCase()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <label htmlFor="CustomerEmail" className="form-label label-text">Email Address</label>
                                <input
                                type="email"
                                className="form-control rounded-0 textbox_login_fixed"
                                spellCheck="false"
                                id="CustomerEmail"
                                name="CustomerEmail"
                                onChange={checkEmail}
                                required
                                />
                                <div className={`${ required.requiredEmail || error.email ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {required.requiredEmail && errorMessage.required.toUpperCase()}
                                    {error.email && errorMessage.email.toUpperCase()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>		
                            <div>
                                <label htmlFor="CustomerFullname" className="form-label label-text">FULL NAME</label>
                                <input
                                type="text"
                                className="form-control rounded-0 textbox_login_fixed"
                                spellCheck="false"
                                id="CustomerFullname"
                                onChange={checkName}
                                required
                                />
                                <div className={`${ required.requiredName || error.name ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {required.requiredName && errorMessage.required.toUpperCase()}
                                    {error.name && errorMessage.name.toUpperCase()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <label htmlFor="CustomerPassword" className="form-label label-text">Password</label>
                                <input
                                type="password"
                                className="form-control rounded-0 textbox_login_fixed_pass"
                                id="CustomerPassword"
                                name="CustomerPassword"
                                onChange={checkPassword}
                                maxLength="20"
                                required
                                />
                                <div className={`${ required.requiredPassword || error.password ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {required.requiredPassword && errorMessage.required.toUpperCase()}
                                    {error.password &&  
                                    <Box style={{ display: 'flex', justifyContent: 'right', textAlign: 'right'}}>
                                        <div style={{ marginLeft: 'auto', textTransform: 'uppercase'}}>
                                            Password requirement:
                                        </div>
                                        <div style={{textAlign: 'left', textTransform: 'uppercase', marginLeft: 10}}>
                                            - At least 8 character<br/>
                                            - 1 Uppercase Character<br/>
                                            - 1 Lowercase Character<br/>
                                            - 1 valid symbol<br/>
                                            - 1 number
                                        </div>
                                    </Box>}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <label htmlFor="CustomerConfirmPassword" className="form-label label-text">Confirm Password</label>
                                <input
                                type="password"
                                className="form-control rounded-0 textbox_login_fixed_pass"
                                id="CustomerConfirmPassword"
                                name="CustomerConfirmPassword"
                                spellCheck="false"
                                onChange={checkPasswordMatch}
                                maxLength="20"
                                required
                                />
                                <div className={`${ required.requiredConfirmPassword || error.confirmPassword ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {required.requiredConfirmPassword && errorMessage.required.toUpperCase()}
                                    {error.confirmPassword && errorMessage.confirmPassword.toUpperCase()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div>
                                <label htmlFor="phone" className="form-label label-text">Mobile Number</label>
                                <input
                                type="tel"
                                className="form-control rounded-0 textbox_login_fixed"
                                id="phone" 
                                pattern="[0][0-9]{9}"
                                maxLength="10"
                                onChange={checkMobile}
                                required
                                />
                                <div className={`${ required.requiredMobile || error.mobile ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {required.requiredMobile && errorMessage.required.toUpperCase()}
                                    {error.mobile && errorMessage.mobile.toUpperCase()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col sm={12}>
                            <div>
                                <label htmlFor="CustomerPortalType" className="form-label label-text">PORTAL TYPE</label>
                                <select
                                className="form-select rounded-0 textbox_login_fixed"
                                id="CustomerPortalType"
                                >
                                    <option value={'B2B User'}>B2B User</option>
                                    <option value={'B2B Admin'}>B2B Admin</option>
                                </select>
                            </div>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <button
                                type='submit'
                                className='button-submit'
                                style={{padding: 0, marginBottom: '5rem'}}
                            >
                                <div>
                                    Submit
                                </div>
                            </button>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col sm={12}>
                            <div className='form-group'>
                                <div className='horizontal-menu-login'>
                                    <ul className='horizontal-menu-login'>
                                        <li style={{padding:0 , margin: 0, width: '100%'}}>
                                            <Link onClick={handleCreateAccountSubmit} style={{width: '2000px'}} to="#">CREATE ACCOUNT</Link>                                    
                                        </li>
                                    </ul>   
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                </Col>
            </Container>
        </form>
      )
  }
  
  export default CreateAccount
