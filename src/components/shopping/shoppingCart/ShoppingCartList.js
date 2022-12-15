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

export default function ShoppingCartList({ orders, handleNext }) {
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
            <Typography className={styles.CheckoutTitle}>
              Have a voucher?
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
            }}
            noValidate
            autoComplete="off"
          >
            <input className={styles.Vinput} placeholder="Voucher code" />
            <button className={styles.applybtn}>Apply</button>
          </Box>
        </Box>
        <Box className={styles.summary}>
          <Box>
            <Typography className={styles.CheckoutTitle}>
              Order Summary
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography className={styles.text}>Price</Typography>
            <Typography>$1725.00</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography className={styles.text}>Discount 10%</Typography>
            <Typography>-$125</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography className={styles.text}>Total Price</Typography>
            <Typography>$1600.00</Typography>
          </Box>
          <Box>
            <button className={styles.checkoutbtn} onClick={handleNext} >
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
