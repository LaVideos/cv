import React from 'react';

import classNames from 'classnames/bind';
import styles from './PrintComponent.module.scss';
const cn = classNames.bind(styles)

const PrintComponent = () => {

    return <div className={cn('wrapper')}>
        <h1 className={cn('title')}>Hello my name is Oleh</h1>
    </div>
};

export default PrintComponent;