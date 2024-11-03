import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./Comp/Home"
import About from "./Comp/About"



import { RouterProvider, createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children:[
      {
        path: "/vite-react-router/",
        element: <Home />,
      },
      {
        path: "/vite-react-router/about",
        element: <About/>,
      }
     ]
   },
  
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
