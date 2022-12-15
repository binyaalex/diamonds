import styles from "./Shopping.module.scss";

import { useNavigate } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MainTitle = ({text, description, setIsUser}) => {
    const navigate = useNavigate();
  
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: 'center',
                    m: 'auto'
                }}
            >
                <Box>
                    <Typography className={styles.mainTitle}>
                        {text}
                    </Typography>
                    {description?
                        <Typography className={styles.shoppingTitleDescription}>
                            {description}
                        </Typography> 
                    : ""}
                </Box>
                <Button 
                    sx={{ color: '#4640DE' }} 
                    className={styles.backButton} 
                    variant="outlined"
                    onClick={() => {
                        setIsUser(true)
                        navigate("/");
                    }}
                >
                    <ArrowBackIosIcon sx={{ fontSize: '12px', marginRight: '12px' }} />
                    Back to shopping
                </Button>
            </Box>
        </>
    )
}

export default MainTitle