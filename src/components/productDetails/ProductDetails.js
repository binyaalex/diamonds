import styles from './ProductDetails.module.scss';
import ProductDetailsMain from './productDetailsMain/ProductDetailsMain'
import CardList from '../cardList/CardList'

const ProductDetails = () => {
    return (
        <div className={styles.ProductDetails}>
            <ProductDetailsMain />
            <CardList />
        </div>
    )
}

export default ProductDetails