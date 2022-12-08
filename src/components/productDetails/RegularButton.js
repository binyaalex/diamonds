import Button from '@mui/material/Button';
import styles from '../../App.module.scss';

const RegularButton = () => {
    return (
        <Button style={{color: '#5C6AC4', borderColor: '#5C6AC4'}} className={styles.muiButton} variant="outlined">View All</Button>
    )
}

export default RegularButton