import React from 'react';

import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import {Sidebar} from "../sidebar/SideBar";
import Header from "../header/Header";
import {useAppSelector} from "../../hooks";
import Body from "../body/Body";
import {useLocation} from "react-router-dom";


const cn = classNames.bind(styles)

const MainLayout = () => {

   const {pathname} = useLocation();
   const {isBurgerActive,isAnimationPrintOff} = useAppSelector(state => state.controllers);

   return <>
      { (isAnimationPrintOff || (pathname==='/cv/profile/resume')||isBurgerActive) &&<Header/>}
      {isBurgerActive&&<Sidebar/>}
      <Body/>
   </>

};

export default MainLayout;