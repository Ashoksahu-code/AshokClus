import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import { Row,Column } from 'simple-flexbox';
import Button from '@material-ui/core/Button';

function auctionHeader(){
    return(
        <div>
            <Row alignItems="center" justifyContent="space-between" className="row-header">
                    <Column className="logo-header">
                       <p>LOGO</p>
                    </Column>
                    <Column>
                        <Row>
                            <div className="menu1 menu2 menu3 font-saira">AUCTION</div>                            
                            <div className="menu1 menu2 menu3 font-saira">ABOUT</div>
                            <div className="menu1 menu2 menu3 font-saira">IN THE NEWS</div>
                            <div className="menu1 menu2"><img src="./images/search-icons.svg" /></div>                            
                            <div className="menu1 menu2"><img src="./images/notification.svg" /></div>
                            <div className="menu1 menu2"><Avatar src="./images/profile.jpg"  className="profile-icons" /></div>                            
                            <div className="menu1 menu2 button-height"><Button variant="contained" color="secondary">SELL</Button></div>
                            
                        
                       </Row>
                    </Column>                    
            </Row>
                
        </div>
    )

}
export default auctionHeader
