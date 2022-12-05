import './CardList.css';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid'; // Grid version 1


import Card from "./Card";


import cardDiamond from "../../assets/images/cardDiamond.png";

export default function CardList(props) {
  const navigate = useNavigate();
  const cardsArr = [1, 2, 3, 4];

  return (
    <Grid style={{marginTop: '32px'}} justifyContent="center" container spacing={5}>
        {cardsArr.length > 0
        ? cardsArr.map((id) => (
            <Grid key={id} item>
                <Card img={cardDiamond} />
            </Grid>
        ))
        : "No merchants"}
    </Grid>
  );
}