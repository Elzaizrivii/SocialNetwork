import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <i className="fa fa-facebook fa-2x" aria-hidden="true">
                </i>
            </div>
            <input type='text' placeholder='Search' className={s.search}>

            </input>
            <div className={s.item}>
                <div className={s.link}>item 1</div>
                <div className={s.link}>item 2</div>
                <i className="fa fa-handshake-o" aria-hidden="true">
                </i>
            </div>
        </div>
    );
};

export default Header;