import React , { useState, useRef } from 'react'
import './Verify.css';
import { Backdrop, Box, CircularProgress, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Container, Row, Col } from 'react-bootstrap';
//import { navigate } from 'hookrouter';
import { useHistory } from "react-router-dom";
import { Config } from './Config';

const errorMessage = {
    code: 'Verify code doesn\'t match with the system',
    password : 'Password requirement:\n\n- At least 8 character\n- 1 Uppercase Character\n- 1 Lowercase Character\n- 1 valid symbol\n- 1 number',
    confirmPassword: 'Password mismatch with previous field',
    required: 'This field is required'
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Verify = () => { 
    let history = useHistory();
    const md5 = require('md5');
    const axios = require('axios');
    const userBasicAuth = Config.UserBasicAuth;
    const passBasicAuth = Config.PassBasicAuth;
    const baseUserAPI = Config.BaseUserAPI;
    let baseJsonUser = Config.BaseJsonUser;
    const encryptSessionStorage = Config.EncryptSessionStorage;
    const codeInput = useRef();
    const passInput = useRef();
    const conPassInput = useRef();
    const [error, setError] = useState(
        {
        code: false,
        password : false,
        confirmPassword: false,
        }
    );
    const [required, setRequired] = useState(
        {
        requiredCode: false,
        requiredPassword : false,
        requiredConfirmPassword: false,
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

    if(sessionStorage.getItem('auth')){
        //navigate('/main');
        history.push("/main");
    } else if(sessionStorage.getItem('firstLogin')!=='firstLogin'){
        // navigate('/login');
        history.push("/login");
    }

    const handleVerify = () => {
        // const codeForCheck = '1000001' || '1000002' || '50000' || '5000001' || '5000002' || '5000003' || '5000004';
        const dataObject = {
            code: codeInput.current.value,
            password: passInput.current.value,
            confirmPassword: conPassInput.current.value
        }
        if(checkRequired(dataObject)){
            return console.log('Error Required field');
        }

        // if(dataObject.code !== codeForCheck){
        //     setError({...error,code: true})
        // } else if( dataObject.password !== dataObject.confirmPassword ){
        //     setError({...error,confirmPassword: true})
        // }

        baseJsonUser = {
            ...baseJsonUser,
            isfunction:"VERIFY",
            email: encryptSessionStorage.decrypt('userIDVerify'),
            password: '',
            newpassword: dataObject.password,
            verifycode: dataObject.code.toUpperCase(),
            username:"",
            phone:"",
            mobile:"",
            fullname:"",
            customerno: ""
        }
        console.log( baseJsonUser )
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
                if(JsonToObj.value[0].status === 'FAIL'){
                    return alert('FAIL');
                } else if( JsonToObj.value[0].status === "COMPLETE") {
                    alert('SUCCESSFUL');
                    return handleCancelVerify();
                    // sessionStorage.removeItem('firstLogin');
                    // encryptSessionStorage.encrypt('userID', encryptSessionStorage.decrypt('userIDVerify'));
                    // sessionStorage.removeItem('userIDVerify');
                    // return navigate("/main");
                    // // encryptSessionStorage.encrypt('admin', false);
                }
            }
        }).catch(err =>{
            console.log(err);
            setErrStatus({show: true, type: 'warning' , message: err})
        });

        // // Successful
        // setError({code: false, password: false, confirmPassword: false});
        // console.log('Verify Successfully');
        // sessionStorage.removeItem('firstLogin');
        // sessionStorage.removeItem('userIDVerify')
        // encryptSessionStorage.encrypt('userID', 123);
        // encryptSessionStorage.encrypt('admin', false);
        // // if(admin){
        // //     encryptSessionStorage.encrypt('admin',true);
        // // }
        // return navigate("/main");
    }

    const checkRequired = (object) => {
        let errorForcheck = error;
        let requiredForCheck = required;
        let emptyField = false;
        if(object.code.length === 0){
            errorForcheck={...errorForcheck,code: false};
            requiredForCheck = ({...requiredForCheck, requiredCode: true});
            emptyField = true;
        }
        // if(object.password.length === 0){
        //     errorForcheck={...errorForcheck,password: false};
        //     requiredForCheck = ({...requiredForCheck, requiredPassword: true});
        //     emptyField = true;
        // }
        // if(object.confirmPassword.length === 0){
        //     errorForcheck={...errorForcheck,confirmPassword: false};
        //     requiredForCheck = ({...requiredForCheck, requiredConfirmPassword: true});
        //     emptyField = true;
        // }
        setRequired(requiredForCheck);
        setError(errorForcheck);
        if(emptyField){
            return true;
        }

        return false;
    }

    const checkPassword = () => {
        var CheckRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
        const password = document.getElementById("CustomerPassword").value;
        if(required.requiredPassword){
            setRequired({...required,requiredPassword: false});
        }
        if(password.length < 8 || !CheckRegex.test(password)){
            return setError({...error,password: true})
        }
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

    const handleCancelVerify = () => {
        sessionStorage.removeItem('firstLogin');
        sessionStorage.removeItem('userIDVerify');
        sessionStorage.clear();
        //navigate("/login");
        history.push("/login");
    }

    return (
        <Box>
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
            <Container fluid id="divFormLogin" >
                <Col xs={12} sm={6} md={5} xl={4} style={{maxWidth: '29rem'}}>
                    <Row>
                        <Col sm={12} className="text-center">
                            <label className="uppercase bold" style={{fontSize: 'larger', margin: '20px auto'}}>VERIFY</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="form-group mb-2">
                                <label htmlFor="verifyCode" className="uppercase bold" style={{fontSize: 'small'}}>
                                    VERIFY CODE
                                </label>
                                <input
                                    type="text"
                                    className="textbox_login"
                                    name="verifyCode"
                                    id="verifyCode" 
                                    spellCheck="false"
                                    autoComplete="off" 
                                    autoCapitalize="off"
                                    autoFocus=""
                                    ref={codeInput}/>
                                <div className={`${ required.requiredCode || error.code ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {required.requiredCode && errorMessage.required.toUpperCase()}
                                    {error.code && errorMessage.code.toUpperCase()}
                                </div>
                            </div>		
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="form-group mb-2">
                                <label htmlFor="CustomerPassword" className="form-label label-text">New Password</label>
                                <input
                                type="password"
                                className="form-control rounded-0 textbox_login_fixed_pass"
                                id="CustomerPassword"
                                name="CustomerPassword"
                                spellCheck="false"
                                onChange={checkPassword}
                                maxLength="20"
                                ref={passInput}
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
                            <div className="form-group">
                                <label htmlFor="CustomerConfirmPassword" className="form-label label-text">Confirm New Password</label>
                                <input
                                type="password"
                                className="form-control rounded-0 textbox_login_fixed_pass"
                                id="CustomerConfirmPassword"
                                name="CustomerConfirmPassword"
                                spellCheck="false"
                                onChange={checkPasswordMatch}
                                ref={conPassInput}
                                maxLength="20"
                                />
                                <div className={`${ required.requiredConfirmPassword || error.confirmPassword ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {required.requiredConfirmPassword && errorMessage.required.toUpperCase()}
                                    {error.confirmPassword && errorMessage.confirmPassword.toUpperCase()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} style={{margin: 'auto',textAlign: 'center'}} >
                            <button
                                type='submit'
                                className='button-submit'
                                style={{padding: 0, marginTop: 0}}
                                onClick={handleVerify}
                            >
                                <div>
                                    SUBMIT
                                </div>
                            </button>
                            <br/>
                            <a onClick={handleCancelVerify} style={{color: 'black', margin: 'auto'}}>Cancel</a>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </Box>
      )
  }
  
  export default Verify
