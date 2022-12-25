import React from "react"
import {Chrono} from "react-chrono";
import eng from '../../assets/png/lang/united-kingdom.png'

import classNames from 'classnames/bind';
import styles from './ChronoAbout.module.scss';
import {img2Tech} from "../../utils";

const cn = classNames.bind(styles)

export const ChronoAboutComponent = () => {

    const arrToLearn = ['React Native','Spring','Vue','Angular','MySql','MongoDB','AWS','Docker','Agile','Scrum']


    let items: any = [
        {
            title: " Before starting learning IT"
        },

        {
            title: "Start of courses from OKTEN"
        },

        {
            title: "Learning JavaScript",
        },

        {
            title: "Familiarization with databases",
        },
        {
            title: "Learning React",
        },
        {
            title: "Interview and test task for taking incora courses",
        },
        {
            title: "Learning Java (Hibernate, Spring)",
        },
        {
            title: "Incora Coding camp courses",
        },
        {
            title: "Future plans",
        },


    ];

    return (
        <div className={cn('chronic-container')}>
            <Chrono items={items}
                mode="VERTICAL_ALTERNATING"
                    theme={{
                        primary: 'var(--dark-grey-text)',
                        secondary: 'var(--grey-text)',
                        titleColorActive: 'var(--dark-grey-text)',
                        titleColor: 'var(--grey-text)',
                    }}
                    buttonTexts={{
                        first: 'Jump to First',
                        last: 'Jump to Last',
                        next: 'Next',
                        previous: 'Previous',
                        play:'Play',
                    }}
                    // enableOutline //menu
            >
                <div className={cn('chronic-box')}>
                    <div className={cn('header')}>
                        Before 2022
                    </div>
                    <div className={cn('box-data')}>
                        Before I started studying IT seriously, I studied at university for a profession as far removed from it as possible.
                        At the same time, I tried my hand at photography and 3D modeling (Some works have been preserved).
                        In November 21, I decided to try my hand at programming. After learning C#
                        <img className={cn('img')} title={'C#'} alt={'C#'}
                             src={img2Tech('c#')}></img>
                       , I created a small arcade game on Unity.
                        From that moment, I decided to check myself at programming.
                        At the beginning of the year 22, I signed up for a Java <img className={cn('img')} title={'java'} alt={'java'}
                                                                                     src={img2Tech('java')}></img> course, which was supposed to start on February 26, but because of the war, the training was postponed to a month later
                    </div>
                </div>

                <div className={cn('chronic-box')}>
                    <div className={cn('header')}>
                        April 2022
                    </div>
                    <div className={cn('box-data')}>
                        I chose the full-stack Java course from <a href={'https://owu.com.ua/'}>OKTEN</a> and started studying<br/>
                        The courses began with learning the basics of CSS <img className={cn('img')} title={'CSS'} alt={'CSS'}
                                                                               src={img2Tech('CSS')}></img> and HTML
                        <img className={cn('img')} title={'HTML'} alt={'HTML'}
                             src={img2Tech('HTML')}></img>
                    </div>
                </div>

                <div className={cn('chronic-box')}>
                    <div className={cn('header')}>
                        20 April - 6 June 2022
                    </div>
                    <div className={cn('box-data')}>
                        From the end of April, we started learning JavaScript <img className={cn('img')} title={'JavaScript'} alt={'JavaScript'}
                                                                                   src={img2Tech('JavaScript')}></img>.
                        Due to constant air alarms, it lasted more than a month.
                        During training, we analyzed both the basic js knowledge  and http requests(Fetch), asynchronous functions, local-storage, etc.
                        And we used what we learned in the final mini-project
                    </div>
                </div>

                <div className={cn('chronic-box')}>
                    <div className={cn('header')}>
                        6 June - 22 June 2022
                    </div>
                    <div className={cn('box-data')}>
                        After the mini-project we had 2 weeks of pseudo-weekends during which we reviewed and practiced with databases.
                        These were MySql <img className={cn('img')} title={'MySql'} alt={'MySql'}
                                              src={img2Tech('MySql')}></img> and MongoDb <img className={cn('img')} title={'MongoDb'} alt={'MongoDb'}
                                                                                              src={img2Tech('MongoDb')}></img>

                    </div>
                </div>

                <div className={cn('chronic-box')}>
                    <div className={cn('header')}>
                        22 June - 6 August 2022
                    </div>
                    <div className={cn('box-data')}>
                        During the study of React
                        <img className={cn('img')} title={'React'} alt={'React'}
                                                      src={img2Tech('react_2')}></img>
                        , i went through the following things:
                        <li>I learned basic React hooks and practiced writing my own</li>
                        <li>Dumped data on the Dom-tree using Redux-toolkit, Redux , Context, prop drill</li>
                        <li>We made API requests using the axios and fetch services</li>
                        <li>Practiced with forms by working with react-hook-form

                            while validating them both with yup and joi libraries and with regular expressions</li>
                        <li>Worked with react-router
                            , both with version 5 and 6</li>
                        <li>Considered class components</li>
                        <li>Learned about TypeScript

                            <img className={cn('img')} title={'TypeScript'} alt={'TypeScript'}
                                 src={img2Tech('TypeScript')}></img>&nbsp;
                            and its benefits</li>
                        <li>Practiced with authorization, access and refresh tokens</li>
                        At the end of the stage, we created a full-fledged <a href={'https://github.com/LaVideos/react_project_front'}>project</a> using the movieDB api.
                    </div>
                </div>

                <div className={cn('chronic-box')}>
                    <div className={cn('header')}>
                        16 August - 31 August 2022

                    </div>
                    <div className={cn('box-data')}>
                        After the successful completion of the project, my candidacy, including that of several other students,
                        was recommended for additional React
                        <img className={cn('img')} title={'React'} alt={'React'}
                             src={img2Tech('react_2')}></img>&nbsp;
                        course at the <a href={'https://incora.software/'}>Incora</a> company.
                        However, before starting, we had to do a test task and pass 2 interviews
                        - in English
                        <img className={cn('img')} title={'JavaScript'} alt={'JavaScript'}
                             src={eng}></img>&nbsp;
                        and a professional one. What I did successfully
                    </div>
                </div>

                <div className={cn('chronic-box')}>
                    <div className={cn('header')}>
                        18 August - 27 September 2022
                    </div>
                    <div className={cn('box-data')}>
                        In parallel with the entrance exams, I decided to continue following the path prescribed by <a href={'https://owu.com.ua/'}>OKTEN</a> while there is an opportunity
                        - at this stage, java
                        <img className={cn('img')} title={'java'} alt={'java'}
                             src={img2Tech('java')}></img>&nbsp;
                        and its frameworks - Hibernate
                        <img className={cn('img')} title={'hibernate'} alt={'hibernate'}
                             src={img2Tech('hibernate')}></img>&nbsp;
                        and Spring
                        <img className={cn('img')} title={'spring'} alt={'spring'}
                             src={img2Tech('spring')}></img>&nbsp;
                        - were waiting for me.
                        Unfortunately, when the courses from <a href={'https://incora.software/'}>Incora</a> started - I was forced to suspend the study of the Spring <img className={cn('img')} title={'spring'} alt={'spring'}
                                                                                                                                                                            src={img2Tech('spring')}></img>&nbsp; framework
                    </div>
                </div>

                <div className={cn('chronic-box')}>
                    <div className={cn('header')}>
                        27 September - 26 November 2022

                    </div>
                    <div className={cn('box-data')}>
                        The first month of courses from <a href={'https://incora.software/'}>Incora</a> was educational, or better said, review.
                        Then we practiced with TypeScript
                        <img className={cn('img')} title={'TypeScript'} alt={'TypeScript'}
                             src={img2Tech('TypeScript')}></img>&nbsp;
                        and its typification. The vanilla Javascript
                        <img className={cn('img')} title={'Javascript'} alt={'Javascript'}
                             src={img2Tech('Javascript')}></img>&nbsp;
                        was left overboard.
                        In parallel, we created a full-fledged project, namely a reservation service.
                        The development was carried out by a team of 6 people (3 backenders and 3 frontenders) under the leadership of 2 mentors.
                        It was a great experience as it showed how teamwork between frontend and backend is done
                        This experience allowed me to fully work with github <img className={cn('img')} title={'github'} alt={'github'}
                                                                                  src={img2Tech('git')}></img>&nbsp;,
                        and gave me the opportunity to use such technologies and libraries that were previously unknown to me, such as Redux Saga and Storybook.
                    </div>
                </div>

                <div className={cn('chronic-box')}>
                    <div className={cn('header')}>
                        2023
                    </div>
                    <div className={cn('box-data')}>
                        Starting in the new year, I plan to continue learning the frontend and start learning the backend, which means I plan to finish a course that will allow me to master, try, or continue learning such technologies as:
                        <div className={cn('list-img-container')}>
                            {
                                arrToLearn.map((value, index)=><img key={index} src={img2Tech(value)} title={value} alt={value}/>)
                            }
                        </div>
                        Thus, my ambition is to become a full stack developer by the summer
                    </div>
                </div>

            </Chrono>
        </div>
    )
}