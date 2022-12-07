import React, { useState } from 'react';
import styles from '../../App.module.scss';
import Filter from './Filter'
import Results from './Results'

const Home = () => {

    return (
        <>
            <Filter />
            <Results />
        </>
    )
}

export default Home