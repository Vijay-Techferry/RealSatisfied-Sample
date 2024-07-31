import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";

export const routes = [{path:"/",element:<LandingPage/>,children:[],errorElement:<div>Not Found</div>}];

export const unAuthRoutes = [{path:"/",element:<LoginPage/>,errorElement:<div>Not Found</div>}]