import React from 'react';
import preloader from '../../../Images/Rolling-1s-200px.svg';
import s from '../common.css'

export const Preloader =(props)=>{
    return <div className={s.preloader}>{props.isFetching ? <img  className={s.preloader} src={preloader}/> : null}</div>
};