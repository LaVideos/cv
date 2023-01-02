import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {MainLayout} from "../layout";
import {MainPage, ResumePage} from "../pages";
import {useEffect} from "react";

export const AppRouter = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(pathname==='/cv'){
            navigate('/cv/profile/about')
        }
    },[pathname])

    return (
        <Routes>
            <Route path={'/cv/profile'} element={<MainLayout/>}>
    <Route path={'about'} index element={<MainPage/>}></Route>
    <Route path={'resume'} element={<ResumePage/>}>
    </Route>
    </Route>
    </Routes>
)
}