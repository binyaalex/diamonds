import styles from '../ProductDetails.module.scss';
import ProductGallery from './ProductGallery'

const ProductDetailsMain = () => {
    return (
        <div className={styles.ProductDetailsMain}>
            <ProductGallery />
            <div className={styles.productContent}>
                <div>
                    <div>10.02 Carat round diamond</div>
                    <div>D color | FL Clarity | Very Good cut</div>
                    <div>SKU: 234324238ZA</div>
                </div>
                <div>
                    <div></div>
                    <div>
                        buttons
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsMain