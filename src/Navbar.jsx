import React from "react";
import classes from './css/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>Page</div>
            <div className={classes.item}>Music</div>
            <div className={classes.item}>Image</div>
            <div className={classes.item}>Settings</div>
        </nav>
    );
};

export default Navbar;