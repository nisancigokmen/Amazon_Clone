  import React from "react";
  import "./Product.css";

  function Product({
    title,
    img,
    infos,
    img2,
    img3,
    img4,
    infos2,
    infos3,
    infos4,
  }) {
    return (
      <div className="product">
        <div className="product__title">
          <h2>{title}</h2>
        </div>

        <div className="product__page">
          <div className="product__altPage">
            <img src={img} />
            <span>{infos}</span>
          </div>

          <div className="product__altPage">
            <img src={img2} />
            <span>{infos2}</span>
          </div>
        </div>

        <div className="product__page">
          <div className="product__altPage">
            <img src={img3} />
            <span>{infos3}</span>
          </div>

          <div className="product__altPage">
            <img src={img4} />
            <span>{infos4}</span>
          </div>
        </div>
      </div>
    );
  }

  export default Product;
