import React, { useEffect, useState, useRef } from 'react';
import styles from './ProductDetails.module.scss';
import ProductDetailsMain from './productDetailsMain/ProductDetailsMain'
import CardList from '../cardList/CardList'
import CardsHeader from './cardsHeader/CardsHeader';
import Gia from './gia/Gia';

const ProductDetails = () => {
    const [componentWidth, setComponentWidth] = useState(null);

    const getCardWidth = (cardWidth) => {
        setComponentWidth(cardWidth)
    }
    
    return (
        <div className={styles.ProductDetails} >
            <ProductDetailsMain />
            <Gia />
            <CardsHeader componentWidth={componentWidth} />
            <CardList getCardWidth={getCardWidth} />
        </div>
    )
}

export default ProductDetails