import React, { useEffect, useState } from 'react';
import styles from './CardsHeader.module.scss';
import RegularButton from '../RegularButton';
import SecondryTitle from '../../repeat/SecondryTitle';

const CardsHeader = ({componentWidth}) => {
  
    return (
        <div className={styles.cardsHeader} style={{paddingRight: `${componentWidth -287}px`}}>
            <SecondryTitle text='Recently Viewed' />
            <RegularButton light={true} text='View All' />
        </div>
    )
}

export default CardsHeader