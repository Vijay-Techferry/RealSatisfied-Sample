import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes, unAuthRoutes } from './utilities/routes'
import { useState } from 'react';

const browserRouter = createBrowserRouter(routes);

const unAuthRouter = createBrowserRouter(unAuthRoutes);


const App = () => {
const [auth] = useState<boolean>(false);

return<RouterProvider router={ auth?browserRouter:unAuthRouter}/>
}

export default App