import React, { useEffect, useState, useRef } from 'react';
import styles from './ProductDetails.module.scss';
import ProductDetailsMain from './productDetailsMain/ProductDetailsMain'
import CardList from '../cardList/CardList'
import CardsHeader from './productDetailsMain/cardsHeader/CardsHeader';

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
            <CardsHeader componentWidth={componentWidth} />
            <CardList />
        </div>
    )
}

export default ProductDetails