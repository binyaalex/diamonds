import React, { useState } from 'react';
import styles from './home.module.scss';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ReactComponent as Play } from "../../assets/icons/Play.svg";
import { ReactComponent as MacBook } from "../../assets/icons/MacBook.svg";
import screen from '../../assets/images/screen.JPG'
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1 className={styles.bigTitle}>
                Buy and sell diamonds, watches, and other luxury goods
            </h1>
            <h1 className={styles.desc}>
                Sign up for FREE to join hundreds of jewelers on the fastest and most secure marketplace for luxury goods
            </h1>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: '250px',
                    m: 'auto'
                }}
            >
                <Button
                    variant="outlined"
                    className={styles.muiButton}

                    sx={{
                        border: "1px solid #D0D5DD",
                        color: '#344054',
                        height: '60px',
                        width: '120px',
                        fontWeight: 600,
                        fontSize: '18px'
                    }}
                >
                    <Play style={{ width: '15px', marginRight: '10px' }} />
                    Demo
                </Button>
                <Button
                    variant="contained"

                    className={styles.muiButton}
                    onClick={() => navigate('/signup')}
                    sx={{
                        backgroundColor: '#7F56D9',
                        height: '60px',
                        width: '120px',
                        fontWeight: 600,
                        fontSize: '18px'
                    }}
                >
                    Sign up
                </Button>
            </Box>
            <div className={styles.mcbook}            >
                <MacBook className={styles.imgBottom} />
                <img
                    src={screen}
                    className={styles.imgTop}
                />
            </div>
        </>
    )
}

export default Landing