import React from 'react';
import classNames from 'classnames/bind';
import styles from './GameImg.module.scss';

import first from '../../assets/jpeg/game/first.jpg'
import second from '../../assets/jpeg/game/second.jpg'
import build from '../../assets/jpeg/game/build.jpg'
import fall from '../../assets/jpeg/game/fall.jpg'
import big_destroy from '../../assets/jpeg/game/big-destroy.jpg'
import unlocked from '../../assets/jpeg/game/unlocked.jpg'
import destroy from '../../assets/jpeg/game/destroy.jpg'

const cn = classNames.bind(styles)

const GameImgComponent = () => {
    return (
        <div className={cn('c')}>

            <input type="radio" name="a" id="g-1"
                   defaultChecked/>
            <label htmlFor="g-1"></label>
            <div className={cn('ci')}>
                <img alt={''} src={first}/>
            </div>

            <input type="radio" name="a" id="g-2"
            />
            <label htmlFor="g-2"></label>
            <div className={cn('ci')}>
                <img src={second} alt=""/>
            </div>

            <input type="radio" name="a" id="g-3"/>
            <label htmlFor="g-3"></label>
            <div className={cn('ci')}>
                <img src={build} alt=""/>
            </div>


            <input type="radio" name="a" id="g-4"/>
            <label htmlFor="g-4"></label>
            <div className={cn('ci')}>
                <img src={destroy} alt=""/>
            </div>

            <input type="radio" name="a" id="g-5"/>
            <label htmlFor="g-5"></label>
            <div className={cn('ci')}>
                <img src={fall} alt=""/>
            </div>

            <input type="radio" name="a" id="g-6"/>
            <label htmlFor="g-6"></label>
            <div className={cn('ci')}>
                <img src={big_destroy} alt=""/>
            </div>

            <input type="radio" name="a" id="g-7"/>
            <label htmlFor="g-7"></label>
            <div className={cn('ci')}>
                <img src={unlocked} alt=""/>
            </div>

        </div>

    );
};

export default GameImgComponent;