import React, {useState} from 'react';
import {ReactComponent as Download} from '../../assets/svg/download/d2.svg'

import classNames from 'classnames/bind';
import styles from './Download.module.scss';
import MyPDF from "../../assets/pdf/cv.pdf";
import 'animate.css';
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../hooks";

const cn = classNames.bind(styles)

const DownloadComponent = () => {

    const {isBurgerActive} = useAppSelector(state => state.controllers);
    const [hover,setHover] = useState<boolean>(false);
    const {pathname} = useLocation();


    return (
        <>
            {
                pathname==='/cv/profile/resume'&&
                <div className={cn('download-container',isBurgerActive&&'blur')}>
                {hover &&
                    <span className={cn('download', 'animate__animated', 'animate__tada')}>Download CV in pdf</span>}
                <span onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className={cn('svg')}><a
                    href={MyPDF} download="SemeniukOlehCV.pdf"><Download/></a></span>
            </div>}
        </>
    );
};

export default DownloadComponent;