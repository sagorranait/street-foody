import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Destination from "./Pages/Destination";

const routes = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <Home/> },
         { path: 'destination', element: <Destination/> },
         { path: 'recipes', element: <Recipes/> },
         { path: 'contact', element: <Contact/> },
         { path: 'login', element: <Login/> },
         { path: 'register', element: <Register/> }
      ],
   },
 ]);

 export { routes }