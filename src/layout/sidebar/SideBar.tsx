import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import {NavLink} from "react-router-dom";
import 'animate.css';


const cn = classNames.bind(styles)
export const Sidebar = ()=>  {

    return <div className={cn('sidebar-box','animate__animated','animate__bounceInLeft')}>

        <div className={cn('link-container')}>
            <div className={cn('nav')}>

                <div className={cn('link-box')}><NavLink to={'/profile/about'}>About
                </NavLink></div>

                <div className={cn('link-box')}><NavLink to={'/profile/resume'}>
                    Resume
                </NavLink></div>
            </div>


        </div>



        <div className={cn('sidebar-container')}>
            <svg className={cn('blob-5', 'blob')} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--landing-3)"
                      d="M52.5,-52.5C67.3,-37.8,78,-18.9,74.9,-3.1C71.8,12.7,54.9,25.4,40.1,34.5C25.4,43.6,12.7,49.1,-4.3,53.4C-21.3,57.8,-42.6,60.8,-51.2,51.7C-59.7,42.6,-55.5,21.3,-53.4,2.1C-51.3,-17,-51.2,-34.1,-42.6,-48.9C-34.1,-63.6,-17,-76.1,0.9,-77.1C18.9,-78,37.8,-67.3,52.5,-52.5Z"
                      transform="translate(100 100)"/>
            </svg>

            <svg className={cn('blob-7', 'blob')} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--landing-5)" d="M55,-46.5C67.9,-42.2,72.5,-21.1,68.7,-3.8C64.9,13.5,52.8,27.1,39.9,32C27.1,37,13.5,33.3,-0.4,33.7C-14.3,34.1,-28.6,38.5,-40.2,33.6C-51.8,28.6,-60.7,14.3,-65,-4.3C-69.3,-22.9,-69,-45.8,-57.4,-50.1C-45.8,-54.4,-22.9,-40.2,-0.9,-39.3C21.1,-38.4,42.2,-50.8,55,-46.5Z" transform="translate(100 100)" />
            </svg>

            <svg className={cn('blob-4', 'blob')} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--landing-4)"
                      d="M42.1,-42.4C57,-37.6,73.4,-26.7,71.6,-15.8C69.7,-4.9,49.6,6,38,18.2C26.5,30.3,23.6,43.6,13.9,53.9C4.2,64.3,-12.3,71.8,-24.6,67.4C-36.8,63,-44.8,46.7,-49.5,31.8C-54.2,16.9,-55.7,3.4,-57.4,-14.2C-59.2,-31.8,-61.2,-53.5,-51.6,-59.3C-42.1,-65,-21.1,-54.8,-3.7,-50.3C13.6,-45.8,27.1,-47.1,42.1,-42.4Z"
                      transform="translate(100 100)"/>
            </svg>



            <svg className={cn('blob-1', 'blob')} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--landing-2)"
                      d="M43.2,-68.1C51.4,-61.9,50.4,-42.2,51.5,-27.2C52.7,-12.2,55.9,-1.8,57.9,10.7C59.8,23.3,60.4,38.1,54.4,49.6C48.3,61.1,35.5,69.2,23,68.4C10.4,67.6,-1.8,57.8,-13.7,51.9C-25.6,46.1,-37.2,44.1,-45,37.6C-52.7,31.1,-56.7,19.9,-56.6,9.2C-56.5,-1.5,-52.3,-11.8,-49.3,-24.2C-46.2,-36.6,-44.3,-51.3,-36.3,-57.6C-28.3,-63.8,-14.1,-61.7,1.7,-64.3C17.5,-66.9,35,-74.2,43.2,-68.1Z"
                      transform="translate(100 100)"/>
            </svg>

            <svg className={cn('blob-1', 'blob')} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--landing-1)"
                      d="M24.9,-27C31.3,-24.4,34.6,-15.5,39.4,-4.6C44.1,6.4,50.2,19.4,44.8,23.3C39.5,27.1,22.7,21.7,8.3,30.3C-6.2,38.8,-18.3,61.3,-30.8,65.2C-43.3,69.1,-56.1,54.4,-63.6,38.3C-71.1,22.1,-73.4,4.4,-66.3,-7.5C-59.2,-19.3,-42.7,-25.3,-30.1,-26.8C-17.5,-28.4,-8.8,-25.4,0.3,-25.8C9.3,-26.1,18.6,-29.7,24.9,-27Z"
                      transform="translate(100 100)"/>
            </svg>

            <svg className={cn('blob-6', 'blob')} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--landing-2)" d="M60.2,-37.3C67.4,-22.2,55.4,1.5,42.2,18C29,34.5,14.5,43.9,-4,46.3C-22.5,48.6,-45,43.8,-58.7,27C-72.3,10.3,-77.1,-18.5,-65.8,-35.9C-54.5,-53.4,-27.3,-59.5,-0.4,-59.3C26.5,-59,52.9,-52.4,60.2,-37.3Z" transform="translate(100 100)" />
            </svg>



            <svg className={cn('blob-2', 'blob')} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--landing-1)"
                      d="M59.1,-49.6C74.5,-43.7,83.6,-21.8,84,0.4C84.4,22.6,76.1,45.2,60.7,52C45.2,58.8,22.6,49.8,7.1,42.8C-8.4,35.7,-16.9,30.5,-29.4,23.7C-41.9,16.9,-58.5,8.4,-64.8,-6.2C-71,-20.9,-66.9,-41.9,-54.4,-47.8C-41.9,-53.8,-20.9,-44.7,0.4,-45.2C21.8,-45.6,43.7,-55.5,59.1,-49.6Z"
                      transform="translate(100 100)"/>
            </svg>

            <svg className={cn('blob-3', 'blob')} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--landing-5)"
                      d="M50.9,-55.4C60.6,-41.2,59.5,-20.6,58.5,-0.9C57.6,18.7,56.9,37.5,47.2,43.3C37.5,49.1,18.7,42,5.4,36.7C-8,31.3,-16,27.6,-18.2,21.8C-20.5,16,-17.1,8,-20.9,-3.7C-24.6,-15.5,-35.5,-30.9,-33.2,-45.1C-30.9,-59.2,-15.5,-72,2.6,-74.6C20.6,-77.2,41.2,-69.5,50.9,-55.4Z"
                      transform="translate(100 100)"/>
            </svg>

        </div>
    </div>


}