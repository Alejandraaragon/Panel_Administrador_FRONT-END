import React, {useState} from 'react'
import "./Datatable.css";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../datatablesource';
import {Link} from "react-router-dom"

function Datatable() {

  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item)=>item.id !== id));
  }

const actionColumns = [{ field: "action", headerName: "Action", width: 200, renderCell: (params)=> {
  return (
    <div className='cellAction'>
       <Link to="/users/test" style={{textDecoration:"none"}}>
      <div className='viewButton'>View</div>
      </Link>
      <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
    </div>
  )
 }
}
];

  return (
    <div className='datatable'>
      <div className="datatabletitle">
        Add New User
        <Link 
           to="/users/new" 
           className='link'>
        Add New
        </Link>
      </div>
       <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumns)}
        pageSize={4}/* cantidad de users */
        rowsPerPageOptions={[4]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
