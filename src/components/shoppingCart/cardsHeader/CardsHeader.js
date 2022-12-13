import React, { useEffect, useState } from "react";
import styles from "./CardsHeader.module.scss";
import RegularButton from "../RegularButton";
import SecondryTitle from "../../repeat/SecondryTitle";

const CardsHeader = ({ componentWidth }) => {
  return (
    <div
      className={styles.cardsHeader}
      style={{ paddingRight: `${componentWidth - 287}px` }}
    >
      <div className={styles.description2style}>
        <SecondryTitle text="More from the same seller" />
        <SecondryTitle
          className={styles.description2style}
          description2="save on shipping when buying more items from the same seller"
        />
      </div>
      <RegularButton light={true} text="View All" />
    </div>
  );
};

export default CardsHeader;
