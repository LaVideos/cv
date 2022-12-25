import React from 'react';
import {ReactComponent as Movie} from '../../assets/svg/hobby/movie-svgrepo-com.svg';
import {ReactComponent as AudioBook} from '../../assets/svg/hobby/audiobook-svgrepo-com.svg';
import {ReactComponent as Music} from '../../assets/svg/hobby/music-player-svgrepo-com.svg';
import {ReactComponent as VideoGames} from '../../assets/svg/hobby/computer-game-svgrepo-com.svg';
import {ReactComponent as BoardGames} from '../../assets/svg/hobby/board-games-set-svgrepo-com.svg';

import classNames from 'classnames/bind';
import styles from './Hobby.module.scss';

const cn = classNames.bind(styles)


const HobbyComponent = () => {
    return (
        <div className={cn('container-hobby')}>
            <div className={cn('square','movie')}>
                <span></span>
                <span></span>
                <span></span>
                <div className={cn('content')}>
                   <div className={cn('pic')}>
                       <Movie/>
                   </div>
                    <div  className={cn('pic-title')}>Movies</div>
                    <div className={cn('likes')} >Born to watch</div>
                </div>
            </div>

            <div className={cn('square','board-game')}>
                <span></span>
                <span></span>
                <span></span>
                <div className={cn('content')}>
                    <div className={cn('pic')}>
                        <BoardGames/>
                    </div>
                    <div  className={cn('pic-title')}>Board Games</div>
                    <div className={cn('likes')} >Cubes are an extension of the hand</div>
                </div>
            </div>


            <div className={cn('square','audio-book')}>
                <span></span>
                <span></span>
                <span></span>
                <div className={cn('content')}>
                    <div className={cn('pic')}>
                        <AudioBook/>
                    </div>
                    <div className={cn('pic-title')}>Audio Books</div>
                    <div className={cn('likes')} >Wow, so many voices in my head...</div>
                </div>
            </div>

            <div className={cn('square','music')}>
                <span></span>
                <span></span>
                <span></span>
                <div className={cn('content')}>
                    <div className={cn('pic')}>
                        <Music/>
                    </div>
                    <div  className={cn('pic-title')}>Music</div>
                    <div className={cn('likes')} >A stroke from the lack of headphones</div>
                </div>
            </div>

            <div className={cn('square','video-games')}>
                <span></span>
                <span></span>
                <span></span>
                <div className={cn('content')}>
                    <div className={cn('pic')}>
                        <VideoGames/>
                    </div>
                    <div  className={cn('pic-title')}>Video Games</div>
                    <div className={cn('likes')} >I'm not an alcoholic, but sometimes I break down</div>
                </div>
            </div>




        </div>
    );
};

export default HobbyComponent;