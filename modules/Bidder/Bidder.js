import React from 'react';
import {Avatar,Tabs,Tab,Divider} from '@material-ui/core';

export default function Bidder() {

  const [value,setValue]=React.useState(0)
  const handleTabs=(e,val) =>{
    console.warn(val)
    setValue(val)
  }
  return(
    <div className="mx-auto">
      <div>     
        <Tabs value={value} onChange={handleTabs}> 
          <Tab label="2 Purchases"/>
          <Tab label="15 Bids"/>
          <Tab label="0 Sale"/>
        </Tabs>
      </div> 
      <TabPanel value={value} index={0}>
        <div className="item1">
          <img src="./images/car1.jpg" width="54" height="52"/>
          <p className="auction"><font size="1"> Auction won on 12 Aug 2020</font><br/> 
             <font face="bold">1965 SHELBY CSX 4000 SERIES</font><br/>
             <font size="4" face="bold">$95,000</font>
          </p>
        </div>
        <Divider/>
        <div className="item1">
          <img src="./images/car2.jpg"  width="54" height="52"/> 
          <p className="auction"><font size="1">Auction won on 12 Aug 2020</font><br/> 
             <font face="bold">1965 SHELBY CSX 4000 SERIES</font><br/>
             <font size="4" face="bold">$95,000</font>
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="item1">
          <img src="./images/car1.jpg" width="54" height="45"/>
          <p className="auction"><font size="1">10:30AM, 12 Aug 2020</font><br/> 
             <font face="bold">Made a bid of $82,000 on </font><br/>
             <font size="4" face="bold">1965 SHELBY CSX 4000 SERIES</font>
          </p>
        </div>
        <Divider/>
        <div className="item1">
          <img src="./images/car2.jpg" width="54" height="52"/>
          <p className="auction"><font size="1">10:20, 12 Aug 2020</font><br/> 
             <font face="bold">Made a bid of $82,000 on</font><br/>
             <font size="4" face="bold">2017 FERRARI 488 GTB</font>
          </p>
        </div>
        <Divider/>
        <div className="item1">
          <img src="./images/car1.jpg" width="54" height="52"/>
          <p className="auction"><font size="1">8:25PM, 11 Aug 2020</font><br/> 
             <font face="bold">Made a bid of $87,000 on </font><br/>
             <font size="4" face="bold">1965 SHELBY CSX 4000 SERIES</font>
          </p>
        </div>
        <Divider/>
        <div className="item1">
          <img src="./images/car1.jpg" width="52" height="54"/>
          <p className="auction"><font size="1">9:20, 12 Aug 2020</font><br/> 
             <font face="bold">Made a bid of $75,000 on </font><br/>
             <font size="4" face="bold">1965 SHELBY CSX 4000 SERIES</font>
          </p>
        </div>
        <Divider/>
        <div className="item1">
          <img src="./images/car1.jpg" width="52" height="54"/>
          <p className="auction"><font size="1">5:29PM, 9 Aug 2020</font><br/> 
             <font face="bold">Made a bid $71,000</font><br/>
             <font size="4" face="bold">2017 SHELBY CSX 4000 SERIES</font>
          </p>
        </div>
        <Divider/>
        <div className="item1">
          <img src="./images/car2.jpg" width="52" height="54"/>
          <p className="auction"><font size="1">9:18 PM, 9 Aug 2020</font><br/> 
             <font face="bold">Made a bid of $105,000 on </font><br/>
             <font size="4" face="bold">2016 PARSCHE 911 R</font>
          </p>
        </div>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
        <img src="./images/Group 51.svg"/>
        <font size="4" color="grey">No sale is found</font>
      </TabPanel>
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
  </div>)
  } 

