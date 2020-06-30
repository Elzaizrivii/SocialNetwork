import React from "react";
import s from './Header.module.css';

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
                <div className={s.link}>item 1</div>
                <div className={s.link}>item 2</div>
                <i className="fa fa-handshake-o" aria-hidden="true">
                </i>
            </div>
        </div>
    );
};

export default Header;