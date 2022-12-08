import React, { useEffect, useState } from 'react';
import styles from './CardsHeader.module.scss';
import Typography from '@mui/material/Typography';
import RegularButton from '../RegularButton';

const CardsHeader = ({componentWidth}) => {
  
    return (
        <div className={styles.cardsHeader} style={{paddingRight: `${componentWidth -1364}px`}}>
            <Typography className={styles.secondryTitle}>
                Recently Viewed
            </Typography>
            <RegularButton light={true} text='View All' />
        </div>
    )
}

export default CardsHeader