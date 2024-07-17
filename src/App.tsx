import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './utilities/routes'

const browserRouter = createBrowserRouter(routes);

const App = () => <RouterProvider router={browserRouter}/>

export default App