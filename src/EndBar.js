  import React from "react";
  import "./EndBar.css";

  function EndBar({ title, title2, title3, title4 }) {
    return (
      <div className="endBar">
        <div className="endBack">
          <span>
            <a href="#"> Back to top</a>
          </span>
        </div>

        <div className="endInfos">
          <div className="endInfos__text">
            <div className="title__1">
              <h3>{title}</h3>
              <ul>
                <li>
                  {" "}
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">About Amazon</a>{" "}
                </li>
                <li>
                  <a href="#"> Investor Relations</a>
                </li>
                <li>
                  <a href="#">Amazon Devices</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Amazon Science</a>
                </li>
              </ul>
            </div>

            <div className="title__2">
              <h3>{title2}</h3>
              <ul>
                <li>
                  {" "}
                  <a href="#">Sell products on Amazon</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Sell on Amazon Business</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Sell apps on Amazon</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Become an Affiliate</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Advertise Your Product</a>
                </li>
                <li>
                  <a href="#">Self-Publish with Us</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Host an Amazon Hub</a>
                </li>
                <li>
                  <a href="#">See More Make Money with Us</a>
                </li>
              </ul>
            </div>

            <div className="title__3">
              <h3>{title3}</h3>
              <ul>
                <li>
                  <a href="#">Amazon Business Card </a>
                </li>
                <li>
                  <a href="#"> Shop with Points</a>
                </li>
                <li>
                  <a href="#"> Reload Your Balance</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Amazon Currency Converter </a>
                </li>
              </ul>
            </div>

            <div className="title__4">
              <h3>{title4}</h3>
              <ul>
                <li>
                  <a href="#"> Amazon and COVID-19</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Your Account</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Your Orders </a>
                </li>
                <li>
                  <a href="#">Shipping Rates & Policies</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Returns & Replacements</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">Manage Your Content and Devices </a>
                </li>
                <li>
                  <a href="#">Amazon Assistant</a>{" "}
                </li>
                <li>Help</li>
              </ul>
            </div>
          </div>

          <div className="endInfos__bussines">
            <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    );
  }

  export default EndBar;
