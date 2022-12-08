import React from 'react';
import styles from '../ProductDetails.module.scss';
import ProductGallery from './ProductGallery'

import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import favorit from '../../../assets/images/favorit.png'

const ProductDetailsMain = () => {
    return (
        <div className={styles.ProductDetailsMain}>
            <div style={{width: '34vw'}}>
                <ProductGallery />
            </div>
            <div className={styles.productContent}>
                <div>
                    <div className={styles.productContentH} >10.02 Carat round diamond</div>
                    <div className={styles.productContentDescription}>D color | FL Clarity | Very Good cut</div>
                    <div className={styles.productContentSku}>SKU: 234324238ZA</div>
                </div>
                <div className={styles.productContentLower}>
                    <div className={styles.productContentPrice}>$545,000</div>
                    <div className={styles.buttonsDiv}>
                        <Button style={{color: '#5C6AC4', borderColor: '#5C6AC4'}} variant="outlined">Make an offer</Button>
                        <Button style={{color: '#5C6AC4', borderColor: '#5C6AC4'}} variant="outlined">Buy Now</Button>
                        <Button style={{backgroundColor: '#4640DE'}} variant="contained">Add to cart</Button>
                        {/* <img src={favorit} /> */}
                        <FavoriteBorderIcon className={styles.favoritIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsMain