import './CardList.css';
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid'; // Grid version 1


import Card from "./Card";


import cardDiamond from "../../assets/images/cardDiamond.png";

export default function CardList({ products, getCardWidth }) {
  const navigate = useNavigate();
  const cardsArr = products || [1, 2, 3, 4];
  // console.log(cardsArr);
  
  const ref = useRef(null);
  useEffect(() => {
    getCardWidth(ref.current.offsetWidth)
  }, [ref.current]); // eslint-disable-line

  return (
    <Grid sx={{ p: '16px' }} container spacing={3} >
      {cardsArr.length > 0
        ? cardsArr.map((product, i) => (
          <Grid key={i} item xs={3} ref={ref}>
            <Card img={cardDiamond} product={product} />
          </Grid>
        ))
        : "No merchants"}
    </Grid>
  );
}