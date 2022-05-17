    import React from "react";
    import "./Content.css";

    function Content() {
    return (
        <div className="content">
        {/* Content All Icon-Text */}

        <div className="content__all">
            <img
            className="content__menuBar"
            src="https://img.icons8.com/material-rounded/344/ffffff/menu.png"
            alt="content__icon"
            />
            <a href="*">
            {" "}
            <span className="content__allText">All</span>{" "}
            </a>
        </div>

        {/* Today's Deals  */}

        <div className="content__details">
            <a href="*">
            {" "}
            <span> Today's Deals</span>{" "}
            </a>
        </div>

        {/*Customer Service  */}
        <div className="content__service">
            <a href="*">
            {" "}
            <span> Customer Service</span>{" "}
            </a>
        </div>

        {/* Registry */}
        <div className="content__registry">
            <a href="*">
            {" "}
            <span> Registry</span>{" "}
            </a>
        </div>

        {/*Gift Cards  */}
        <div className="content__gift">
            <a href="*">
            {" "}
            <span> Gift Cards</span>{" "}
            </a>
        </div>

        {/*Sell */}
        <div className="content__sell">
            <a href="*">
            {" "}
            <span> Sell</span>{" "}
            </a>
        </div>
        </div>
    );
    }

    export default Content;
