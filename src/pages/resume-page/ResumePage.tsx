import React from 'react';
import {AboutMeComponent} from "../../components";
import {Footer} from "../../layout";

import classNames from 'classnames/bind';
import styles from './Resume.module.scss';
import 'animate.css';
import {useAppSelector} from "../../hooks";


const cn = classNames.bind(styles)

const ResumePage = () => {
    const {isBurgerActive} = useAppSelector(state => state.controllers);

    return (
        <div className={cn(isBurgerActive&&'blur')}>
            <AboutMeComponent/>
            <Footer/>
        </div>
    );
};

export default ResumePage;