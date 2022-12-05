import './CardList.css';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./Card";


import cardDiamond from "../../assets/images/cardDiamond.png";

export default function CardList(props) {
  const navigate = useNavigate();
  const hotBenefitsArr = [
    {
      title: "מזון לתינוקות",
      price: 49,
      image: cardDiamond,
      category: "אוכל",
      coins: 20,
      city: "ירושלים",
      new: 29,
    },
    // {
    //   title: "קפה נמס",
    //   price: 34,
    //   image: cardDiamond,
    //   category: "אוכל",
    //   coins: 10,
    //   city: "ירושלים",
    //   new: 24,
    // },
    // {
    //   title: "אייר ביס בצל",
    //   price: 11,
    //   image: cardDiamond,
    //   category: "אוכל",
    //   coins: 4,
    //   city: "ירושלים",
    //   new: 7,
    // },
    // {
    //   title: "מזון לתינוקות",
    //   price: 49,
    //   image: cardDiamond,
    //   category: "אוכל",
    //   coins: 20,
    //   city: "ירושלים",
    //   new: 29,
    // },
  ];

  return (
    <ul className="cardList">
        {hotBenefitsArr.length > 0
        ? hotBenefitsArr.map((item) => (
            <Card img={item.image} />
            // <>
            //     <li className="card isLink">
            //         <div className="cardImg">
            //             <img src={item.image} alt="My Awesome" />
            //             <div className="cardRare">{item.category}</div>
            //         </div>
            //         <div className="cardContent">
            //             <div className="cardPrice">{item.title}</div>
            //             <div className="cardTitle">{item.city}</div>
            //             <div className="cardDescription">bla bla bla</div>
            //         </div>
            //     </li>
            // </>
        ))
        : "No merchants"}
    </ul>
  );
}