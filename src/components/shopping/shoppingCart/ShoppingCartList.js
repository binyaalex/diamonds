import styles from "./MyOrders.module.scss";

//Mui

import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import cardDiamond from "../../../assets/images/cardDiamond.png";
import Stroller from "../../../assets/images/Stroller.png";
import ShoppingCartTable from "./ShoppingCartTable";

export default function ShoppingCartList({ orders }) {
  //   const navigate = useNavigate();
  const ordersArr = orders || [1, 2, 3];
  // console.log(cardsArr);

  return (
    <div className={styles.wrapper}>
      <Grid container spacing={6}>
        {ordersArr.length > 0
          ? ordersArr.map((order, i) => (
              <Grid key={i} item xs={12}>
                <ShoppingCartTable img={cardDiamond} order={order} />
              </Grid>
            ))
          : "No orders"}
      </Grid>
      <Box className={styles.checkout}>
        <Box className={styles.voucher}>
          <Box>
            <Typography>Have a voucher?</Typography>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Voucher code"
              variant="outlined"
              sx={{
                backgroundColor: "#F9FAFB",
              }}
            />
            <button className={styles.applybtn}>Apply</button>
          </Box>
        </Box>
        <Box className={styles.summary}>
          <Box>
            <Typography>Order Summary</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography>Price</Typography>
            <Typography>$1725.00</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography>Discount 10%</Typography>
            <Typography>-$125</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography>Total Price</Typography>
            <Typography>$1600.00</Typography>
          </Box>
          <Box>
            <button className={styles.checkoutbtn}>
              <IconButton aria-label="">
                <img src={Stroller} />
              </IconButton>
              <Typography>Proceed to Checkout</Typography>
            </button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
