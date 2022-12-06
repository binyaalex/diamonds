import React, { useState } from 'react';
import styles from '../../App.module.scss';

//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Slider from '@mui/material/Slider';

//assets
import { ReactComponent as Diamond } from "../../assets/icons/Diamond.svg"
//data
const shapesOne = ["Round", "Princess", "Pear", "Marquise", "Emerald"]
const shapesTwo = ["Oval", "Radiant", "Cushion", "Heart", "Asscher"]
const sliders = [
  {
    title: "Cut",
    labels: ["Exellent", "Very Good", "Good", "Fair", "Poor"],
    colors: [
      '#E9D7FE, #E9D7FE 25%',
      '#D6BBFB 25%, #D6BBFB 50%',
      '#9E77ED 50%, #9E77ED 75%',
      '#6941C6 75%'
    ]
  },
  {
    title: "Color",
    labels:
      ["D", "E", "F", "G", "H", "I", "j", "K"
      ],
    colors: [
      '#E9D7FE, #E9D7FE 20%',
      '#D6BBFB 20%, #D6BBFB 40%',
      '#9E77ED 40%, #9E77ED 60%',
      '#6941C6 60%, #6941C6 80%',
      '#42307D 80%'
    ]
  },
  {
    title: "Clarity",
    labels: [
      "FL", "IF", "VVS2", "VS1", "VS2", "SI1", "SI3", "I1", "I2", "I3"
    ],
    colors: [
      '#E9D7FE, #E9D7FE 20%',
      '#D6BBFB 20%, #D6BBFB 40%',
      '#9E77ED 40%, #9E77ED 60%',
      '#6941C6 60%, #6941C6 80%',
      '#42307D 80%'
    ]
  },
]
// labels: [
//   {value:0, label:"Exellent"},
//    {value:1, label:"Very Good"}, 
//    {value:2,label:"Good"}, 
//    {value:3,label:"Fair"}, 
//    {value:4"Poor"] 
//   },
const Filter = () => {
  const [size, setSize] = useState([0.94, 13.57]);
  const [cut, setCut] = useState([0, 5]);
  const [color, setColor] = useState([0, 8]);
  const [clarity, setClarity] = useState([0, 10]);

  return (
    <Box className={styles.filter}>
      <FormGroup>
        <Grid container spacing={6} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Grid item >
            <FormControl >
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
                sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <InputBase
                  className={styles.size}
                  type="text"
                  inputProps={{ style: { textAlign: 'center' } }}
                  value={size[0]}
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
                  value={size[1]}

                >
                </InputBase>
              </Box>
              <Box
              >
                <Slider
                  sx={{
                    width: 300,
                    padding: '22px 0',
                    color: '#4640DE',
                    height: '12px',
                    borderRadius: '0',
                    '& .MuiSlider-thumb': {
                      color: 'white',
                      borderRadius: '2px',
                      border: 'solid 1px #4640DE',
                      width: '14px',
                      height: '24px'
                    }
                  }}
                  value={size}
                  onChange={e => setSize(e.target.value)}
                  min={0}
                  step={0.01}
                  max={20}
                />
              </Box>
            </FormControl>
          </Grid>

          <Grid item >
            <FormControl sx={{ width: '100%' }}>
              <FormLabel
                className={styles.subTitle}>
                CertiFied
              </FormLabel>

              <Box>
                <Button variant="outlined" className={styles.button}>
                  <Typography className={styles.buttonText}>
                    GIA
                  </Typography>
                </Button>

                <Button variant="outlined" className={styles.button}>
                  <Typography className={styles.buttonText}>
                    Other Labs
                  </Typography>
                </Button>

                <Button variant="outlined" className={styles.button}>
                  <Typography className={styles.buttonText}>
                    Uncertified
                  </Typography>
                </Button>

              </Box>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={6} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>

          {sliders.map((slider, i) => (
            <Grid item sx={4}>

              <FormControl >
                <FormLabel

                  className={styles.subTitle}>
                  {slider.title}
                </FormLabel>
                <Box
                  sx={{
                    display: 'flex', justifyContent: 'space-between',
                  }}
                >
                  {slider.labels.map((label) => (
                    <Typography
                      className={styles.subTitle}
                    >
                      {label}
                    </Typography>
                  ))}
                </Box>
                <Slider
                  sx={{
                    width: 300,
                    padding: '22px 0',
                    // color: '#4640DE',
                    height: '12px',
                    borderRadius: '0',
                    '& .MuiSlider-rail': {
                      opacity: 1, backgroundImage: `linear-gradient(to right, ${slider.colors.join(', ')})`,
                    },
                    '& .MuiSlider-track': {
                      color: 'transparent',
                    },
                    '& .MuiSlider-thumb': {
                      color: 'white',
                      borderRadius: '2px',
                      border: 'solid 1px #4640DE',
                      width: '16px',
                      height: '24px'
                    }
                  }}
                  value={i === 0 ? cut : i === 1 ? color : clarity}
                  onChange={e => {
                    i === 0 ? setCut(e.target.value) :
                      i === 1 ? setColor(e.target.value) :
                        setClarity(e.target.value)
                  }}
                  min={0}
                  max={slider.labels.length - 1}
                />

              </FormControl>
            </Grid>
          ))}


        </Grid>
      </FormGroup >
    </Box >

  )
}

export default Filter