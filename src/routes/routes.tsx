import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../layout";
import {MainPage, ResumePage} from "../pages";
import {AboutMeComponent, ChronoAboutComponent, Education, ExperienceComponent, HobbyComponent} from "../components";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/profile'} element={<MainLayout/>}>
    <Route path={'about'} index element={<MainPage/>}></Route>
    <Route path={'resume'} element={<ResumePage/>}>
        {/*<Route path={'aboutUs'} element={<ChronoAboutComponent/>}></Route>*/}
        {/*<Route path={'experience'} element={<ExperienceComponent/>}></Route>*/}
        {/*<Route path={'education'} element={<Education/>}></Route>*/}
        {/*<Route path={'hobby'} element={<HobbyComponent/>}></Route>*/}
    </Route>
    </Route>
    </Routes>
)
}