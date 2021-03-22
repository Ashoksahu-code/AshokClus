import React , {useState} from "react";
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';

function PopOver2(props){

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
                        <div className="w-430px mbm">

                            <div className="row m-t-20px">
                                <div className="col-md-1 fs-12"></div>
                                <div className="col-md-5 fs-14 fw-bold">Notifications</div>
                                <div className="col-md-6 fs-12"></div>
                             </div>   

                             <div className="row margin-top-30">
                                <div className="col-md-1 fs-12"></div>
                                <div className="col-md-8 fs-12">Complete your buyer experiance survey to get customized auction alerts</div>
                                <div className="col-md-3 fs-12"><i class="fa fa-circle float-right mrs"></i></div>
                                
                             </div> 
                             <div className="fs-11 fc-red margin-left-40px">Just Now</div>

                             <div className="row margin-top-30">
                                <div className="col-md-1 fs-12"></div>
                                <div className="col-md-8 fs-12">Complete your buyer experiance survey to get customized auction alerts</div>
                                <div className="col-md-3 fs-12"><i class="fa fa-circle float-right mrs"></i></div>
                                
                             </div> 
                             <div className="fs-11 fc-red margin-left-40px">Just Now</div>


                             <div className="row margin-top-30">
                                <div className="col-md-1 fs-12"></div>
                                <div className="col-md-8 fs-12">Complete your buyer experiance survey to get customized auction alerts</div>
                                <div className="col-md-3 fs-12"><i class="fa fa-circle float-right mrs"></i></div>
                                
                             </div> 
                             <div className="fs-11 fc-red margin-left-40px">Just Now</div>

                             <div className="row margin-top-30">
                                <div className="col-md-1 fs-12"></div>
                                <div className="col-md-8 fs-12">Complete your buyer experiance survey to get customized auction alerts</div>
                                <div className="col-md-3 fs-12"></div>
                                
                             </div> 
                             <div className="fs-11 fc-red margin-left-40px">Just Now</div>

                        </div>
                    </Popover>





            </div>


    );




}

export default PopOver2