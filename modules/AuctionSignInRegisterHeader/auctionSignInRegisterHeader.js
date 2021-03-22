import Avatar from '@material-ui/core/Avatar';
import React,{useState} from 'react'
import { Row,Column } from 'simple-flexbox';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Modal from "react-responsive-modal";
import {
    Dialog, DialogContent, Table, TableRow, TableBody,
    TableCell,
    TableHead, Select, Popover
} from "@material-ui/core";
import { toast, ToastContainer } from "react-toastify";
import AuctionHeader from "../Auction/auctionHeader"
import { useAuth0 } from "@auth0/auth0-react";
import {useDispatch, connect} from 'react-redux'
import * as actions from '../../actions';

function AuctionSignInRegisterHeader(props){
    let { state, handleOpenDialog, handleCloseDialog, handleChange, handleSubmit, onOpenModal, onOpenModalLogin, onCloseModal, onCloseModalclose,isAuthenticated ,handleLogout,handleSubmit1} = props;
    const {  logout } = useAuth0();
const [anchorEl,setAnchorEl]=useState(false)

let user={}

const open = Boolean(anchorEl);
const id=open?'simple-popover':undefined
const dispatch= useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);     
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const sendPasswordReset=()=>{
    let email=localStorage.getItem('email')
    fetch(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/dbconnections/change_password`, { 
    method: "POST", 
      
   
    body: JSON.stringify({
        client_id:process.env.REACT_APP_AUTH0_CLIENT_ID,
        email: email,
        connection: 'Username-Password-Authentication'
      }), 
      
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}).then((response)=>{
    console.log(response)
})
  }

    return(
        <div>
            <Row alignItems="center" justifyContent="space-between" className="row-header ">
                    <Column>
                        <img className="w-110px m-l-25px" src='./images/logo.svg'/>
                   </Column>
                   {(!isAuthenticated) && (
       <Column>
       <Row>
           <div className="m-t-10px m-r-40 fc-white fs-11 font-saira">AUCTION</div>
           <div className="m-t-10px m-r-40 fc-white fs-11 font-saira">ABOUT</div>
           <div className="m-t-10px m-r-40 fc-white fs-11 font-saira">IN THE NEWS</div>
  
           <div className="m-t-10px m-r-40 fs-11 fc-white font-saira"  onClick={onOpenModalLogin}>SIGN IN</div>
           <div className="m-t-10px fs-11 fc-white font-saira"
               onClick={()=> handleOpenDialog()}>REGISTER</div>
           <Dialog className="box-size" disableScrollLock={false}>

               <DialogContent className="display-flex flex-direction-column p-t-0px-m w-350-m"  id="signupAccount">
                   <button onClick={() => handleCloseDialog()} type="button" className="close-button outline-none"

                           data-dismiss="modal"

                           aria-label="Close">

                       <span className="float-lg-right" aria-hidden="true">&times;</span>

                   </button>
                   <div className="modal-body rec">
                       <h4 className="cntr">Sign up for a new Account</h4>

                       <form className="fn-s" onSubmit={handleSubmit1} noValidate>
                           <div className="colums ">
                               <div className="item width-half">
                                   <input className="form-control cstm-input "
                                          value={state.values.fname} onChange={handleChange} noValidate
                                          type="text" name="fname" id="fname"
                                          placeholder="First Name"/>
                                   {state.errors.fname.length > 0 &&
                                   <span className='error'>{state.errors.fname}</span>}
                               </div>
                               <div className="item width-half">
                                   <input className="form-control cstm-input "
                                          value={state.values.lname} onChange={handleChange} noValidate
                                          type="text" name="lname" id="lname" placeholder="Last Name"/>
                                   {state.errors.lname.length > 0 &&
                                   <span className='error'>{state.errors.lname}</span>}
                               </div>
                           </div>
                           <div className="form-group ">
                               <input className="form-control cstm-input" value={state.values.email}
                                      onChange={handleChange} noValidate type="email" name="email"
                                      placeholder="E-mail" aria-required="true"/>
                               {state.errors.email.length > 0 &&
                               <span className='error'>{state.errors.email}</span>}
                           </div>
                           <div className="form-group">
                               <input className="form-control cstm-input" value={state.values.address}
                                      onChange={handleChange} noValidate type="text" name="address"
                                      placeholder="Address" aria-required="true"/>
                               {state.errors.address.length > 0 &&
                               <span className='error'>{state.errors.address}</span>}
                           </div>
                           <div className="form-group">
                               <input className="form-control cstm-input" value={state.values.phone}
                                      onChange={handleChange} noValidate type="text" name="phone"
                                      placeholder="Phone No" aria-required="true"/>
                               {state.errors.phone.length > 0 &&
                               <span className='error'>{state.errors.phone}</span>}
                               
                           </div>
                           <div className="colums c-f  ">
                               <div className="item width-half ">
                                   <input className="form-control cstm-input" value={state.values.city}
                                          type="text" name="city" id="city" placeholder="City"
                                          aria-required="true"/>
                               </div>
                               <div className="item width-half ">
                                   <input className="form-control cstm-input" value={state.values.zip}
                                          onChange={handleChange} noValidate type="text" name="zip"
                                          id="zip" placeholder="Zip Code" aria-required="true"/>
                                   {state.errors.zip.length > 0 &&
                                   <span className='error'>{state.errors.zip}</span>}
                               </div>
                           </div>
                           <div className="form-group ">
                               <input className="form-control cstm-input" type="password"
                                      value={state.values.password} onChange={handleChange} noValidate
                                      name="password" placeholder="Password"/>
                               {state.errors.password.length > 0 &&
                               <span className='error'>{state.errors.password}</span>}
                           </div>
                           <div className="form-group ">
                               <input className="form-control cstm-input" type="password"
                                      value={state.values.repassword} onChange={handleChange}
                                      noValidate name="repassword" placeholder="Confirm Password"/>
                               {state.errors.repassword.length > 0 &&
                               <span className='error'>{state.errors.repassword}</span>}
                           </div>


                           <label className="checkbox checkbox-margin outerLabel-margin"><input type="checkbox" className="checkbox-margin chkBox"/>
                           I agree to Collectors Xchange Terms and Conditions and Privacy Policy.
                           </label>

                           <div className="submit">
                               <button className=" btn-orange h-40 bld" id="signup" type="submit" 
                                      value="Sign Up">Sign Up</button>
                           </div>
                           <br/>
                           <hr className="m-t-0 m-b-0"/>
                           <br/>
                           <p className="header-small">Already an User ?</p>
                           <button className="btn-black h-35 bld" id="signin" type="submit" value="Sign in"
                                  onClick={onOpenModalLogin}>
                                      Sign In
                                  </button>
                       </form>

                   </div>
               </DialogContent>
           </Dialog>
           {/* <!-- login --> */}

           <Dialog open={state.login} onClose={handleCloseDialog}>
       <DialogContent id="loginAccount">

           <button onClick={() => onCloseModalclose()} type="button" className="close-button outline-none" 

                   data-dismiss="modal"

                   aria-label="Close">

               <span className="float-lg-right" aria-hidden="true">&times;</span>

           </button>

               <div className="modal-body rec">
                   <h4 className="cntr padding-14px">Login to your account</h4>
                   <form className="fn-s">
                       <div className="form-group ">
                           <input className="form-control cstm-input" value={state.values.email} onChange={handleChange} noValidate type="email" name="email" placeholder="E-mail" aria-required="true" />
                           {state.errors.email.length > 0 &&
                           <span className='error'>{state.errors.email}</span>}
                       </div>
                       <div className="form-group">
                           <input className="form-control cstm-input" type="password" value={state.values.password} onChange={handleChange} noValidate name="password" placeholder="Password" />
                           {state.errors.password.length > 0 &&
                           <span className='error'>{state.errors.password}</span>}
                       </div>
                       <input className="submit btn-orange bld" id="signin" type="button" value="Sign In" onClick={handleSubmit}/>
                       <div className="padding-14px header-small">
                           <a href="#" className="fg" onClick={sendPasswordReset}>Forgot Password ?</a>
                       </div>
                       <hr />
                       <br />
                       <p className="header-small">New to Collectors Xchange</p>
                       <input className="btn-black bld" id="signin" type="button" value="Create New Account" onClick={()=> handleOpenDialog()} />

                   </form>
               </div>
       </DialogContent>
           </Dialog>

           <div className="m-l-25px cursor"><img  className="w-30" src="./images/searchicon.svg"/></div>
           <div className=" m-r-100 button-height">
               <Button className="tomato-red fs-10px m-l-25px" variant="contained" color="secondary">SELL</Button></div>
           
       
      </Row>
   </Column>      
      )}
      {((isAuthenticated && user ))&& (
          <React.Fragment>
          
           <Column>
           <Row className="align-items-center">
               <div className="fc-white fs-11 m-r-40 font-saira">AUCTION</div>
               <div className="fc-white fs-11 m-r-40 font-saira">ABOUT</div>
               <div className="fc-white fs-11 m-r-40 font-saira">IN THE NEWS</div>
               <div className="mr-2"><img  className="w-30" src="./images/searchicon.svg"/></div>
               <div className="mr-3"><img className="w-30" src="./images/notification.svg" /></div>
                            {/* <div className="fs-11 font-saira mt-0"> */}
                            <Avatar  src="./images/profile.jpg" style={{width: "30px",height: "30px"}}onClick={handleClick} /> <Popover
 id={id}
 open={open}
 anchorEl={anchorEl}
 onClose={handleClose}
 
 >
 <div className="w-330px">
 
 <div className="row m-t-20px">
 <div className="col-md-1 fs-12"></div>
 <div className="col-md-5 fs-12" onClick={handleClose}>My Profile</div>
 <div className="col-md-6 fs-12" onClick={handleClose}>My Watchlist</div>
 </div> 
 
 <div className="row margin-top-30">
 <div className="col-md-1 fs-12"></div>
 <div className="col-md-5 fs-12" onClick={handleClose}>Account History</div>
 <div className="col-md-6 fs-12" onClick={handleClose}>My Bills</div>
 </div> 
 
 <div className="row margin-top-30">
 <div className="col-md-1 fs-12"></div>
 <div className="col-md-5 m-l-2 fs-12">My Documents</div>
 <div className="col-md-6 fs-12">Account Settings</div>
 </div> 
 
 <button className="w-110px margin-top-30 m-l-90 h-40 m-b-30 border-black" onClick={handleLogout}>Log Out</button>
 
 </div>
 </Popover>      
               <div className="mrl button-height">
                   <Button className="tomato-red fs-10px m-l-25px" variant="contained" color="secondary">SELL</Button></div>
               
           
          </Row>
       </Column>      
       
       </React.Fragment>
      )}
                                 
            </Row>
            
                
        </div>
    )

}
export default AuctionSignInRegisterHeader
