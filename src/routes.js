import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const routes = createBrowserRouter([
   { 
      path: '/', 
      element: <App/>,
      children: [
         { index: true, element: <Home/> },
         { path: 'destination', element: <Destination/> },
         { path: 'blogs', element: <Blogs/> },
         { path: 'contact', element: <Contact/> },
         { path: 'login', element: <Login/> },
         { path: 'register', element: <Register/> }
      ],
   },
 ]);

 export { routes }