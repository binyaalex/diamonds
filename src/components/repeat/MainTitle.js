import styles from '../../App.module.scss';
import Typography from '@mui/material/Typography';

const MainTitle = ({text, description}) => {
  
    return (
        <>
            <Typography className={styles.mainTitle}>
                {text}
            </Typography>
            {description?
                <Typography className={styles.description}>
                    {description}
                </Typography> 
            : ""}
        </>
    )
}

export default MainTitle