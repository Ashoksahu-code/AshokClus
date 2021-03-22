import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import { Row,Column } from 'simple-flexbox';
import Button from '@material-ui/core/Button';
import Dropfaq from '../Header/Dropfaq'

function faqHeader(props){
    return(
        <div>
            <Row alignItems="center" justifyContent="space-between" className="row-header position-fixed z-index-100">
                    <Column className="logo-header">
                       <img src="images/logo.svg" className="margin-left-100px w-h-100px"/>
                    </Column>
                    <Column>
                        <Row>
                            <Avatar alt="" src="./images/car2.jpg" style={{marginRight : "20px" , width: "30px",height: "30px"}}/>                            
                            {/* <div className="menu1 faq-menu"><Button variant="contained" color="secondary" >FAQ</Button></div>  */}
                            <div className="faq-menu"><Dropfaq /></div>                           
                            
                        
                       </Row>
                    </Column>                    
            </Row>
                
        </div>
    )
}


export default faqHeader