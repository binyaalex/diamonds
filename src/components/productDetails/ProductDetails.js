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

    const productsArr = [
        { id: 1, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37, compare: true , sale: true},
        { id: 2, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37, rare: true },
        { id: 3, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37, compare: true },
        { id: 4, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37, rare: true },
    ];    
    
    return (
        <div className={styles.ProductDetails} >
            <ProductDetailsMain />
            <Gia />
            <CardsHeader componentWidth={componentWidth} />
            <CardList products={productsArr} getCardWidth={getCardWidth} />
        </div>
    )
}

export default ProductDetails