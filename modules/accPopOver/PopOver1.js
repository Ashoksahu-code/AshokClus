import React , {useState} from "react";
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';

function PopOver1(props){

    const [anchorEl, setAnchorEl] = useState(false)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
   
   
   
   
   
    return(

            <div>
                <Avatar  src="./images/profile.jpg"  onClick={handleClick} className="profile-icons" style={{marginLeft: "300px"}}/>
                     <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                           
                        >
                        <div className="w-330px">

                            <div className="row m-t-20px">
                                <div className="col-md-1  fs-12"></div>
                                <div className="col-md-5  fs-12">My Profile</div>
                                <div className="col-md-6 fs-12">My Watchlist</div>
                             </div>   

                             <div className="row margin-top-30">
                                <div className="col-md-1 fs-12"></div>
                                <div className="col-md-5  fs-12">Account History</div>
                                <div className="col-md-6 fs-12">My Watchlist</div>
                             </div> 

                             <div className="row margin-top-30">
                                <div className="col-md-1 fs-12"></div>
                                <div className="col-md-5 m-l-2 fs-12">My Documents</div>
                                <div className="col-md-6 fs-12">Account Settings</div>
                             </div> 

                            <button className="w-110px margin-top-30 m-l-90 h-40 m-b-30 border-black">Log Out</button>

                        </div>
                    </Popover>





            </div>


    );




}

export default PopOver1