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
const cut = ["Exellent", "Very Good", "Good", "Fair", "Poor"]

const Filter = () => {
  const [value, setValue] = useState([0.94, 13.57]);

  return (



    <Box className={styles.filter}>
      <FormGroup>
        <Grid container spacing={6}>
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
                sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
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
      </FormGroup >
    </Box >

  )
}

export default Filter