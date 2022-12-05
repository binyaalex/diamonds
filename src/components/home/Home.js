import styles from '../../App.module.scss';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ReactComponent as Diamond } from "../../assets/icons/Diamond.svg"
import { styled } from '@mui/material/styles';

const shapesOne = ["Round", "Princess", "Pear", "Marquise", "Emerald"]
const shapesTwo = ["Oval", "Radiant", "Cushion", "Heart", "Asscher"]

const FilterButton = styled(Button)({
    textTransform: 'none',


    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const Home = () => {
    return (

        <
            // Container
            >
            <Typography className={styles.mainTitle}>
                Loose Diamonds Search
            </Typography>
            <Box className={styles.filter}>
                <FormGroup>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <FormControl >
                                <FormLabel
                                    className={styles.subTitle}>
                                    Shape
                                </FormLabel>

                                {/* sx={{ display: 'flex', justifyContent: "space-between", }}> */}
                                <Grid item>
                                    {shapesOne.map((shape) => (
                                        <Button variant="outlined" className={styles.button}>
                                            <Diamond />
                                            <Typography className={styles.buttonText}>
                                                {shape}
                                            </Typography>
                                        </Button>
                                    )
                                    )}
                                </Grid>
                                <Grid>
                                    {shapesTwo.map((shape) => (
                                        <Button variant="outlined" className={styles.button}>
                                            <Diamond />
                                            <Typography className={styles.buttonText}>
                                                {shape}
                                            </Typography>
                                        </Button>
                                    )
                                    )}
                                </Grid>
                            </FormControl>
                        </Grid>
                    </Grid>
                </FormGroup >
            </Box >
        </
        // Container 
        >

    )
}

export default Home