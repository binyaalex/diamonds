import styles from "./Payment.module.scss";
import GuyBarry from "../../../assets/images/GuyBarry.svg";
import Home from "../../../assets/icons/Home.svg";
import Phone from "../../../assets/icons/Phone.svg";

// Mui
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

const PaymentDetails = () => {
  return (
    <Box className={styles.detailsWrapper}>
      <Box>
        <Typography>Shipping Details</Typography>
        <Box>
          <Box>
            <img src={GuyBarry} />
            <Typography>5690 Matilda Green Suite 627, New York, 123</Typography>
          </Box>
          <Box>
            <Typography>Gyu Barry</Typography>
            <Typography>
              <img src={Home} />
            </Typography>
            <Typography>
              <Typography>+1 218 218 991 </Typography>
              <img src={Phone} />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography>Choose delivery option:</Typography>
        <Typography>
          "Diamonds" is committed to deliver you a the best shipping rates for a
          wide range of speeds. Arrival date shown here subject to item and
          shipping availability.
        </Typography>
      </Box>
      <Box>
        <Box>
          <Typography>2 Bussiness Days</Typography>
          <Typography>$35</Typography>
        </Box>
        <Box>
          <Typography>2 Bussiness Days</Typography>
          <Typography>$35</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentDetails;
