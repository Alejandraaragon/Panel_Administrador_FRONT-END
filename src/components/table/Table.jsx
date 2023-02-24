import React from 'react';
import "./Table.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const LisTable = () => {
    
const rows = [
    {
        id: 114315,
        product: "Acer Nitro 5",
        img: "https://http2.mlstatic.com/D_NQ_NP_662783-MCO48258357115_112021-O.webp",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
    },
    {
        id: 114316,
        product: "PlayStation 5",
        img: "https://http2.mlstatic.com/D_NQ_NP_662783-MCO48258357115_112021-O.webp",
        customer: "Michael Doe",
        date: "1 March",
        amount: 900,
        method: "Online Payment",
        status: "Pending",
    },
    {
        id: 114317,
        product: "Acer Nitro 5",
        img: "https://http2.mlstatic.com/D_NQ_NP_662783-MCO48258357115_112021-O.webp",
        customer: "John Smith",
        date: "1 March",
        amount: 500,
        method: "Online Payment",
        status: "Pending",
    },
    {
        id: 114318,
        product: "Acer Nitro 5",
        img: "https://http2.mlstatic.com/D_NQ_NP_662783-MCO48258357115_112021-O.webp",
        customer: "John Smith",
        date: "1 March",
        amount: 600,
        method: "Cash on Delivery",
        status: "Approved",
    },
    {
        id: 114319,
        product: "Acer Nitro 5",
        img: "https://http2.mlstatic.com/D_NQ_NP_662783-MCO48258357115_112021-O.webp",
        customer: "John Smith",
        date: "1 March",
        amount: 795,
        method: "Online Payment",
        status: "Pending",
    },
    {
        id: 114320,
        product: "Acer Nitro 5",
        img: "https://http2.mlstatic.com/D_NQ_NP_662783-MCO48258357115_112021-O.webp",
        customer: "John Smith",
        date: "1 March",
        amount: 100,
        method: "Cash on Delivery",
        status: "Approved",
    }
]

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell" >Product</TableCell>
            <TableCell className="tableCell" >Customer</TableCell>
            <TableCell className="tableCell" >Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell" >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell  className="tableCell">{row.id}</TableCell>
              <TableCell  className="tableCell">
                <div className="cellWrapper">
                  <img  src={row.img} alt='' className="image"/>
                  {row.product}
                </div>
              </TableCell>
              <TableCell  className="tableCell">{row.product}</TableCell>
              <TableCell  className="tableCell">{row.customer}</TableCell>
              <TableCell  className="tableCell">{row.date}</TableCell>
              <TableCell  className="tableCell">{row.amount}</TableCell>
              <TableCell  className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LisTable
