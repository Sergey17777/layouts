import React from "react";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard";
const USID = require("usid");
const usid = new USID();

export default function CardsView(props) {
  const ul = [];

  props.products.map((product) => {
    const listItem = (
      <li key={usid.rand()} className="products-list-item">
        <ShopCard item={product} />
      </li>
    );

   return  ul.push(listItem);
  });

  return <ul className="products-module">{ul}</ul>;
}

CardsView.propTypes = {
  products: PropTypes.array.isRequired,
};
