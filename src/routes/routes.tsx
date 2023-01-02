import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../layout";
import {MainPage, ResumePage} from "../pages";

export const AppRouter = () => {
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