import Payment from "./payment/Payment";
import ShoppingCart from "./shoppingCart/ShoppingCart";

const Steps = ({activeStep}) => {

  switch(activeStep) {
    case 0:
      return (
        <>
          <ShoppingCart />
        </>
      );
      break;
    case 1:
      return (
        <>
          <Payment />
        </>
      );
      break;
    case 2:
      return (
        <>
          step {activeStep + 1}
        </>
      );
      break;
    default:
      return (
        <>
          huoston we have a default problem
        </>
      );
  }
};

export default Steps;
