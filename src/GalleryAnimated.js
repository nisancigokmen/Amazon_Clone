    import React from "react";
    import "./GalleryAnimated.css";

    function GalleryAnimated({ title, img, img2, img3, img4, img5, img6, img7 }) {
    return (
        <div className="galleryAnimmated">
        <div className="galleryAnimated__title">
            <h2>{title}</h2>
        </div>

        <div className="galleryAnimated__images">
            <img src={img} alt="galleryAnimated" />
            <img src={img2} alt="galleryAnimated" />
            <img src={img3} alt="galleryAnimated" />
            <img src={img4} alt="galleryAnimated" />
            <img src={img5} alt="galleryAnimated" />
            <img src={img6} alt="galleryAnimated" />
            <img src={img7} alt="galleryAnimated" />
        </div>
        </div>
    );
    }

    export default GalleryAnimated;
