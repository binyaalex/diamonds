import './CardList.css';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid'; // Grid version 1


import Card from "./Card";


import cardDiamond from "../../assets/images/cardDiamond.png";

export default function CardList({ products }) {
  const navigate = useNavigate();
  const cardsArr = products || [1, 2, 3, 4];
  // console.log(cardsArr);
  return (
    <Grid style={{ marginTop: '-48px' }} container spacing={3}>
      {cardsArr.length > 0
        ? cardsArr.map((product, i) => (
          <Grid key={i} item>
            <Card img={cardDiamond} product={product} />
          </Grid>
        ))
        : "No merchants"}
    </Grid>
  );
}