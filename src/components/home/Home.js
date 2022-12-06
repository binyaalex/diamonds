import React, { useState } from 'react';
import styles from '../../App.module.scss';
import Filter from './Filter'
//mui
import Box from '@mui/material/Box';


//assets


const Home = () => {

    return (
        <>
            <Filter />
            <Box
                sx={{ height: '50vh' }} />
            {/* <Footer /> */}
        </>
    )
}

export default Home