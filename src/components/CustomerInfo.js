import { Box, Grid, Collapse, Divider, Hidden, Snackbar, Backdrop, CircularProgress, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React, {useState, useEffect} from 'react';
import './Main.css';
// import { Config } from '../Config';
import { Config } from './Config';
import './CustomerInfo.css'
// import SidebarNav from '../SidebarNav';
// import { Loading } from '@nextui-org/react';

const collection = [
    {
        name: 'Buckle collection',
        link: '#'
    },
    {
        name: 'take away collection',
        link: '#1'
    },
    {
        name: 'soft collection',
        link: '#2'
    },
    {
        name: 'accessories collection',
        link: '#4'
    }
]

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomerInfo = () =>{
    const md5 = require('md5');
    const axios = require('axios');
    const userBasicAuth = Config.UserBasicAuth;
    const passBasicAuth = Config.PassBasicAuth;
    const basePageDataAPI = Config.BasePageDataAPI;
    let baseJsonPageData = Config.BaseJsonPageData;
    const baseNodeAPI = Config.BaseNodeAPI;
    const baseUserAPI = Config.BaseUserAPI;
    let baseJsonUser = Config.BaseJsonUser;
    const encryptSessionStorage = Config.EncryptSessionStorage;
    const customerno = encryptSessionStorage.decrypt('customerno');
    const [savedNum, setSavedNum] = useState('0');
    const [cartNum, setCartNum] = useState('3');
    const [collectionList,setCollectionList] = useState(collection);
    const [dataLoadedStatus, setDataLoadedStatus] = useState(true);
    const admin = encryptSessionStorage.decrypt('admin');
    const [dataObject, setDataObject] = useState({
        code: '',
        name: '',
        creditLimit : '',
        ongoing: '',
        remaining: '',
        address: {
            address: '',
            address2: '',
            country: '',
            city: '',
            postCode: '',
            phoneNo : '',
            mobile: '',
            email: '',
            homepage: '',
            contactName: ''
        },
        shippingAddress: {
            name: '',
            gln: '',
            address: '',
            address2: '',
            city: '',
            postCode: '',
            country: '',
            contact: ''
        }
    });
    const [errStatus,setErrStatus] = useState({
        show: false,
        type: "", //error, warning, info, success
        message: ""
    })
    const handleErrStatusClose = () => {
       setErrStatus ({show: false, type: "", message: ""});
    }

    const getCustomerInfo = () => {
        baseJsonPageData = {
            ...baseJsonPageData,
            pagesfilter: "CUSTOMERINFO",
            customerno: customerno.toString(),
            docno:"",
            datefilter:"",
            typefunc:""
        }
        axios({
            header: {
                "Content-Type": "application/json",
                "If-Match": "*"
            },
            method: 'post',
            url: basePageDataAPI,
            auth: {
                username: userBasicAuth,
                password: passBasicAuth
            },
            data: baseJsonPageData
          })
        .then(res => {
            if(res.status === 200){
                const JsonToObj = JSON.parse(res.data.value);
                console.log(JsonToObj);
                const data = JsonToObj.value[0];
                const country = 'Country/Region';
                setDataObject({
                    code: data.No,
                    name: encryptSessionStorage.decrypt('fullname'),
                    creditLimit : data.Credit_Limit,
                    ongoing:  data.Ongoing_AMT,
                    remaining: data.Remaining_AMT,
                    address: {
                        address: data.Address,
                        address2: data.Address2,
                        country: data.country,
                        city: data.city,
                        postCode: data.Post_Code,
                        phoneNo : data.Phone_No,
                        mobile: data.Mobile_Phone_No,
                        email: 'xxxxx',
                        homepage: 'xxxxx',
                        contactName: 'xxxxx'
                    },
                    shippingAddress: {
                        name: data.Name,
                        gln: 'xxxxx',
                        address: 'xxxxx',
                        address2: 'xxxxx',
                        city: 'xxxxx',
                        postCode: 'xxxxx',
                        country: 'xxxxx',
                        contact: data.Contact
                    }
                }
            )
            }
        }).catch(err =>{
            console.log(err);
            setErrStatus({show: true, type: 'warning' , message: err})
        });
    }

    const getWishCartNum = () => {
        axios({
            method: 'get',
            url: baseNodeAPI + 'wishcart_num?userId=' + encryptSessionStorage.decrypt('userID')
            // encryptSessionStorage.decrypt('userID')
            // auth: {
            //     username: userNodeAuth,
            //     password: passNodeAuth
            // },
          })
        .then(res => {
            const result = res.data;        
            console.log(result);     
            setSavedNum(result.wishlist_num);
            setCartNum(result.cart_num);
        })
        .catch((e) => console.log(e.response))
    }

    const [openMenu, setOpenMenu] = useState(false);
    const [openCollectionMenu, setOpenCollectionMenu] = useState(false);

    const handleOpenCollectionMenu = () => {
        setOpenCollectionMenu((prev) => !prev);
    };

    const renderCollectionList = (array) => {
        return array.map((item,index)=>(
            <Grid item key={index} xs={12}
            sx={{
            textAlign:{xs:'center', md:'start'},
            ml:{xs:0 , md:4},
            mr:{xs:0 , md:2}
            }}>
                <Box
                sx={{
                    justifyContent:{xs:'center', md:'start'},
                    lineHeight: '1em'
                }}>
                    <a
                    href={item.link}
                    className='sub-collection-text'
                    style={{
                    color: 'black'
                    }}
                    >
                        {item.name.toUpperCase()}
                    </a>
                </Box>
            </Grid>
        ))
    }

    let collectionMenuContent = (
        <Box sx={{ width: '100%'}}>
            <Divider sx={{ mx : {xs: 10,sm: 30,md:3}, mt: 2}}/>
                <Grid container spacing={3} sx={{py:2}}>
                    {renderCollectionList(collectionList)}
                </Grid>
            <Divider sx={{ mx : {xs: 10,sm: 30,md:3}}}/>
        </Box>
    );

    let collectionMenuContentMobile = (
        <Grid container rowSpacing={2} justifyContent='center'sx={{py:{xs: '40px',md:'10px'}}}>
            {/* {renderCollectionList(collectionList)} */}
            <Grid item xs={12} textAlign={{xs:'center',md:'left'}}>
                <a onClick={handleOpenCollectionMenu} style={{paddingLeft: '10px', color: 'black'}}>
                    <Box className='collection-text' 
                    sx={{
                        pl: {xs:0, md:3},
                        textAlign:{xs:'center', md:'start'}}}>
                        COLLECTION
                    </Box>
                </a>
                <Box sx={{ display: 'inline', width:'100%'}}>
                    <Collapse in={openCollectionMenu}>{collectionMenuContent}</Collapse>
                </Box>
            </Grid>
            <Grid item xs={12} textAlign={{xs:'center',md:'left'}}>
                <a href='/saved' style={{paddingLeft: '10px', color: 'black'}}>
                    <Box className='collection-text' 
                    sx={{
                        pl: {xs:0, md:3},
                        textAlign:{xs:'center', md:'start'}}}>
                        SAVED ({savedNum})
                    </Box>
                </a>
            </Grid>
            <Grid item xs={12} textAlign={{xs:'center',md:'left'}}>
                <a href='/shoppingbag' style={{paddingLeft: '10px', color: 'black'}}>
                    <Box className='collection-text' 
                    sx={{
                        pl: {xs:0, md:3},
                        textAlign:{xs:'center', md:'start'}}}>
                        CART ({cartNum})
                    </Box>
                </a>
            </Grid>
            <Grid item xs={12} textAlign={{xs:'center',md:'left'}}>
                <a href='order_list' style={{paddingLeft: '10px', color: 'black'}}>
                    <Box className='collection-text' 
                    sx={{
                        pl: {xs:0, md:3},
                        textAlign:{xs:'center', md:'start'}}}>
                        ORDER LIST
                    </Box>
                </a>
            </Grid>
            <Grid item xs={12} textAlign={{xs:'center',md:'left'}}>
                <a href='/customer_info' style={{paddingLeft: '10px', color: 'black'}}>
                    <Box className='collection-text' 
                    sx={{
                        pl: {xs:0, md:3},
                        textAlign:{xs:'center', md:'start'}}}>
                        CUSTOMER INFORMATION
                    </Box>
                </a>
            </Grid>
            {admin && <Grid item xs={12} textAlign={{xs:'center',md:'left'}}>
                <a href='/create_account' style={{paddingLeft: '10px', color: 'black'}}>
                    <Box className='collection-text' 
                    sx={{
                        pl: {xs:0, md:3},
                        textAlign:{xs:'center', md:'start'}}}>
                        CREATE ACCOUNT
                    </Box>
                </a>
            </Grid>}
        </Grid>
    );

    const [openChangPass, setOpenChangPass] = useState(false);
    
    const handleClickOpenChangPass = () => {
        setOpenChangPass(true);
    };

    const handleCloseChangPass = () => {
        setErrorField({cur:false,new:false,con:false});
        setEmptyField({cur:false,new:false,con:false});
        setOpenChangPass(false);
    };
    
    const [ emptyField ,setEmptyField] = useState({cur:false,new:false,con:false});
    const [ errorField ,setErrorField] = useState({cur:false,new:false,con:false});
    const handleChangePassword = (e) =>{
        e.preventDefault();
        const currentPass = e.target[0].value;
        const newPass = e.target[1].value;
        const conPass = e.target[2].value;
        var CheckRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
        let emptyField = {cur:false,new:false,con:false};
        let errorField = {cur:false,new:false,con:false};
        let emptyStatus = false;
        let errorStatus = false;
        if( currentPass.length===0){
            emptyField = {...emptyField, cur:true};
            emptyStatus = true;
        }
        if( newPass.length===0){
            emptyField = {...emptyField, new:true};
            emptyStatus = true;
        }
        if( conPass.length===0){
            emptyField = {...emptyField, con:true};
            emptyStatus = true;
        }

        if(!CheckRegex.test(newPass) && !emptyField.new){
            emptyField = {...emptyField, new:false};
            errorField = {...errorStatus, new:true};
            errorStatus = true;
        }
        if( newPass !== conPass && !emptyField.con){
            emptyField = {...emptyField, con:false};
            errorField = {...errorStatus, con:true};
            errorStatus = true;
        }

        if(emptyField === true || errorStatus === true){
            return (setEmptyField(emptyField),setErrorField(errorField))
        }

        setEmptyField({cur:false,new:false,con:false});
        setErrorField({cur:false,new:false,con:false});

        baseJsonUser = {
            ...baseJsonUser,
            isfunction: "CHANGEPASSWORD",
            email: encryptSessionStorage.decrypt('userID'),
            // password: md5(currentPass),
            // newpassword: md5(newPass)
            password: currentPass,
            newpassword: newPass
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
                const data = JsonToObj.value[0];
                const status = data.status;
                const currentWrong = "รหัสไม่ถูกต้อง";
                const correct = "อีเมล์";
                if( status === currentWrong){
                    return setErrorField({cur:true,new:false,con:false});
                }
                if( status.includes(correct)){
                    return (alert('Successful'),handleCloseChangPass())
                }
                console.log('error');
            }
        }).catch(err =>{
            console.log(err);
            // return setError(1);
            // setErrStatus({show: true, type: 'warning' , message: err})
        });
    }

    useEffect(() => {
        getCustomerInfo();
    }, [])

    return (
        <div>
            {/* <NextUIProvider><Loading size="xl" /></NextUIProvider> */}
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
            <Dialog open={openChangPass}>
                <DialogTitle style={{textAlign: 'center', fontFamily: 'GothamBold',textTransform: 'uppercase'}}>Change Password</DialogTitle>
                <DialogContent style={{textAlign:'center'}}>
                    <form onSubmit={handleChangePassword}>
                        <Box style={{minWidth: '25rem', maxWidth: '100vw'}}>
                            <div className='mb-3'>
                                <label htmlFor="CurrentPass" className="form-label label-text text-left"> Current Password</label>
                                <input
                                type="password"
                                className="form-control rounded-0 textbox_login_fixed"
                                id="CurrentPass"
                                name="CurrentPass"
                                spellCheck="false"
                                placeholder='Search'
                                />
                                <div className={`${ emptyField.cur || errorField.cur ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {emptyField.cur && <div>Required</div>}
                                    {errorField.cur && <div>Incorrect Current Password</div>}
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="newPass" className="form-label label-text text-left">New Password</label>
                                <input
                                type="password"
                                className="form-control rounded-0 textbox_login_fixed"
                                id="newPass"
                                name="newPass"
                                spellCheck="false"
                                placeholder='Search'
                                />
                                <div className={`${ emptyField.new || errorField.new ? 'create-account-error-show' : 'create-account-error'}`}>
                                    { emptyField.new && <div>Required</div>}
                                    { errorField.new &&  
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
                            <div className='mb-3'>
                                <label htmlFor="conPass" className="form-label label-text text-left">confirm Password</label>
                                <input
                                type="password"
                                className="form-control rounded-0 textbox_login_fixed"
                                id="conPass"
                                name="conPass"
                                spellCheck="false"
                                placeholder='Search'
                                />
                                <div className={`${ emptyField.con || errorField.con ? 'create-account-error-show' : 'create-account-error'}`}>
                                    {emptyField.con && <div>Required</div>}
                                    {errorField.con && <div>Password mismatch with previous field</div>}
                                </div>
                            </div>
                            <button className="button-submit" type='submit'
                            // onClick={handleCloseChangPass}
                            >Submit</button>
                            <br/>
                            <a onClick={handleCloseChangPass}>Cancel</a>
                        </Box>
                    </form>
                </DialogContent>
            </Dialog>
            <div style={{textAlign: 'center'}}>
                <Typography
                fontFamily='GothamBook'
                className='uppercase'
                marginBottom={{xs:1,sm:2,md:3}}
                style={{letterSpacing: '2px'}}>
                    INFORMATION
                </Typography>
            </div>
            <Grid container style={{paddingTop: '1rem'}}>
                <Box sx={{ display: 'flex', width:'100%'}}>
                    <Collapse in={openMenu}>{collectionMenuContentMobile}</Collapse>
                </Box>
                {/* <Grid item xs={12} md={2}>
                    <SidebarNav savedNum={savedNum} cartNum={cartNum}/>
                </Grid>   */}
                <Grid item xs={12} md>
                    <Grid container style={{padding: 20, marginBottom: '4rem'}}>
                        <Grid item xs={12}>
                            <Typography variant='h6' fontWeight={700} sx={{textAlign:{xs: 'center', md: 'left'},marginTop: '0px',marginBottom: '1rem', fontFamily:'GothamBook'}}>
                                GENERAL
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{padding: '0px 1.5rem'}}>
                            <Grid container rowSpacing={1}>
                                <Grid item xs={12} sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <Grid container>
                                        <Grid item xs={6} md={6}>
                                            CUSTOMER CODE:
                                        </Grid>
                                        <Grid item xs={6} md={6} sx={{textAlign:{xs: 'right', md: 'left'}}}>
                                            {dataObject.code}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sx={{padding: 1}}>
                                    <Grid container>
                                        <Grid item xs={6} md={6}>
                                            NAME:
                                        </Grid>
                                        <Grid item xs={6} md={6} sx={{textAlign:{xs: 'right', md: 'left'}}}>
                                            {dataObject.name}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <Grid container>
                                        <Grid item xs={6} md={6}>
                                            CREDIT LIMIT:
                                        </Grid>
                                        <Grid item xs={6} md={6} sx={{textAlign:{xs: 'right', md: 'left'}}}>
                                            {dataObject.creditLimit}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sx={{padding: 1}}>
                                    <Grid container>
                                        <Grid item xs={6} md={6}>
                                            ONGOING AMT:
                                        </Grid>
                                        <Grid item xs={6} md={6} sx={{textAlign:{xs: 'right', md: 'left'}}}>
                                            {dataObject.ongoing}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <Grid container>
                                        <Grid item xs={6} md={6}>
                                            REMAINING AMT:
                                        </Grid>
                                        <Grid item xs={6} md={6} sx={{textAlign:{xs: 'right', md: 'left'}}}>
                                            {dataObject.remaining}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h6' fontWeight={700} sx={{textAlign:{xs: 'center', md: 'left'},marginTop: '2rem',marginBottom: '1rem', fontFamily:'GothamBook'}}>
                                ADDRESS
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} style={{padding: '0px 1.5rem'}}>
                            <Grid container rowSpacing={1}>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        address
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.address}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{padding: 1}}>
                                    <div className='customer-flex-left'>
                                        address 2
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.address2}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Country / Region code
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.country}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{padding: 1}}>
                                    <div className='customer-flex-left'>
                                        City
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.city}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        post code
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.postCode}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex"sx={{padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Phone No.
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.phoneNo}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} style={{padding: '0px 1.5rem'}}>
                            <Grid container rowSpacing={1}>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Mobile Phone No.
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.mobile}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Email
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.email}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Home Page
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.homepage}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Contact
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Contact NAME
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.address.contactName}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h6' fontWeight={700} sx={{textAlign:{xs: 'center', md: 'left'},marginTop: '2rem',marginBottom: '1rem', fontFamily:'GothamBook'}}>
                                SHIPPING ADDRESS
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} style={{padding: '0px 1.5rem'}}>
                            <Grid container rowSpacing={1}>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        name
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.shippingAddress.address}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex"sx={{padding: 1}}>
                                    <div className='customer-flex-left'>
                                        gln
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.shippingAddress.gln}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        address
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.shippingAddress.address}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex"sx={{padding: 1}}>
                                    <div className='customer-flex-left'>
                                        address 2
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.shippingAddress.address2}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} style={{padding: '0px 1.5rem'}}>
                            <Grid container rowSpacing={1}>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        city
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.shippingAddress.city}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex"sx={{padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Post Code
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.shippingAddress.postCode}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{backgroundColor: '#f7f7f7',padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Country / Region Code
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.shippingAddress.country}
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="customer-flex" sx={{padding: 1}}>
                                    <div className='customer-flex-left'>
                                        Contact
                                    </div>
                                    <div className='customer-flex-right'>
                                        {dataObject.shippingAddress.contact}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item xs={12} sm={6} md={4} sx={{m:'0px auto'}}>
                                <button className='button-submit' onClick={handleClickOpenChangPass}>
                                    Change password
                                </button>
                            </Grid>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default CustomerInfo;