import styles from '../../App.module.scss';
import Typography from '@mui/material/Typography';

const SecondryTitle = ({text}) => {
  
    return (
        <Typography className={styles.secondryTitle}>
            {text}
        </Typography>
    )
}

export default SecondryTitle