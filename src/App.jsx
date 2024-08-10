import { useState } from 'react';
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit, } from "react-router-dom";
import NavigationBar from './components/global/navbar/NavigationBar';
import Home from './pages/Home';
import styled from 'styled-components';



function App() {

  return (
    <>
        <NavigationBar />
        <Outlet />
    </>
  )
}

export default App
