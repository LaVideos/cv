import react from '../assets/png/programmer/react.svg';
import csharp from '../assets/png/programmer/c-sharp.png';
import js from '../assets/png/programmer/js.png';
import java from '../assets/png/programmer/java.png';
import ts from '../assets/png/programmer/typescript.png';
import html from '../assets/png/programmer/html-5.png';
import css from '../assets/png/programmer/css-3.png';
import git from '../assets/png/programmer/github.png';
import sass from '../assets/png/programmer/sass.png';
import spring from '../assets/png/programmer/spring.png';
import mongodb from '../assets/png/programmer/mongodb.png';
import mysql from '../assets/png/programmer/mysql.png';
import photoshop from '../assets/png/programmer/photoshop.png';
import blender from '../assets/png/programmer/blender.png';
import hibernate from '../assets/png/programmer/hibernate.png';
import unity from '../assets/png/programmer/unity.png';
import redux from '../assets/png/programmer/redux.png';
import router from '../assets/png/programmer/react-router.png';
import axios from '../assets/png/programmer/axios.png';
import react_hook_form from '../assets/png/programmer/react-hook-form.png';
import angular from '../assets/png/programmer/angular.svg';
import python from '../assets/png/programmer/python.svg';
import nodejs from '../assets/png/programmer/nodejs.svg';
import scrum from '../assets/png/programmer/scrum.svg';
import agile from '../assets/png/programmer/agile.svg';
import react_native from '../assets/png/programmer/react_native.svg';
import alotof from '../assets/png/programmer/alotof.png';
import docker from '../assets/png/programmer/docker.svg';
import vue from '../assets/png/programmer/vue.svg';
import storybook from '../assets/png/programmer/storybook.svg';
import react_2 from '../assets/png/programmer/react-2.svg';
import AWS from '../assets/png/programmer/AWS.png';





export const img2Tech = (name:string)=>{
    let name_ = name.toLowerCase().replace(',','').replace('.','');
    switch (name_){
        case 'react': return react;
        case 'css':return css;
        case 'html':return html ;
        case 'java':return java ;
        case 'c#':return csharp ;
        case 'javascript':return js ;
        case 'js':return js ;
        case 'ts':return ts ;
        case 'typescript':return ts;
        case 'scss':return sass;
        case 'sass':return sass;
        case 'git':return git;
        case 'spring':return spring;
        case 'mongodb':return mongodb;
        case 'mysql':return mysql;
        case 'photoshop':return photoshop;
        case 'blender':return blender;
        case 'hibernate':return hibernate;
        case 'unity':return unity;
        case 'redux':return redux;
        case 'redux-toolkit(saga)':return redux;
        case 'router':return router;
        case 'react-router-v6-v5':return router;
        case 'axios':return axios;
        case 'react-hook-form':return react_hook_form;
        case name_.includes('a lot of'||'many'||'much')&&'a lot of another libraries':return alotof;
        case 'angular':return angular;
        case 'python':return python;
        case 'nodejs':return nodejs;
        case 'scrum':return scrum;
        case 'agile':return agile;
        case 'react-native':return react_native;
        case 'react native':return react_native;
        case 'docker':return docker;
        case 'vue':return vue;
        case 'storybook':return storybook;
        case 'react_2':return react_2;
        case 'aws'||'amazon web services':return AWS;
    }
}