import React, { useState } from 'react';
import styles from '../../App.module.scss';
import Filter from './Filter'
//mui
import Typography from '@mui/material/Typography';


//assets


const Home = () => {

    return (
        <>
            <Typography className={styles.mainTitle}>
                Loose Diamonds Search
            </Typography>
            <Filter />
        </>
    )
}

export default Home