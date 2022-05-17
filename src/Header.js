    import React from "react";
    import "./Header.css";

    function Header() {
    return (
        <div className="header">
        {/*logo right img*/}
        <div className="header__img">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonLogo" />
        </div>

        {/*maps and  text*/}
        <div className="header__location">
            <div className="header__mapIcon">
            <img
                src="https://img.icons8.com/material-rounded/344/ffffff/marker.png"
                alt="mapLogo"
            />
            </div>

            <div className="header__mapText">
            <div className="header_mapTitle">
                <span>Deliver to</span>
            </div>

            <div className="header__mapTitle2">
                <span>Turkey</span>
            </div>
            </div>
        </div>

        {/*Search bar*/}
        <div className="header__search">
            <input className="header__searchInput" type={"text"} alt="searchBar" />
            <button className="header_searchIcon">
            <img
                className="header__searchIconImg"
                src="https://img.icons8.com/ios-glyphs/344/search--v1.png"
                alt="searchIcon"
            />
            </button>
        </div>
        {/*Langues Bar*/}
        <div className="header__lang">
            <img
            className="header__langImg"
            src="http://www.bayraklar.info/data/flags/big/us.png"
            alt="flagsUs"
            />
        </div>

        {/* Accounts Bar */}
        <div className="header__account">
            <div className="header_accountTitle">
            <span>Hello,Sign in</span>
            </div>

            <div className="header__accountTitle2">
            <span>Account & Lists</span>
            </div>
        </div>

        {/* Returns Bar */}
        <div className="header__returns">
            <div className="header__returnsTitle">
            <span>Returns</span>
            </div>

            <div className="header__returnsTitle2">
            <span>& Order</span>
            </div>
        </div>

        {/* Cart Bar */}

        <div className="header__cart">
            <div className="header__cartImages">
            <img
                src="https://img.icons8.com/ios/344/ffffff/shopping-cart-loaded--v1.png"
                alt="CartIcon"
            />
            </div>
            <div className="header__cartTitle">
            <span className="header__cartNumber">0</span>
            </div>
        </div>
        </div>
    );
    }

    export default Header;
