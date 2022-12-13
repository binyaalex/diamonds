import * as React from 'react';
import styles from './MyOrders.module.scss';

// mui
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// assets
import edit from '../../assets/icons/edit.png'
import diamond from '../../assets/images/orderDiamond.png'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
}));

function createData(name, title, details, price, status) {
  return { name, title, details, price, status };
}

const rows = [
  createData('Frozen yoghurt', '10.02-Carat Radiant Cut Diamond', 'Very Good Cut | E Color | VS2 Clarity', 3500.00, 'shipped'),
  createData('Frozen yoghurt', '10.02-Carat Radiant Cut Diamond', 'Very Good Cut | E Color | VS2 Clarity', 3500.00, 'shipped'),
];

console.log(rows);

export default function MyOrdersTable({order}) {
  return (
    <TableContainer component={Paper}>
      <Table className={styles.myOrdersTable} sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={styles.orderImg}>Placed on:<br></br>{order.date}</StyledTableCell>
            <StyledTableCell className={styles.orderMain}>Total:<br></br>{order.totalPrice}</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(order.products)}
          {order.products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell className={styles.orderImg} component="th" scope="row" align="center">
                <img src={diamond} />
              </StyledTableCell>
              <StyledTableCell>
                <Typography className={styles.orderTitle}>
                    {product.name}
                </Typography>
                <Typography className={styles.orderDetails}>
                  {product?.color || 'D'}  | {product?.clarity || 'FL'} | {product?.cut || 'Very Good'}
                </Typography>
              </StyledTableCell>
              <StyledTableCell className={styles.orderPrice}>
                ${product.price} 
                <IconButton aria-label="">
                    <img src={edit} />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right" sx={{textAlign: '-webkit-right'}}>
                {console.log(product.status)}
                {product.status === 'authentication' ? 
                  <Typography className={styles.orderStatus} sx={{color: '#5925DC'}}>
                    {product.status}
                  </Typography> 
                : product.status === 'pending approval' ? 
                  <Typography className={styles.orderStatus} sx={{color: '#3538CD'}}>
                    {product.status}
                  </Typography>
                : <Typography className={styles.orderStatus}>
                    {product.status}
                  </Typography>
                }
            </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
