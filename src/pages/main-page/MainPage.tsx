import React, {useState} from 'react';
import {PreInfoComponent, PrintComponent} from "../../components";
import Landing from "../../components/landing/Landing";
import {Footer} from "../../layout";

import classNames from 'classnames/bind';
import styles from './MainPage.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {controllerAction} from "../../redux";
import 'animate.css';


const cn = classNames.bind(styles)

const MainPage = () => {
    const {isAnimationPrintOff,isBurgerActive} = useAppSelector(state => state.controllers);
    const dispatch = useAppDispatch();
    const [hover,setHover] = useState<boolean>(false);

    return (
        <>
            <div className={cn('main-layout-container',isBurgerActive&&'blur')} onAnimationEnd={() => dispatch(controllerAction.setAnimationPrintState(true))}>
                <div className={cn('print-container')}><PrintComponent/></div>
                <div className={cn('pre-info-container')}>
                    {isAnimationPrintOff && <PreInfoComponent/>}</div>


                <div className={cn('landing-container')}><Landing/></div>

                {
                    <>{isAnimationPrintOff && !hover &&
                        <div onMouseEnter={() => setHover(true)} className={cn('hover-container',!isBurgerActive&&'animate__animated','animate__fadeIn')}>
                            <div className={cn('hover-text')}>
                                Hover to see my contacts</div>
                        </div>}
                        {hover && <Footer/>}
                    </>

                }
            </div>
        </>
    );
};

export default MainPage;