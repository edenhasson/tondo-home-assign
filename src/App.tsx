import {Route, Routes} from "react-router-dom";
import LaunchesPage from "./pages/LaunchesPage";
import LaunchPage from "./pages/LaunchPage";

function App() {

    return (
        <Routes>
            <Route path="/" element={<LaunchesPage/>}/>
            <Route path={"/launch/:id"} element={<LaunchPage/>}/>
        </Routes>
    )
}
export default App;