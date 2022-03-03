import React from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";
const USID = require("usid");
const usid = new USID();

export default function ListView(props){

  
  const ul = [];
  
  props.products.map((product) => {
    const listItem = (
      <li key={usid.rand()} className="products-list-item">
        <ShopItem item={product} />
      </li>
    );

    return ul.push(listItem);
  });

  return <ul className="products-list">{ul}</ul>;
}

ListView.propTypes = {
  products: PropTypes.array.isRequired,
};
