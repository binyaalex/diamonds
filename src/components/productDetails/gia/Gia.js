import styles from '../ProductDetails.module.scss';

import GiaTable from './GiaTable'

import Grid from '@mui/material/Grid'; // Grid version 1

const table = {
    table1: [
        {
            feild: 'Shape',
            value: 'round',
            icon: false,
        },
        {
            feild: 'Cut',
            value: 'Very Good',
            icon: true,
        },
        {
            feild: 'Color',
            value: 'K',
            icon: true,
        },
        {
            feild: 'Clarity',
            value: 'S12',
            icon: true,
        },
        {
            feild: 'Carat Weight',
            value: '0.30',
            icon: true,
        },
        {
            feild: 'Fluorescence',
            value: 'None',
            icon: true,
        },
        {
            feild: 'Depth %',
            value: '63.2%',
            icon: true,
        },
        {
            feild: 'Length/Width Ratio',
            value: '1.00',
            icon: true,
        },
    ],
    table2: [
        {
            feild: 'shape',
            value: 'round',
            icon: false,
        },
        {
            feild: 'cut',
            value: 'Very Good',
            icon: true,
        },
        {
            feild: 'Color',
            value: 'K',
            icon: true,
        },
        {
            feild: 'Clarity',
            value: 'S12',
            icon: true,
        },
        {
            feild: 'Carat Weight',
            value: '0.30',
            icon: true,
        },
        {
            feild: 'Fluorescence',
            value: 'None',
            icon: true,
        },
        {
            feild: 'Depth %',
            value: '63.2%',
            icon: true,
        },
        {
            feild: 'Length/Width Ratio',
            value: '1.00',
            icon: true,
        },
    ]    
}

const Gia = () => {
    return (
        <>
            <Grid className={styles.tablesGrid} sx={{ p: '16px' }} container >
                <Grid key={1} item xs={3} className={styles.tablesGridItem}>
                    <GiaTable data={table.table1} />
                </Grid>
                <Grid key={2} item xs={3} className={styles.tablesGridItem}>
                    <GiaTable data={table.table2} />
                </Grid>
            </Grid>
        </>
    )
}

export default Gia