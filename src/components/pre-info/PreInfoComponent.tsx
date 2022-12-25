import React from 'react';

import classNames from 'classnames/bind';
import styles from './PreInfo.module.scss';
import 'animate.css';
import {useAppSelector} from "../../hooks";

const cn = classNames.bind(styles)

const PreInfoComponent = () => {

    const {isBurgerActive} = useAppSelector(state => state.controllers);


    return (
        <div className={cn('pre-info-component')}>
            {!isBurgerActive&&<>
                <div className={cn('i-am-container', 'animate__animated', !isBurgerActive && 'animate__bounceInRight')}>
                    I am&nbsp;
                    <span className={cn('frontend-developer')}>
                    Frontend Developer</span>&nbsp;
                    <span>and it is my&nbsp;
                        <span className={cn('cv')}>CV</span>
                </span></div>
                <div
                    className={cn('check-topic-text', 'animate__animated', !isBurgerActive && 'animate__bounceInLeft')}>You
                    can watch it right now or download it in pdf
                </div>
            </>
            }
        </div>
    );
};

export default PreInfoComponent;