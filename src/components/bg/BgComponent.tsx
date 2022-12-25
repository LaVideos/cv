import React, {CSSProperties} from 'react';

import classNames from 'classnames/bind';
import styles from './Bg.module.scss';
import 'animate.css';
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../hooks";
import Wave from "react-wavify";

const cn = classNames.bind(styles);

const wavePos1 : CSSProperties = {
    position: "fixed",
    bottom: "40px",
    width: "100%",
    zIndex:'-11'
};

const wavePos2 : CSSProperties = {
    position: "fixed",
    bottom: "20px",
    width: "100%",
    zIndex:'-9'
};

const wavePos3 : CSSProperties = {
    position: "fixed",
    bottom: "-20px",
    width: "100%",
    zIndex:'-7'
};


let pauseStatus = false;


const BgComponent = () => {
    const {pathname} = useLocation();
    const {isBurgerActive} = useAppSelector(state => state.controllers);


    return (
        <div>
            <div className={cn('wave-b', 'wave-1',isBurgerActive&&'blur')}></div>
            <div className={cn('wave-b', 'wave-2',isBurgerActive&&'blur')}></div>
            <div className={cn('wave-b', 'wave-3',isBurgerActive&&'blur')}></div>
                {/*<div className={cn('wave-wavify')}>*/}
                    <div style={wavePos1}>
                        <Wave className={cn(isBurgerActive&&'blur')}
                            fill="var(--landing-1)"
                            paused={pauseStatus}
                            options={{
                                height: 15,
                                amplitude: 20,
                                speed: 0.2,
                                points: 9
                            }}
                        />
                    </div>
                    <div style={wavePos2}>
                        <Wave
                            className={cn(isBurgerActive&&'blur')}
                            fill="var(--landing-5)"
                            paused={pauseStatus}
                            options={{
                                height: 25,
                                amplitude: 15,
                                speed: 0.3,
                                points: 7
                            }}
                        />
                    </div>
                    <div style={wavePos3}>
                        <Wave
                            className={cn(isBurgerActive&&'blur')}
                            fill="var(--landing-2)"
                            paused={pauseStatus}
                            options={{
                                height: 30,
                                amplitude: 10,
                                speed: 0.3,
                                points: 13
                            }}
                        />
                    </div>
                {/*</div>*/}

            {pathname==='/profile/resume'&&
                // <div className={cn('box')}>
                <>
                    <div className={cn('wave1', 'one',isBurgerActive&&'blur')}></div>
                    <div className={cn('wave1', 'two',isBurgerActive&&'blur')}></div>
                    <div className={cn('wave1', 'three',isBurgerActive&&'blur')}></div>
                </>
                 // </div>
            }
        </div>
    );
};

export default BgComponent;