import React from 'react';
import MyPDF from '../../assets/pdf/SamplePDF.pdf';
import APK from '../../assets/apk/Arcade.apk';

import classNames from 'classnames/bind';
import styles from './Experience.module.scss';
import {GameImgComponent, MovieDBComponent, RainbowComponent} from "../index";
import {img2Tech} from "../../utils";

import {ReactComponent as Download} from '../../assets/svg/parts/download-svgrepo-com (1).svg';


const cn = classNames.bind(styles)

const ExperienceComponent = () => {


    return (
        <div className={cn('experience-container')}>

            <div className={cn('container-data')}>
                <div className={cn('dont-have-exp')}>
                    Here are some of my projects for you to view
                </div>

                <div className={cn('meeting-room-container', 'project-container')}>
                    <div className={cn('title')}>meeting room</div>
                    <div className={cn('subtitle')}>
                        The first project that was developed in a team with other developers at <a href={'https://incora.software/'}>Incora</a> company
                    </div>
                    <div className={cn('data-box')}>
                        A fully functional project made in the style of neomorphism.<br/>
                        It has a fully implemented functionality that allows us to register, login, reset and change the
                        password,
                        has an implemented role of an administrator who can invite users to register, as the resource is
                        closed.<br/>
                        Site allows to book a room for the time and day we need.<br/>
                        It is also possible to delete the reservation, track it, invite other users to the room, change
                        its data, etc.<br/>
                        Protected routes are implemented, so a random character will not be able to access the resource
                        without logging in or changing the password.<br/>
                        Implemented strong validation for each type of field separately.<br/>
                        And the theme switch is done.
                    </div>

                    <span className={cn('subtitle')}>During the development of the project, I used the following libraries and technologies:</span>
                    <div className={cn('data-box-2')}>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>SCSS</li>
                        <li>React Router v6</li>
                        <li>Redux-Saga</li>
                        <li>Redux-Toolkit</li>
                        <li>React Hook Form</li>
                        <li>StoryBook</li>
                        <li>Axios</li>
                        <li>Yup</li>
                        <li>jest</li>
                        <li>etc</li>
                    </div>

                    <div className={cn('is-project-deploy')}>
                        <div><a href={'https://github.com/LaVideos/Meeting-Room'}>Project</a> is deployed
                            so you can visit my github and check on gh-pages
                        </div>
                        <div>But before visit site, please turn on <a
                            href={'https://cors-anywhere.herokuapp.com/corsdemo'}>cors</a></div>
                        <div>Use email admin1@incorainc.com and password 1234 or newUser@incorainc.com and 1q2w3e4r5tQ! to sign in</div>
                    </div>

                </div>

                <div className={cn('movieDB-container', 'project-container')}>
                    <div className={cn('title')}>movieDB api project</div>
                    <div className={cn('subtitle')}>The first project that was written</div>
                    <div className={cn('data-box')}>
                        The site is written using React
                        <img className={cn('img-pic')} alt={''} src={img2Tech('react_2')}/>
                        in conjunction with vanilla JavaScript
                        <img className={cn('img-pic')} alt={''} src={img2Tech('js')}/>
                        . Used the moviedb
                        api<br/>
                        The project has the following features:
                        full routing, filtering, pagination, search, rating, black and dark themes, movie page with
                        additional data,own component etc.
                    </div>
                    <div className={cn('swiper')}><MovieDBComponent/></div>
                    <div className={cn('is-project-deploy')}><a href={'https://github.com/LaVideos/react_project_front'}>Project</a> is on my github - so
                        you can check the code
                    </div>
                </div>

                <div className={cn('rick-and-morty-container', 'project-container')}>
                    <div className={cn('title')}>rick and morty project</div>
                    <div className={cn('subtitle')}>I wrote the last draft in a few days using the Rick and Morty Api</div>
                    <div className={cn('data-box')}>
                        The site is written using React
                        <img className={cn('img-pic')} alt={''} src={img2Tech('react_2')}/>
                        in conjunction with Typescript
                        <img className={cn('img-pic')} alt={''} src={img2Tech('ts')}/>
                        .<br/>
                        In it, I practiced with the React Query library, instead of the usual pagination, I implemented
                        an infinity scroll and a load more button<br/>
                        There is one problem in this api, namely, a poorly coordinated system of connections with the
                        database - therefore,
                        for the implementation I planned - it was necessary to make many requests
                    </div>
                    <div className={cn('is-project-deploy')}><a href={'https://github.com/LaVideos/rick-and-morty'}>Project</a> is deployed
                        so you can visit my github and check on gh-pages
                    </div>
                </div>

                <div className={cn('incora-test-project', 'project-container')}>
                    <div className={cn('title')}>
                        incora test project
                    </div>
                    <div className={cn('subtitle')}>Test project for internship at <a href={'https://incora.software/'}>Incora</a> company</div>
                    <div className={cn('data-box')}>
                        The project is written using React
                        <img className={cn('img-pic')} alt={''} src={img2Tech('react_2')}/>
                        in conjunction with Typescript
                        <img className={cn('img-pic')} alt={''} src={img2Tech('ts')}/>
                        .<br/>
                        It leans more towards the
                        backend, and is a simulation of it.
                        You can download the project thesis by click <span className={cn('pdf-download')}><a href={MyPDF} download="ThesisIncora.pdf">here</a></span>

                    </div>
                    <div className={cn('is-project-deploy')}><a href={'https://github.com/LaVideos/incora_test'}>Project</a> is on my github - so you can
                        check the code
                    </div>
                </div>

                <div className={cn('arcade-game', 'project-container')}>
                    <div className={cn('title')}>arcade game</div>
                    <div className={cn('subtitle')}>Android game - created for a fun</div>
                    <div className={cn('data-container')}>
                        <div className={cn('data-box-container')}>
                            <div className={cn('data-box', 'data-box-game')}>
                                The project is written by C#
                                in the Unity
                                <img className={cn('img-pic')} alt={''} src={img2Tech('unity')}/>
                                workspace.<br/>
                                It was my first programming try.<br/>
                                The game is a simple simulation of building a tower using physics, that is, if one side
                                prevails
                                over the other - the tower will collapse.<br/>
                                Ability to turn music on and off.<br/>
                                Implementation of the incentive system i.e. achievements
                            </div>
                                <a href={APK} className={cn('apk-download')}
                                   download="game.apk"><div className={cn('download-container')}>
                                    download<Download/></div></a>
                        </div>
                        <div>
                            <GameImgComponent/>
                        </div>
                    </div>
                </div>
            </div>

            </div>
    );
};

export default ExperienceComponent;