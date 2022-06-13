import Profile from "./Profile";
import Main from "./Main";
import {Route, Routes,} from "react-router-dom";
import CreateNews from "./CreateNews";

const App: () => JSX.Element = () => {
    return (
        <Routes>
            <Route element={<Main/>} path="/"/>
            <Route element={<Profile/>} path="/profile"/>
            <Route element={<CreateNews/>} path="/createNews"/>
        </Routes>
    )
};

export default App;