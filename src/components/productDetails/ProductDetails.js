import styles from './ProductDetails.module.scss';
import ProductDetailsMain from './productDetailsMain/ProductDetailsMain'
import CardList from '../cardList/CardList'
import CardsHeader from './productDetailsMain/cardsHeader/CardsHeader';

const ProductDetails = () => {
    return (
        <div className={styles.ProductDetails}>
            <ProductDetailsMain />
            {/* <CardsHeader /> */}
            <CardList />
        </div>
    )
}

export default ProductDetails