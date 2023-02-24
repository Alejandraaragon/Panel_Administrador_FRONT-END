import React from 'react';
import "./New.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon  from '@mui/icons-material/DriveFolderUploadOutlined';
import {useState} from "react";

function New({inputs, title}) {

  const [file, setFile] = useState("")

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='topnew'>
          <h1>{title}</h1>
        </div>
        <div  className='bottomnew'>
          <div className='leftnew'>
            {/* esto permite buscar imagenes para el producto y subirlas */}
            <img 
              src={file 
                    ? URL.createObjectURL(file) 
                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'}  
              alt='poner-foto'
            />
          </div>
          <div className='rightnew'>
            <form>
            <div className="formInput">
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='iccon'/>
                </label>
                <input 
                    type="file" 
                    id='file' 
                    onChange={e=>setFile(e.target.files[0])} 
                    style={{display: "none"}}/>
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
              ))}
              
              {/* <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder='John done'/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder='john@gmail.com'/>
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder='+1 230 52 62'/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password"/>
              </div>
              <div className="formInput">
                <label>Adress</label>
                <input type="text" placeholder='Elton St. 216'/>
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder='Argentina'/>
              </div> */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
