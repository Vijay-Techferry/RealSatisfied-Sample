import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";

export const routes = [{path:"/",element:<LandingPage/>,children:[]}];

export const unAuthRoutes = [{path:"/",element:<LoginPage/>,errorElement:<div>Not Found</div>}]