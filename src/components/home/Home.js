import React, { useState } from 'react';
import styles from '../../App.module.scss';
import Filter from './Filter'
//mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


//assets


const Home = () => {

    return (
        <>
            <Typography className={styles.mainTitle}>
                Loose Diamonds Search
            </Typography>
            <Filter />
            <Box
                sx={{ height: '50vh' }} />
            {/* <Footer /> */}
        </>
    )
}

export default Home