import React from 'react'
import {Link,Outlet} from "react-router-dom"


const App = () => {
  return (
    <>
    <h1>Hello my name is </h1>
    
    <Link to="/vite-react-router/">Home</Link> 
    <Link to="/vite-react-router/about">about</Link> 
      <Outlet/>
      

      
    </>
  )
}

export default App

