import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {

    let newRequest = React.createRef();

    let search = () => {
        let dialog = newRequest.current.value;
        alert(dialog)
    };

    return (
        <div className={s.header}>
            <div>
                <i className="fa fa-facebook fa-2x" aria-hidden="true">
                </i>
            </div>
            <div className={s.search}>
                <input type='text' placeholder='Search' ref={newRequest} className={s.searchInput}>
                </input>
                <div className={s.searchButton} onClick={search}>
                    <i className="fa fa-search" aria-hidden="true"> </i>
                </div>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'} className={s.link}>
                    <i className="fa fa-users" aria-hidden="true"> </i>
                </NavLink>
                <div className={s.link}>

                </div>
                <i className="fa fa-handshake-o" aria-hidden="true">
                </i>
            </div>
        </div>
    );
};

export default Header;