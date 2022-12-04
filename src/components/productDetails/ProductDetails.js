import styles from './ProductDetails.module.scss';
import ProductDetailsMain from './productDetailsMain/ProductDetailsMain'

const ProductDetails = () => {
    return (
        <div className={styles.ProductDetails}>
            <ProductDetailsMain />
        </div>
    )
}

export default ProductDetails