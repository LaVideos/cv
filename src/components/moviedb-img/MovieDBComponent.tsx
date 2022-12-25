import React from 'react';

import classNames from 'classnames/bind';
import styles from './MovieDB.module.scss';

import downPagination from '../../assets/jpeg/moviedb/downPagination.png';
import firstPageDown from '../../assets/jpeg/moviedb/firstPageDown.png';
import filter from '../../assets/jpeg/moviedb/filter.png';
import firstPageUp from '../../assets/jpeg/moviedb/firstPageUp.png';
import search from '../../assets/jpeg/moviedb/search.png';
import SearchMovie from '../../assets/jpeg/moviedb/SearchMovie.png';
import comment from '../../assets/jpeg/moviedb/comment.png';
import rec from '../../assets/jpeg/moviedb/rec.png';
import movie from '../../assets/jpeg/moviedb/movie.png';


const cn = classNames.bind(styles)

const MovieDbComponent = () => {


    return (
        <form className={cn('c')}>

            <input type="radio" name="a" id="cr-1"
                   defaultChecked
            />
            <label htmlFor="cr-1"></label>
            <div className={cn('ci')}>
                <img alt={''} src={firstPageUp}/>
            </div>

            <input type="radio" name="a" id="cr-2"
            />
            <label htmlFor="cr-2"></label>
            <div className={cn('ci')}>
                <img src={firstPageDown} alt=""/>
            </div>

            <input type="radio" name="a" id="cr-3"/>
            <label htmlFor="cr-3"></label>
            <div className={cn('ci')}>
                <img src={downPagination} alt=""/>
            </div>

            <input type="radio" name="a" id="cr-4"/>
            <label htmlFor="cr-4"></label>
            <div className={cn('ci')}>
                <img src={filter} alt=""/>
            </div>

            <input type="radio" name="a" id="cr-5"/>
            <label htmlFor="cr-5"></label>
            <div className={cn('ci')}>
                <img src={search} alt=""/>
            </div>

            <input type="radio" name="a" id="cr-6"/>
            <label htmlFor="cr-6"></label>
            <div className={cn('ci')}>
                <img src={SearchMovie} alt=""/>
            </div>

            <input type="radio" name="a" id="cr-7"/>
            <label htmlFor="cr-7"></label>
            <div className={cn('ci')}>
                <img src={movie} alt=""/>
            </div>

            <input type="radio" name="a" id="cr-8"/>
            <label htmlFor="cr-8"></label>
            <div className={cn('ci')}>
                <img src={comment} alt=""/>
            </div>

            <input type="radio" name="a" id="cr-9"/>
            <label htmlFor="cr-9"></label>
            <div className={cn('ci')}>
                <img src={rec} alt=""/>
            </div>
        </form>
    );
};

export default MovieDbComponent;