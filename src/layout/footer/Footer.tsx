import React from 'react';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss'
import {FiGithub} from 'react-icons/fi';
import {FaRegPaperPlane, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsInstagram,BsCode} from 'react-icons/bs';


const cn = classNames.bind(styles)


const Footer = () => {
    return (
        <div className={cn('footer-container')}>
            <ul className={cn('list-of-number-content')}>
                <li className={cn('element-of-content')}>phone: <span
                    className={cn('number-of-content')}><span className={cn('content')}>380983292421</span></span></li>
                <li className={cn('element-of-content')}>email: <span
                    className={cn('number-of-content')}><span className={cn('content')}>lavide0sidk@gmail.com</span>
</span></li>
            </ul>

            <div className={cn('icon-a')}>
                <a className={cn('link-web')} href={'https://github.com/LaVideos'}><FiGithub/></a>
                <a className={cn('link-web')} href={'https://www.instagram.com/dead_by_dreams/\n'}><BsInstagram/></a>
                <a className={cn('link-web')} href={'https://t.me/Rl_yeh'}><FaRegPaperPlane/></a>
                <a className={cn('link-web')}
                   href={'www.linkedin.com/in/lavideos'}><FaLinkedinIn/></a>
            </div>

            <div className={cn('deploys-by-container')}>
                <span className={cn('git-icon')}><FaGithub/></span>
                <span className={cn('title')}>
                        <span className={cn('deploy-by-text')}>Deploy by</span>
                        <span className={cn('github-pages-box')}><span className={cn('github')}>Github</span><span className={cn('pages')}> Pages</span></span>
                    </span>
            </div>

            <div className={cn('created-by-box')}>
                <span className={cn('code-icon')}><BsCode/></span>
                by
                <span className={cn('name')}> Oleh Semeniuk </span>
                2022
            </div>
        </div>
    );
};

export default Footer;