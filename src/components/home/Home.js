import React, { useState } from 'react';
import styles from '../../App.module.scss';
import Filter from './Filter'
import Landing from './Landing'
import Results from './Results'

const Home = ({ isUser }) => {
    return (
        <>
            {isUser ? (
                <>
                    <Filter />
                    <Results />
                </>
            ) : (
                <Landing />
            )}
        </>
    )
}

export default Home