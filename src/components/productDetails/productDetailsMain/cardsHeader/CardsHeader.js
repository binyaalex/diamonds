import React, { useEffect, useState } from 'react';
import styles from './CardsHeader.module.scss';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CardsHeader = ({componentWidth}) => {
  
    return (
        <div className={styles.cardsHeader} style={{paddingRight: `${componentWidth -1364}px`}}>
            <Typography className={styles.secondryTitle}>
                Recently Viewed
            </Typography>
            <Button style={{color: '#5C6AC4', borderColor: '#5C6AC4'}} variant="outlined">View All</Button>
        </div>
    )
}

export default CardsHeader