import React from "react";

const ProductCard = ({ 
  img, title, price, oldPrice= 1000, discount, para,

}) => {
  return (
    <div className="card">
      <div className="cardbody">
        <img src={img} alt="" />

        <div className="content">
          <h3>{title}</h3>

          <div className="price">
            <h1>N{price}</h1>
            <h4>N{oldPrice}</h4>
            <h6>-{discount}%</h6>
          </div>

          <p>{para}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
