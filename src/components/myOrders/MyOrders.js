import MainTitle from '../repeat/MainTitle';
import styles from './MyOrders.module.scss';

import MyOrdersList from './MyOrdersList';

const ordersArr = [
    {
        date: '13.3.2022 16:53',
        totalPrice: 7000.00,
        products: [
            { id: 1, name: '10.02-Carat Radiant Cut Diamond', shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 3500.00, ct: 186, rap: -37, compare: true, status: 'pending approval', },
            { id: 1, name: '10.02-Carat Radiant Cut Diamond', shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 3500.00, ct: 186, rap: -37, compare: true, status: 'authentication', },
        ] 
    },
    {
        date: '13.3.2022 16:54',
        totalPrice: 7000.00,
        products: [
            { id: 1, name: '10.02-Carat Radiant Cut Diamond', shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 3500.00, ct: 186, rap: -37, compare: true, status: 'shipped', },
            { id: 1, name: '10.02-Carat Radiant Cut Diamond', shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 3500.00, ct: 186, rap: -37, compare: true, status: 'shipped', },
        ] 
    },
    {
        date: '13.3.2022 16:54',
        totalPrice: 7000.00,
        products: [
            { id: 1, name: '10.02-Carat Radiant Cut Diamond', shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 3500.00, ct: 186, rap: -37, compare: true, status: 'shipped', },
            { id: 1, name: '10.02-Carat Radiant Cut Diamond', shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 3500.00, ct: 186, rap: -37, compare: true, status: 'shipped', },
        ] 
    },
];

const MyOrders = () => {
    return (
        <>
            <MainTitle 
                text='My Orders' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
            />
            <MyOrdersList orders={ordersArr} />
        </>
    )
}

export default MyOrders