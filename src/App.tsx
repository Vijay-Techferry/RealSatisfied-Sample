/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes, unAuthRoutes } from './utilities/routes'
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import circleLoader from "./assets/circleLoader.svg"

const browserRouter = createBrowserRouter(routes);

const unAuthRouter = createBrowserRouter(unAuthRoutes);


const App = () => {
const auth = useSelector((state:any)=> state?.user?.isLoggedIn)

return <Suspense fallback={<div style={{display:"flex",justifyContent:"center",marginTop:"20%"}}><img width={90} src={circleLoader} alt=''/></div>}><RouterProvider router={ auth?browserRouter:unAuthRouter}/></Suspense>
}

export default App