import React from "react"
import Avatar from '@material-ui/core/Avatar';
import {Row, Column} from "simple-flexbox";
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from "@material-ui/core";
// import AuctionSignInRegisterHeader from "../AuctionSignInRegisterHeader/auctionSignInRegisterHeader";
import AuctionHeader from "../AuctionSignInRegisterHeader"

function AccountSettings(props){
let{onToggleClick , state ,handleCloseDialogPassword, handleCloseDialogPhoneNumber, handleCloseDialogEmail, handleOpenDialogEmail,
handleOpenDialogPassword,handleCloseDialogShippingAddr,handleOpenDialogPhoneNumber, handleOpenDialogShippingAddr, upgradeMembership ,
handleCloseDialogupgradeMembership , addPhoto} = props
    return(
        
        <div>
            {/* <AuctionSignInRegisterHeader /> */}
            <AuctionHeader />
            <div className="acc1div"><img src={state.drivingLicence} className="acc1div"></img>
               <input type="file" name="image-upload" id="input" accept="image/*" onChange={addPhoto}/>
               <button className="acc-settings-backgroundImage"><label htmlFor="input"><img src="images/camerasvg.svg" className="background-img-camerasvg"></img></label>Background</button>   
                
                {/* <Avatar style={{position: "fixed", left: "650px", top:"150px" ,width: "80px" , height:"80px",backgroundColor:"white"}} src={state.drivingLicence}>
                        <input type="file" name="image-upload" id="input" accept="image/*" onChange={addPhoto}/>
                        <label htmlFor="input"><img src={"images/camerasvg.svg"} className="acc-settings-avatar-camerasvg"></img></label>
                </Avatar> */}
                <div className="acc-settings-profileName">John Appleased </div>
            </div> 

             <div className="acc2div">
                <div className="acc1col">


                </div>
                <div className="acc2col">
                    <div className="accountSettings">Account Settings</div><div className="accshr" />
                     <div className="accdivpart">
                        <div className="accdivleft">
                            <p className="emailh">Email Address</p>
                            <p className="email">sristi@gmail.com</p>
                        </div>
                        <button className="notver">Not Verified</button>

                        <button className="accsbtn fs-12" onClick={handleOpenDialogEmail}>Resend</button>
                        <Dialog className="" open={state.openDialogEmail} onCancel={handleCloseDialogEmail}>
                                        <DialogContent className="w-360px h-260px">

                                                            
                                                            <img src="images/onCloseSign.svg" className="on-close" onClick={handleCloseDialogEmail}></img>
                                                            <div className="reg-for-mobile p-t-10px p-b-20px">Email Verification</div>

                                                            <input type="text" placeholder="Phone" className="reg-phone-placeholder" required />

                                                            <button type="submit" className="reg-btn">Continue</button>

                                        </DialogContent>
                                        <DialogActions>
                                        </DialogActions>
                </Dialog>
                    </div><div className="accshr" />
 
                    <div className="accdivpart">        
                        <div className="accdivleft">
                            <p className="emailh">Password</p>
                            <p className="email">......</p>
                        </div>      
                        <button className="accsbtn fs-12" onClick={handleOpenDialogPassword}>update</button>
                        <Dialog className="" open={state.openDialogPassword} onCancel={handleCloseDialogPassword}>
                                        <DialogContent className="w-360px h-260px">

                                                            
                                                            <img src="images/onCloseSign.svg" className="on-close" onClick={handleCloseDialogPassword}></img>
                                                            <div className="reg-for-mobile p-t-10px p-b-20px">Password</div>

                                                            <input type="text" placeholder="Phone" className="reg-phone-placeholder" required />

                                                            <button type="submit" className="reg-btn">Continue</button>

                                        </DialogContent>
                                        <DialogActions>
                                        </DialogActions>
                        </Dialog>
                    </div><div className="accshr" />


                   <div className="accdivpart">
                        <div className="accdivleft">
                            <p className="emailh">Phone Number</p>
                            <p className="email">123456789</p>
                        </div>   
                        <button className="accsbtn fs-12" onClick={handleOpenDialogPhoneNumber}>Add Phone</button>
                        <Dialog className="" open={state.openDialogPhoneNumber} onCancel={handleCloseDialogPhoneNumber}>
                                        <DialogContent className="w-360px h-260px">

                                                            
                                                            <img src="images/onCloseSign.svg" className="on-close" onClick={handleCloseDialogPhoneNumber}></img>
                                                            <div className="reg-for-mobile p-t-10px p-b-20px">Phone Number</div>

                                                            <input type="text" placeholder="Phone" className="reg-phone-placeholder" required />

                                                            <button type="submit" className="reg-btn">Continue</button>

                                        </DialogContent>
                                        <DialogActions>
                                        </DialogActions>
                        </Dialog>
                    </div><div className="accshr" />


                    <div className="acc-settings-ShippingDiv">
                        <div className="accdivleft">
                            <p className="emailh">Shipping Address</p>
                            <p className="email">123,ABC Street,Houston,Texas 77005</p>
                        </div>    
                        
                        
                        <button className="accsbtn fs-12" onClick={handleOpenDialogShippingAddr}>update</button>
                    <Dialog className="" open={state.OpenDialogShippingAddr} onCancel={handleCloseDialogShippingAddr}>
                    <DialogContent className=" w-330px h-150 p-t-10px">

                        <button onClick={handleCloseDialogShippingAddr} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <br></br>
                        <div className="dialog-heading center">Update Shipping Address</div>

                        <div className="m-t-20px">
                            <Row>
                                <input id="numberOfTokens"
                                       placeholder= "cx-v20-0001"
                                       className="lkt w-100-per"/>

                            </Row>

                            <div className="display-flex">

                                <Row className="dropdowns m-t-15px ">
                                    {/*<img className="float-right" src="/images/arrow.svg" alt=""/>*/}
                                    <input className="lkt dropbtn  " placeholder="wss-cv"/>


                                    <div className="dropdown-content w-100-per">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>

                                </Row>


                                <Row>

                                    <input id="numberOfTokens"
                                           placeholder= "cx-v20-0001"
                                           className=" lkt dropbtn ml-4 m-t-15px"/>

                                </Row>

                            </div>

                            <Row className="dropdown m-t-15px">
                                {/*<img className="float-right" src="/images/arrow.svg" alt=""/>*/}
                                <input className="lkt  w-100-per" placeholder="wss-cv"/>


                                <div className="dropdown-content w-100-per">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>

                            </Row>

                            <Row vertical={'center'} className="my-3">
                                <input style={{width: '15px'}}
                                       id="isRememberMeSelected"
                                       type="checkbox"
                                        name="lsRememberMe"
                                       className="checkbox-border"/>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <Column
                                    className="m-lg-2 fs-11-m fc-blue-grey font-weight-normal">Mark As Billing Address</Column>
                            </Row>

                            <button
                                className="m-t-20px fs-12-m  outline-none fc-white  submit-button w-100per m-b-10px-m">
                                Update
                            </button>



                        </div>





                    </DialogContent>
                    <DialogActions>

                    </DialogActions>
                </Dialog>
                        </div><div className="accshr" /> 

                <div className="drivingLicenceImageDiv">
                        <div className="drivingLicenceImageSize">
                            <p className="emailh">Driving Licence</p>
                            <img src={state.drivingLicence} className="imageAccountSettings" />
                            <input type="file" name="image-upload" id="input" accept="image/*" onChange={addPhoto}/>
                        </div>    
                        
                        
                        <button className="addPhoto fs-12"><label htmlFor="input">Add Photo</label></button>
                </div><div className="accshr" />
                    

                    <div className="accdivpart">
                        <div className="accdivleft">
                            <p className="emailh">MemberShip</p>
                            <p className="email">Free MemberShip</p>
                        </div>    
                        
                        
                        <button className="accsbtn fs-12" onClick={upgradeMembership}>Upgrade</button>
                        <Dialog className="" open={state.openDialogupgradeMembership} onCancel={handleCloseDialogupgradeMembership}>
                                        <DialogContent className="w-360px h-260px">

                                                            
                                                            <img src="images/onCloseSign.svg" className="on-close" onClick={handleCloseDialogupgradeMembership}></img>
                                                            <div className="reg-for-mobile p-t-10px p-b-20px">Free MemberShip</div>

                                                            <input type="text" placeholder="Phone" className="reg-phone-placeholder" required />

                                                            <button type="submit" className="reg-btn">Continue</button>

                                        </DialogContent>
                                        <DialogActions>
                                        </DialogActions>
                        </Dialog>
                    </div><div className="accshr" />

                    <br /><br /> 

                    <div className="accountSettings">Notifications</div><div className="accshr" />

                    <div className="accdivpart">
                        <div className="accdivleft">
                            <p className="emailh">Notification Title</p>
                            <p className="email">Description of the Notification</p>
                        </div>    
                        
                        
                        <div onClick={() => onToggleClick("notificationToggle",!state.notificationToggle)}>
                           <i className={state.notificationToggle ? "fa fa-toggle-on fa-2x acc-settings-toggle":"fa fa-toggle-off fa-2x acc-settings-toggle"}></i>
                       </div>
                    </div><div className="accshr" />

                    <div className="accdivpart">
                        <div className="accdivleft">
                            <p className="emailh">Notification Title</p>
                            <p className="email">Description of the Notification</p>
                        </div>    
                        
                        
                       <div onClick={() => onToggleClick("notificationToggle",!state.notificationToggle)}>
                           <i className={state.notificationToggle ? "fa fa-toggle-on fa-2x acc-settings-toggle":"fa fa-toggle-off fa-2x acc-settings-toggle"}></i>
                       </div>
                    </div><div className="accshr" />
 
                   


                </div>
                <div className="acc3col">


                </div>
            
             </div>      
        
        
        
        
        
        
        </div>    

    )

}

export default AccountSettings