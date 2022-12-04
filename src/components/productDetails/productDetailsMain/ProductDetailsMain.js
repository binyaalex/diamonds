import styles from '../ProductDetails.module.scss';
import ProductGallery from './ProductGallery'

const ProductDetailsMain = () => {
    return (
        <div className={styles.ProductDetailsMain}>
            <ProductGallery />
            <div className={styles.productContent}>
                <div>
                    <div className={styles.productContentH} >10.02 Carat round diamond</div>
                    <div className={styles.productContentDescription}>D color | FL Clarity | Very Good cut</div>
                    <div className={styles.productContentSku}>SKU: 234324238ZA</div>
                </div>
                <div>
                    <div className={styles.productContentPrice}>545,000$</div>
                    <div>
                        buttons
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsMain