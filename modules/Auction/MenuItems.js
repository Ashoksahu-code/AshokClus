import React from 'react'
import {Avatar,Tabs,Tab,Divider} from '@material-ui/core';

export const menuItem=  [
    
    {
        title: 'AUCTIONS',
        url: '#',
        cName:'nav-links'

    },
    {
        title: 'ABOUT',
        url: '#',
        cName:'nav-links'

    },
    {
        title: 'IN_THE_NEWS',
        url: '#',
        cName:'nav-links'

    },   
]

function Bidder() {

    const [value,setValue]=React.useState(0)
    const handleTabs=(e,val) =>{
      console.warn(val)
      setValue(val)
    }
    return(
      <div className="item2">
        <div className="item2">      
          <Tabs value={value} onChange={handleTabs}> 
            <Tab label="2 Purchases"/>
            <Tab label="15 Bids"/>
            <Tab label="0 Sale"/>
          </Tabs>
        </div> 
        <TabPanel value={value} index={0}>
          <div className="item1">
            <Avatar alt="Remy Sharp" src="./images/car1.jpg"/>
            <p className="auction"><font size="1"> Auction won on 12 Aug 2020</font><br/> 
               <font face="bold">1965 SHELBY CSX 4000 SERIES</font><br/>
               <font size="4" face="bold">$95,000</font>
            </p>
          </div>
          <Divider/>
          <div className="item1">
            <Avatar alt="Remy Sharp" src="./images/car2.jpg" className="pic"/> 
            <p className="auction"><font size="1">Auction won on 12 Aug 2020</font><br/> 
               <font face="bold">1965 SHELBY CSX 4000 SERIES</font><br/>
               <font size="4" face="bold">$95,000</font>
            </p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="item1">
            <Avatar alt="Remy Sharp" src="./images/car1.jpg"/>
            <p className="auction"><font size="1">10:30AM, 12 Aug 2020</font><br/> 
               <font face="bold">Made a bid of $82,000 on </font><br/>
               <font size="4" face="bold">1965 SHELBY CSX 4000 SERIES</font>
            </p>
          </div>
          <Divider/>
          <div className="item1">
            <Avatar alt="Remy Sharp" src="./images/car2.jpg"/>
            <p className="auction"><font size="1">10:20, 12 Aug 2020</font><br/> 
               <font face="bold">Made a bid of $82,000 on</font><br/>
               <font size="4" face="bold">2017 FERRARI 488 GTB</font>
            </p>
          </div>
          <Divider/>
          <div className="item1">
            <Avatar alt="Remy Sharp" src="./images/car1.jpg"/>
            <p className="auction"><font size="1">8:25PM, 11 Aug 2020</font><br/> 
               <font face="bold">Made a bid of $87,000 on </font><br/>
               <font size="4" face="bold">1965 SHELBY CSX 4000 SERIES</font>
            </p>
          </div>
          
         
         
        </TabPanel>
        <TabPanel value={value} index={2}><font size="3">NO Sale Is Found</font></TabPanel>
      </div>
    );
  
  }
  function TabPanel(props)
  {
  const {children,value,index}=props;
    return(<div>
      {
        value===index && (
          <h1>{children}</h1>
        )
      }
    </div>
    )
} 

export default Bidder;