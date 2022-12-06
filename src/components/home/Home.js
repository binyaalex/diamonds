import React, { useState } from 'react';
import styles from '../../App.module.scss';

//mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';

//assets
import { ReactComponent as Diamond } from "../../assets/icons/Diamond.svg"

const shapesOne = ["Round", "Princess", "Pear", "Marquise", "Emerald"]
const shapesTwo = ["Oval", "Radiant", "Cushion", "Heart", "Asscher"]
const cut = ["Exellent", "Very Good", "Good", "Fair", "Poor"]

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
    const [value, setValue] = useState([0.94, 13.57]);

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
                        <Grid item >
                            <FormControl sx={{ width: '100%' }}>
                                <FormLabel
                                    className={styles.subTitle}>
                                    Shape
                                </FormLabel>

                                <Grid item
                                    sx={{ display: 'flex', justifyContent: "space-between", }}
                                >
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
                                <Grid
                                    sx={{ display: 'flex', justifyContent: "space-between", m: "12px 0" }}>
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

                        <Grid item >
                            <FormControl sx={{ width: '100%' }}>
                                <FormLabel
                                    className={styles.subTitle}>
                                    Size
                                </FormLabel>
                                <Box
                                    sx={{ display: 'flex', width: '100%', alignItems: 'center' }}
                                >
                                    <InputBase
                                        className={styles.size}
                                        type="text"
                                        inputProps={{ style: { textAlign: 'center' } }}
                                        value={value[0]}
                                    >
                                    </InputBase>
                                    <Typography
                                        sx={{
                                            color: '#7C8493'
                                            , m: "12px 30px"
                                        }}
                                    >to</Typography>
                                    <InputBase
                                        className={styles.size}
                                        type="text"
                                        inputProps={{ style: { textAlign: 'center' } }}
                                        value={value[1]}

                                    >
                                    </InputBase>
                                </Box>
                                <Box>
                                    <Slider
                                        sx={{
                                            width: 300,
                                            color: '#4640DE',
                                            height: '12px',
                                            borderRadius: '0',
                                            '& .MuiSlider-thumb': {
                                                color: 'white',
                                                borderRadius: '1px',
                                                border: 'solid 2px #4640DE',
                                                width: '14px',
                                                height: '24px'
                                            }
                                        }}
                                        value={value}
                                        onChange={e => setValue(e.target.value)}
                                        min={0}
                                        step={0.01}
                                        max={20} />
                                </Box>

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