    import React from "react";
    import "./Component.css";

    function Component2({ title, img }) {
    return (
        <div className="component__2">
        <div className="component2__title">
            <h2>{title}</h2>
        </div>

        <div className="component2__images">
            <img src={img} alt="componentImg" width={"180px"} />
        </div>
        </div>
    );
    }

    export default Component2;
