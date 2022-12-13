import styles from "../../App.module.scss";
import Typography from "@mui/material/Typography";

const SecondryTitle = ({ text, description2 }) => {
  return (
    <>
      <Typography className={styles.secondryTitle}>{text}</Typography>
      {description2 ? (
        <Typography className={styles.description2}>{description2}</Typography>
      ) : (
        ""
      )}
    </>
  );
};

export default SecondryTitle;
