  import React from "react";
  import "./Component.css";

  function Component() {
    return (
      <div className="component">
        <p>
          You are on amazon.com. You can also shop on Amazon Turkey for millions
          of products with fast local delivery.{" "}
          <a className="linksAmazon" href="#">
            {" "}
            Click here to go to amazon.com.tr
          </a>
        </p>
      </div>
    );
  }

  export default Component;
