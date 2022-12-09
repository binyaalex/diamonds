import React, { useEffect, useState, useRef } from 'react';
import styles from './ProductDetails.module.scss';
import ProductDetailsMain from './productDetailsMain/ProductDetailsMain'
import CardList from '../cardList/CardList'
import CardsHeader from './cardsHeader/CardsHeader';
import Gia from './gia/Gia';

const ProductDetails = () => {
    const [componentWidth, setComponentWidth] = useState(null);

    const ref = useRef(null);
      useEffect(() => {
      console.log(ref.current.offsetWidth)
      setComponentWidth(ref.current.offsetWidth)
    }, [ref.current]); // eslint-disable-line

    return (
        <div className={styles.ProductDetails} ref={ref} >
            <ProductDetailsMain />
            <Gia />
            <CardsHeader componentWidth={componentWidth} />
            <CardList />
        </div>
    )
}

export default ProductDetails