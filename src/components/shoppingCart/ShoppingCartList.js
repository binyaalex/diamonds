import { Box } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1

import cardDiamond from "../../assets/images/cardDiamond.png";

export default function ShoppingCartList({ orders }) {
  //   const navigate = useNavigate();
  const ordersArr = orders || [1, 2, 3];
  // console.log(cardsArr);

  return (
    <Grid container spacing={6}>
      {ordersArr.length > 0
        ? ordersArr.map((order, i) => (
            <Grid key={i} item xs={12}>
              <Box img={cardDiamond} order={order} />
            </Grid>
          ))
        : "No orders"}
    </Grid>
  );
}
