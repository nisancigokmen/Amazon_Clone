    import React from "react";
    import "./MovingBox.css";

    function MovingBox({ img, title, star, infos, pay, payTse, hometitle }) {
    return (
        <div className="MovingBox">
        <div className="moving__page">
            <div className="moving__images">
            <img src={img} alt="moveImages" />
            </div>

            <div className="moving__title">
            <span>{title}</span>
            </div>

            <div className="moving__star">
            <img src={star} alt="starIcon" />
            <img src={star} alt="starIcon" />
            <img src={star} alt="starIcon" />
            <img src={star} alt="starIcon" />
            <img src={star} alt="starIcon" />
            </div>

            <div className="moving__infos">
            <span>{infos}</span>
            </div>

            <div className="moving__pay">
            <span>{pay}</span>
            </div>

            <div className="moving__pay2">
            <span>{payTse}</span>
            </div>
        </div>
        </div>
    );
    }

    export default MovingBox;
