/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes, unAuthRoutes } from './utilities/routes'
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

const browserRouter = createBrowserRouter(routes);

const unAuthRouter = createBrowserRouter(unAuthRoutes);


const App = () => {
const auth = useSelector((state:any)=> state?.loginReducer?.isLoggedIn)

return <Suspense fallback={<div>Loading...</div>}><RouterProvider router={ auth?browserRouter:unAuthRouter}/></Suspense>
}

export default App