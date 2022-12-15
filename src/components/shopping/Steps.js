import ShoppingCart from "./shoppingCart/ShoppingCart";
import Payment from "./payment/Payment";
import Review from "./review/Review";

const Steps = ({activeStep, handleNext}) => {

  switch(activeStep) {
    case 0:
      return (
        <>
          <ShoppingCart handleNext={handleNext} />
        </>
      );
      break;
    case 1:
      return (
        <>
          <Payment handleNext={handleNext} />
        </>
      );
      break;
    case 2:
      return (
        <>
          <Review />
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
