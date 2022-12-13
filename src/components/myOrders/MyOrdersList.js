// import './CardList.css';
import { useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid'; // Grid version 1


import MyOrdersTable from "./MyOrdersTable";


import cardDiamond from "../../assets/images/cardDiamond.png";

export default function MyOrdersList({ orders }) {
  const navigate = useNavigate();
  const ordersArr = orders || [1, 2, 3];
  // console.log(cardsArr);

  return (
    <Grid container spacing={6} >
      {ordersArr.length > 0
        ? ordersArr.map((order, i) => (
          <Grid key={i} item xs={12} >
            <MyOrdersTable img={cardDiamond} order={order} />
          </Grid>
        ))
        : "No orders"}
    </Grid>
  );
}