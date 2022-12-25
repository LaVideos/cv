import React from 'react';

import classNames from 'classnames/bind';
import styles from './Rainbow.module.scss';

const cn = classNames.bind(styles)

interface RainbowProp{
    str:string
}

const RainbowComponent = ({str}:RainbowProp) => {
    return (
        <ul className={cn('c-rainbow')}>
            <li className={cn('c-rainbow__layer','c-rainbow__layer--white')}>{str}</li>
            <li className={cn('c-rainbow__layer','c-rainbow__layer--orange')}>{str}</li>
            <li className={cn('c-rainbow__layer','c-rainbow__layer--red')}>{str}</li>
            <li className={cn('c-rainbow__layer','c-rainbow__layer--violet')}>{str}</li>
            <li className={cn('c-rainbow__layer','c-rainbow__layer--blue')}>{str}</li>
            <li className={cn('c-rainbow__layer','c-rainbow__layer--green')}>{str}</li>
            <li className={cn('c-rainbow__layer','c-rainbow__layer--yellow')}>{str}</li>
        </ul>
    );
};

export default RainbowComponent;