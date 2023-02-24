import React from 'react';
import "./Featured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';



function Featured() {
  return (
    <div className='featured' >
      <div className='top'>
       <h1 className='title'>Total Revenue</h1>
       <MoreVertIcon fontSize="small" />
      </div>
      <div className='bottom'>
        <div className='feautedChart'>
        <CircularProgressbar value={70} text={"70%"} 
        strokeWidth={5}/>
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>$420</p>
        <p className='desc'>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className='summary'>

          <div className='itemm'>
            <div className='itemmTitle'>Target</div>
            <div className='itemmResult'>
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>

          <div className='itemm'>
            <div className='itemmTitle'>Target</div>
            <div className='itemmResult'>
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>

          <div className='itemm'>
            <div className='itemmTitle'>Last Week</div>
            <div className='itemmResult'>
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>

          <div className='itemm'>
            <div className='itemmTitle'>Last Month</div>
            <div className='itemmResult'>
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
