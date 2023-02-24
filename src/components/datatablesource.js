
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: "user", headerName: "User", width: 230, renderCell: (params)=> {
        return (
            <div className="cellWithImg">
                <img  className="cellIng" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
    }},
    {
      field: "email", 
      headerName: "Email", 
      with:230  
    },
    {
        field: "age", 
        headerName: "Age", 
        with:100 
      },
      {
        field: "status", 
        headerName: "Status", 
        with:160,
        cellRender: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }
      }
];


export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email: "1Snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jenny",
        img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "passive",
        email: "2Jenny@gmail.com",
        age: 39,
    },
    {
        id: 3,
        username: "Dan",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email: "2dan@gmail.com",
        age: 25,
    },
    {
        id: 4,
        username: "Cara",
        img: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email: "4cara@gmail.com",
        age: 30,
    }
]