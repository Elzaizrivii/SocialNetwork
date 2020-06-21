import React from "react";
import s from './Header.module.css';


const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <img src='https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_facebook_icon_143184.png'/>
            </div>
            <input type='text' placeholder='Search' className={s.search}>

            </input>
            <div className={s.item}>
                <div className={s.link}>item 1</div>
                <div className={s.link}>item 2</div>
                <img src='https://cdn.icon-icons.com/icons2/2338/PNG/128/solidarity_icon_142435.png'/>
            </div>
        </div>
    );
};

export default Header;