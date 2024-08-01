import { LandingPage,LoginPage } from ".";

export const routes = [{path:"/",element:<LandingPage/>,children:[],errorElement:<div>Not Found</div>}];

export const unAuthRoutes = [{path:"/",element:<LoginPage/>,errorElement:<div>Not Found</div>}]