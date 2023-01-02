import React, {useState} from 'react';
import avatar from '../../assets/jpeg/avatar.png'
import english from '../../assets/png/lang/united-kingdom.png'
import ukrainian from '../../assets/png/lang/ukraine.png'

import classNames from 'classnames/bind';
import styles from './AboutMe.module.scss';
import {ChronoAboutComponent} from "../chrono/ChronoAboutComponent";
import {img2Tech} from "../../utils";
import {Education, ExperienceComponent, HobbyComponent, RainbowComponent} from "../index";
import 'animate.css';
import {BsEyeFill} from "@react-icons/all-files/bs/BsEyeFill";
import {BsEyeSlashFill} from "@react-icons/all-files/bs/BsEyeSlashFill";

const cn = classNames.bind(styles)

const AboutMeComponent = () => {

    const [aboutMe,setAboutMe] = useState<boolean>(false);
    const [experience,setExperience] = useState<boolean>(false);
    const [education,setEducation] = useState<boolean>(false);
    const [hobby,setHobby] = useState<boolean>(false);
    const [skills,setSkills] = useState<boolean>(false);
    const [softSkills,setSoftSkills] = useState<boolean>(false);

    const tech = ['react','typescript','javascript','html','css','scss','git'];
    const tech2 = ['java','spring','mongodb','mysql','photoshop','c#','unity','blender'];
    const libraries = ['redux-toolkit(saga)','react-router-v6-v5','react-hook-form','axios','storybook','a lot of another libraries'];

    return <div className={cn('resume')}>





        <div className={cn('resume_right','animate__animated','animate__fadeIn')}>
            <div className={cn('resume_item','resume_about')}>
                <div className={cn('title','title-right')}>
                    <div className={cn('bold')}>
                       ABOUT ME
                    </div>
                    <span onClick={()=>setAboutMe(!aboutMe)}  className={cn('svg-eye')}>
                       { aboutMe ? <BsEyeFill/>
                           :
                        <BsEyeSlashFill/>}
                    </span>
                </div>
                {aboutMe&&<div className={cn('content-box')}><ChronoAboutComponent/></div>}
            </div>
            <div className={cn('resume_item','resume_work')}>
                <div className={cn('title','title-right')}>
                    <div className={cn('bold','exp')}>
                          Experience of develop
                    </div>
                    <span onClick={()=>setExperience(!experience)}  className={cn('svg-eye')}>
                       { experience ? <BsEyeFill/>
                           :
                           <BsEyeSlashFill/>}
                    </span>
                </div>
                {experience&& <ExperienceComponent/>}
            </div>
            <div className={cn('resume_item','resume_education')}>
                <div className={cn('title','title-right')}>
                    <div className={cn('bold')}>
                       EDUCATION
                    </div>
                    <span onClick={()=>setEducation(!education)}  className={cn('svg-eye')}>
                       { education ? <BsEyeFill/>
                           :
                           <BsEyeSlashFill/>}
                    </span>
                </div>
                <div>
                    {education&&<Education/>}
                </div>
            </div>
            <div className={cn('resume_item','resume_hobby')}>
                <div className={cn('title','title-right')}>
                    <div className={cn('bold')}>
                       HOBBY
                    </div>
                    <span onClick={()=>setHobby(!hobby)}  className={cn('svg-eye')}>
                       { hobby ? <BsEyeFill/>
                           :
                           <BsEyeSlashFill/>}
                    </span>
                </div>
                <div>
                    {hobby&&<HobbyComponent/>}
                </div>
            </div>
        </div>

        <div className={cn('resume_left')}>

            <div className={cn('resume_profile')}>
                <img src={avatar} alt=""/>
            </div>
            <div className={cn('resume_content')}>
                <div className={cn('resume_item','resume_info')}>
                    <div className={cn('title')}>
                        <div className={cn('name')}>Semeniuk Oleh</div>
                        <div className={cn('regular','occupation')}>Frontend Developer</div>
                    </div>


                        <div className={cn('fields-container')}>
                            <div className={cn('fields')}>
                                <div className={cn('box')}>
                                    <span className={cn('topic')}>city : </span>
                                    <span className={cn('data')}>&nbsp; Lviv, Lviv Region, Ukraine</span>
                                </div>
                                <div className={cn('box')}>
                                    <span className={cn('topic')}>birthday : </span>
                                    <span className={cn('data')}>&nbsp;09.08.2001</span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className={cn('resume_item','resume_skills')}>
                    <div className={cn('title','title-left')}>
                        <div className={cn('bold')}>
                            SKILLS
                        </div>
                        <span onClick={()=>setSkills(!skills)}  className={cn('svg-eye')}>
                       { skills ? <BsEyeFill/>
                           :
                           <BsEyeSlashFill/>}
                    </span>
                    </div>

                    {skills&&<div className={cn('skills-container')}>
                        <div className={cn('skill-box')}>
                            <span className={cn('info-skills')}>i always use this technologies :</span>
                            <span className={cn('skills')}>{
                                tech.map((value, index) => <img title={value} key={index} alt={value}
                                                                src={img2Tech(value)}></img>)
                            }</span>
                        </div>

                        <div  className={cn('skill-box')}>
                            <span className={cn('info-skills')}>only basic knowledge :</span>
                            <span className={cn('skills')}>{
                                tech2.map((value, index) => <img title={value} key={index} alt={value}
                                                                src={img2Tech(value)}></img>)
                            }</span>
                        </div>

                        <div className={cn('skill-box')}>
                            <span className={cn('info-skills')}>react libraries :</span>
                            <span className={cn('skills')}>{
                                libraries.map((value, index) => <img title={value} key={index} alt={value}
                                                                src={img2Tech(value)}></img>)
                            }</span>
                        </div>

                        <div className={cn('skill-box')}>
                            <span className={cn('info-skills')}>languages :</span>
                            <span className={cn('lang')}>
                                <span className={cn('lang-container')}><img src={english} alt={'english'}/> - B1</span>
                                <span className={cn('lang-container')}><img src={ukrainian} alt={'ukrainian'}/> - native</span>
                                </span>
                        </div>

                    </div>}

                </div>
                <div className={cn('resume_item','resume_social')}>
                    <div className={cn('title','title-left')}>
                        <div className={cn('bold','soft')}>
                            SOFT SKILLS
                        </div>
                        <span onClick={()=>setSoftSkills(!softSkills)}  className={cn('svg-eye')}>
                       { softSkills ? <BsEyeFill/>
                           :
                           <BsEyeSlashFill/>}
                    </span>
                    </div>
                    {softSkills&&<>
                        <div className={cn('soft-skill-box')}>Stress resilience</div>
                        <div className={cn('soft-skill-box')}>Critical thinking</div>
                        <div className={cn('soft-skill-box')}>Self-motivation</div>
                        <div className={cn('soft-skill-box')}>Patience</div>
                        <div className={cn('soft-skill-box')}>Calm</div>
                    </>}
                </div>
            </div>
        </div>
    </div>
};

export default AboutMeComponent;