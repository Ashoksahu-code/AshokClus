import React from "react"
import AccountSettings from "./AccountSettings"
import BaseComponent from '../baseComponent';


class AccountSettingsClassComp extends BaseComponent{
    constructor(props) {
        super(props)
    
        this.state = {
             notificationToggle: false,
             drivingLicence: "No driving licence",

             
        }
      
    }
    
    addPhoto = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                this.setState({drivingLicence: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
       }
    

    onToggleClick = async(name , value) =>{  
       await this.setState({
            [name]: value
            })   
      }


      handleOpenDialogEmail = () => {
        this.setState({
            openDialogEmail: true
        });
    }
    handleOpenDialogPassword = () => {
        this.setState({
            openDialogPassword: true
        });
    }
    handleOpenDialogPhoneNumber = () => {
        this.setState({
            openDialogPhoneNumber: true
        });
    }
    handleOpenDialogShippingAddr = () => {
        this.setState({
            openDialogShippingAddr: true
        });
    }
    upgradeMembership = () => {
        this.setState({
            openDialogupgradeMembership: true
        });
    }

    handleCloseDialogEmail = () => {
        this.setState({
            openDialogEmail: false,
            display : false
        });
    }

    handleCloseDialogPassword = () => {
        this.setState({
            openDialogPassword: false,
            display : false
        });
    }

    handleCloseDialogPhoneNumber = () => {
        this.setState({
            openDialogPhoneNumber: false,
            display : false
        });
    }

    handleCloseDialogShippingAddr = () => {
        this.setState({
            openDialogShippingAddr: false,
            display : false
        });
    }

    handleCloseDialogupgradeMembership = () => {
        this.setState({
            openDialogupgradeMembership: false,
            display : false
        });
    }

    render(){
        return(
            <AccountSettings 
            onToggleClick={this.onToggleClick}
            handleOpenDialogEmail={this.handleOpenDialogEmail}
            handleOpenDialogPassword={this.handleOpenDialogPassword}
            handleOpenDialogPhoneNumber={this.handleOpenDialogPhoneNumber}
            handleOpenDialogShippingAddr={this.handleOpenDialogShippingAddr}
            upgradeMembership={this.upgradeMembership}  
            handleCloseDialogEmail={this.handleCloseDialogEmail}
            handleCloseDialogPassword={this.handleCloseDialogPassword}
            handleCloseDialogPhoneNumber={this.handleCloseDialogPhoneNumber}
            handleCloseDialogShippingAddr={this.handleCloseDialogShippingAddr}
            handleCloseDialogupgradeMembership={this.handleCloseDialogupgradeMembership}
            addPhoto={this.addPhoto}
            state={this.state}/>  
        )
    }


}

export default AccountSettingsClassComp;