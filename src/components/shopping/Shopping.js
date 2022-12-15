import styles from "./Shopping.module.scss";

import Box from "@mui/material/Box";

import ShoppingStepper from "./ShoppingStepper";

const Shopping = ({setIsUser}) => {

  return (
    <Box className={styles.shoppingBackground} >
      <ShoppingStepper setIsUser={setIsUser} />
    </Box>
  );
};

export default Shopping;
