import React from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {controllerAction} from "../../redux";
import {DownloadComponent} from "../../components";

const cn = classNames.bind(styles)

const Header = () => {

    let {isBurgerActive} = useAppSelector(state => state.controllers)
    const dispatch = useAppDispatch();

    return (
        <div className={cn('header-component')}>
            <div className={cn('wrap')} >
                <button className={cn(!isBurgerActive?'hamburger':'is-active', 'hamburger--squeeze')} type="button">
      <span onClick={()=>{dispatch(controllerAction.setBurgerState(!isBurgerActive))}} className={cn('hamburger-box')}>
        <span  className={cn('hamburger-inner')}></span>
      </span>
                </button>
            </div>
            <div className={cn('download-fixed-component')}><DownloadComponent/></div>
        </div>
    );
};

export default Header;