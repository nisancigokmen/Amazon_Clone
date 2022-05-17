    import React from "react";
    import "./LoginBtn.css";

    function LoginBtn({ title }) {
    return (
        <div className="loginBtn__page">
        <div className="login__btn">
            <h2>{title}</h2>
            <a href="#">
            {" "}
            <button className="btn">Sign in securely</button>{" "}
            </a>
        </div>

        <div className="login__bottomImg">
            <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
            alt="logImg"
            />
        </div>
        </div>
    );
    }

    export default LoginBtn;
