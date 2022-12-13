import React, { useEffect, useState, useRef } from "react";
import CardList from "../cardList/CardList";
import CardsHeader from "./cardsHeader/CardsHeader";

import MainTitle from "../repeat/MainTitle";
import ShoppingCartList from "./ShoppingCartList";

const ordersArr = [
  {
    price: 1725.0,
    discount: 125.0,
    totalPrice: 1600.0,
    products: [
      {
        id: 1,
        name: "10.02-Carat Radiant Cut Diamond",
        shape: "Round",
        size: 11.01,
        color: "D Color",
        clarity: "FL Clarity",
        cut: "Very Good cut",
        price: 3500.0,
        compare: true,
        status: "pending approval",
      },
    ],
  },
  {
    price: 1725.0,
    discount: 125.0,
    totalPrice: 1600.0,
    products: [
      {
        id: 1,
        name: "10.02-Carat Radiant Cut Diamond",
        shape: "Round",
        size: 11.01,
        color: "D Color",
        clarity: "FL Clarity",
        cut: "Very Good cut",
        price: 1725.0,
        compare: true,
        status: "pending approval",
      },
    ],
  },
  {
    price: 1725.0,
    discount: 125.0,
    totalPrice: 1600.0,
    products: [
      {
        id: 1,
        name: "10.02-Carat Radiant Cut Diamond",
        shape: "Round",
        size: 11.01,
        color: "D Color",
        clarity: "FL Clarity",
        cut: "Very Good cut",
        price: 1725.0,
        compare: true,
        status: "pending approval",
      },
    ],
  },
  {
    price: 1725.0,
    discount: 125.0,
    totalPrice: 1600.0,
    products: [
      {
        id: 1,
        name: "10.02-Carat Radiant Cut Diamond",
        shape: "Round",
        size: 11.01,
        color: "D Color",
        clarity: "FL Clarity",
        cut: "Very Good cut",
        price: 1725.0,
        compare: true,
        status: "pending approval",
      },
    ],
  },
  {
    price: 1725.0,
    discount: 125.0,
    totalPrice: 1600.0,
    products: [
      {
        id: 1,
        name: "10.02-Carat Radiant Cut Diamond",
        shape: "Round",
        size: 11.01,
        color: "D Color",
        clarity: "FL Clarity",
        cut: "Very Good cut",
        price: 1725.0,
        compare: true,
        status: "pending approval",
      },
    ],
  },
];

const ShoppingCart = () => {
  const [componentWidth, setComponentWidth] = useState(null);

  const getCardWidth = (cardWidth) => {
    setComponentWidth(cardWidth);
  };

  const productsArr = [
    {
      id: 1,
      shape: "Round",
      size: 11.01,
      color: "D",
      clarity: "FL",
      cut: "Very Good",
      polish: "G",
      symmetry: "VG",
      fluorescence: "Very Strong",
      certified: "GIA",
      price: 302876,
      ct: 186,
      rap: -37,
      compare: true,
      sale: true,
    },
    {
      id: 2,
      shape: "Round",
      size: 11.01,
      color: "D",
      clarity: "FL",
      cut: "Very Good",
      polish: "G",
      symmetry: "VG",
      fluorescence: "Very Strong",
      certified: "GIA",
      price: 302876,
      ct: 186,
      rap: -37,
      rare: true,
    },
    {
      id: 3,
      shape: "Round",
      size: 11.01,
      color: "D",
      clarity: "FL",
      cut: "Very Good",
      polish: "G",
      symmetry: "VG",
      fluorescence: "Very Strong",
      certified: "GIA",
      price: 302876,
      ct: 186,
      rap: -37,
      compare: true,
    },
    {
      id: 4,
      shape: "Round",
      size: 11.01,
      color: "D",
      clarity: "FL",
      cut: "Very Good",
      polish: "G",
      symmetry: "VG",
      fluorescence: "Very Strong",
      certified: "GIA",
      price: 302876,
      ct: 186,
      rap: -37,
      rare: true,
    },
  ];

  return (
    <>
      <MainTitle
        text="Shopping Cart"
        description="This is your cart based on your item you want to buy."
      />
      <ShoppingCartList orders={ordersArr} />
      <CardsHeader componentWidth={componentWidth} />
      <CardList products={productsArr} getCardWidth={getCardWidth} />
    </>
  );
};

export default ShoppingCart;
