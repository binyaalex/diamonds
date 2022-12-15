import styles from "./Shopping.module.scss";

import Box from "@mui/material/Box";

import ShoppingStepper from "./ShoppingStepper";

const Shopping = () => {

  return (
    <Box className={styles.shoppingBackground} >
      <ShoppingStepper />
    </Box>
  );
};

export default Shopping;
