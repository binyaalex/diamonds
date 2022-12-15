import styles from './OrderSuccess.module.scss';
import { useNavigate } from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import V from '../../assets/icons/V.png'

const OrderSuccess = ({setIsUser}) => {
    const navigate = useNavigate();

    return (
        <Container align='center'>
            <img src={V} style={{padding: '85px 0 32px'}} />
            <Typography className={styles.mainTitle}>
                Order Placed!
            </Typography>
            <Typography className={styles.description}>
                Your order will be processed as soon as we verify the availability of them items with the sellers.
                <br></br>  
                You can check the status of your order in the Orders section. 
            </Typography>
            <div>
                <Button 
                    sx={{ color: '#4640DE' }} 
                    className={styles.backButton} 
                    variant="text"
                    onClick={() => {
                        setIsUser(true)
                        navigate("/");
                    }}
                >
                    <ArrowBackIosIcon sx={{ fontSize: '12px', marginRight: '12px' }} />
                    Back to shopping
                </Button>
                <Button 
                    sx={{color: 'white', backgroundColor: '#4640DE'}} 
                    className={styles.orderButton} 
                    variant="contained"
                    onClick={() => {
                        navigate("/myorders");
                    }}
                >Your Orders</Button>
            </div>
        </Container>
    )
}

export default OrderSuccess