import React from 'react';
import "./Single.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Charts from "../../components/charts/Charts";
import LisTable from "../../components/table/Table";

function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='topp'>
          <div className='left1'>
            <div className='editButton'>Edit</div>
            <h1 className='titlee'>Information</h1>
            <div className="iteem">
              <img 
                 src="https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 alt="perfil" 
                 className="iteemImg"
                  />
              <div className="details">
                <h1 className="itemTitle">Jane Done</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 6498 35 18</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton St. 234 Garden</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right1'>
            <Charts aspect={3 / 1} title="User Spending ( Last 6 Months)"/>
          </div>
        </div>
        <div className='buttom'>
        <h1 className='titlee'>Last Transition</h1>
          <LisTable />
        </div>
     </div>
    </div>
  )
}

export default Single

