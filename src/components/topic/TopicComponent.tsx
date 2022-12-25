import React from 'react';
import {RiContactsFill} from 'react-icons/ri';
import {FaBookOpen, FaBrain, FaCode, FaPhoneAlt} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';


import classNames from 'classnames/bind';
import styles from './Topic.module.scss';

const cn = classNames.bind(styles)


const TopicComponent = () => {
    return (
            <div className={cn('topic-container')}>

                <li className={cn('topic-section')}><span className={cn('text')}>About Me</span><RiContactsFill/></li>

                <li className={cn('topic-section')}><span className={cn('text')}>Technology</span><FaCode/></li>
                <li className={cn('topic-section')}><span className={cn('text')}>Skills</span><FaBrain/></li>
                <li className={cn('topic-section')}><span className={cn('text')}>Experience && Projects</span><MdWork/></li>
                <li className={cn('topic-section')}><span className={cn('text')}>Education</span><FaBookOpen/></li>
                <li className={cn('topic-section')}><span className={cn('text')}>Contacts</span><FaPhoneAlt/></li>
            </div>

    );
};

export default TopicComponent;