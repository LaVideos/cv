import React from 'react';

import classNames from 'classnames/bind';
import styles from './Education.module.scss';
import {img2Tech} from "../../utils";

const cn = classNames.bind(styles)

const Education = () => {
    const arrToLearn = ['React Native','Spring','Vue','Angular','MySql','MongoDB','AWS','Docker','Agile','Scrum']


    return (
        <div className={cn('container')}>

            <div className={cn('education-box')}>
                <div className={cn('header-link')}><a href={'https://owu.com.ua/'}>Okten</a></div>
                <div className={cn('data')}>
                    2022, from March 25 - until now</div>
                <div className={cn('timeline')}>
                    Courses on which I learned React and where I plan to continue learning such technologies as :
                        <div className={cn('list-img-container')}>
                            {
                                arrToLearn.map((value, index)=><img key={index} src={img2Tech(value)} title={value} alt={value}/>)
                            }
                        </div>
                </div>
            </div>
            <div className={cn('education-box')}>
                <div className={cn('header-link')}> <a href={'https://incora.software/'}> Incora Coding Camp </a></div>
                <div className={cn('data')}>
                    2022, 27 of September - 25 - November</div>
                <div className={cn('timeline')}>After successfully passing the project in React - i was invited to courses from the
                    &nbsp;<a className={cn('text-inline-box')} href={'https://incora.software/'}>Incora</a>&nbsp;
                    company, where i improved my knowledge of React and acquired practical development skills
                </div>
            </div>
            <div className={cn('education-box')}>
                <div className={cn('header-link')}>LNU</div>
                <div className={cn('data')}>
                    2018 - 2021</div>
                <div className={cn('timeline')}>Before I started studying IT seriously, I studied at university for a profession as far removed from it as possible.</div>
            </div>
        </div>
    );
};

export default Education;