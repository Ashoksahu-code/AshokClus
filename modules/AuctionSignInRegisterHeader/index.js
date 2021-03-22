import React from 'react'
import BaseComponent from "../baseComponent";
import Utils, {dispatchAction} from "../../utility";
import AuctionSignInRegisterHeader from './auctionSignInRegisterHeader'
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import Register from "../SignUp/signUpComponent";
import * as sessionActions from '../../actions';
import Sell from "../sellScreen/index"


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }


class RedemptionRequest extends BaseComponent {


    constructor(props) {
        super(props);


        this.state = {

            openDialogRedeem: false,
            isTokeezWalletOpen: false,
            tabContent: '',
            fname: null,
            lname: null,
            address: null,
            zip: null,
            email: null,
            password: null,
            repassword: null,
            phone:null,
            errors: {
                fname: '',
                lname: '',
                email: '',
                address: '',
                zip: '',
                password: '',
                repassword: '',
                phone:""
            },
            values: {
                fname: '',
                lname: '',
                email: '',
                address: '',
                zip: '',
                password: '',
                repassword: '',
                phone:''
            },
            isAuthenticate:false

        }
    }
    componentWillMount() {
       this.props.actions.signoutUser();
      }

    handleOpenDialog = () => {

        this.setState({
            openDialogRedeem: true,

        });


    }

    tokenWalletHandler=()=> {
        this.setState({
            isTokeezWalletOpen: true,
            tabContent:<Sell />
        })
        console.log("hello")
    }


    handleCloseDialog = () => {
        this.setState({
            openDialogRedeem: false
        });
    }


    onOpenModalLogin = () => {
        this.setState({ sign:false, login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };
    onCloseModalclose = () => {
        this.setState({ login: false });
    };

    handleSubmit1 = async(event) => {
        event.preventDefault();
        //await sleep(2000)
        if(validateForm(this.state.errors)) {
            console.info('Valid Form')
            const { email ,fname,lname,address,zip,phone} = this.state.values;
            let obj={email,
                password:"incorrect6190#", 
                fname,
            lname,
            email,
            address,
            zip,
            phone
            }
            console.log(email);
            
            this.props.actions.signupUser(obj, () => {
                this.onCloseModal()
                return this.props.history.push("/");
              });
         
        }else{
            console.error('Invalid Form')
        }
    }

    handleSubmit = async(event) => {
        //await sleep(3000)
        console.log(event)
        event.preventDefault();
        if(validateForm(this.state.errors)) {
            console.info('Valid Form')
            // alert("thanks")
            const { email, password } = this.state.values;
            console.log(email);
            // this.setState({isAuthenticated:true})
            this.props.actions.signinUser({ email, password }, () => {
                this.onCloseModalclose()
                return this.props.history.push("/");
              });
         
        }else{
            console.error('Invalid Form')
        }
    }
    

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        let values = this.state.values;
        switch (name) {
            case 'fname':
                values['fname'] = value
                errors.fname =
                    value.length < 5
                        ? 'must be 5 char long!'
                        : '';
                break;
            case 'lname':
                values['lname'] = value
                errors.lname =
                    value.length < 5
                        ? 'must be 5 char long!'
                        : '';
                break;
            case 'email':
                values['email']= value
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : '   Email is not valid!';
                break;
            case 'address':
                values['address']= value
                errors.address =
                    value.length < 5
                        ? 'Block-Building-Area'
                        : '';
                break;
            case 'zip':
                values['zip']= value
                errors.zip =
                    value.length < 6
                        ? 'must have 6 digit'
                        : '';
                break;
            case 'password':
                values['password']= value
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            case 'repassword':
                values['repassword']= value
                errors.repassword =
                    value.length < 8 ? 'Password must be 8 characters long!'

                        : (value == values.password ? '' : 'password not matched !' ) ;
                break;
                case 'phone':
                    values['phone']= value
                    errors.phone =
                        value.length < 10 ? 'Phone must be 10 characters long!':"";
    
                    break;
            default:
                break;
        }

        this.setState({errors, values});
    }

    handleLogout=(event)=>{
        console.log(event)
        event.preventDefault();
        this.props.actions.signoutUser()
         
     
    }



    componentDidMount() {

    }


    render() {
        let { isAuthenticated } = this.props;
        return (<AuctionSignInRegisterHeader state={this.state}
                                         handleOpenDialog={this.handleOpenDialog}
                                         handleCloseDialog={this.handleCloseDialog}
                                              onOpenModalLogin = { this.onOpenModalLogin}
                                              onCloseModal = { this.onCloseModal}
                                              onCloseModalclose = { this.onCloseModalclose}
                                              handleChange = {this.handleChange}
                                              handleSubmit = {this.handleSubmit}
                                              isAuthenticated={isAuthenticated}
                                              handleLogout={this.handleLogout}
                                              handleSubmit1={this.handleSubmit1}
                                              tokenWalletHandler = {this.tokenWalletHandler}

            />
        )
    }
}

function mapStateToProps(state) {
    console.log("auth",state.auth)
    const { error, timestamp, forgotMsg, loading ,authenticated} = state.auth;
  return {
    error,
    timestamp,
    forgotMsg,
    loading,
    isAuthenticated: authenticated,
  };
   
  }

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(sessionActions, dispatch)
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RedemptionRequest);
