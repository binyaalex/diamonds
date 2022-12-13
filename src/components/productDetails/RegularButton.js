import Button from '@mui/material/Button';
import styles from '../../App.module.scss';

const RegularButton = ({ text, light }) => {
    let style
    if (light) {
        style = { color: '#5C6AC4', borderColor: '#5C6AC4' }
    } else {
        style = { color: 'white', backgroundColor: '#4640DE' }
    }

    return (
        <Button
            style={style}
            className={styles.muiButton}
            variant="outlined"
        >{text}</Button>
    )
}

export default RegularButton