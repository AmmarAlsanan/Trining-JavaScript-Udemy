import './App.css';
import React from 'react';

import { Button, Col, Row } from 'antd';

import { BrowserRouter, useLocation } from 'react-router-dom';

import { AppRoutes } from './appRoutes/appRoutes';
function App({ children }) {
  // useTransition
  // const [isPindding, startAction] = useTransition();
  const [counter, setcounter] = React.useState(0);
  const { pathname } = useLocation();

  console.log(pathname);
  // useId from react v18
  // const ids = React.useId();

  //async /await
  // const fetchingUser = async (size) => {
  //   const respone = fetch('https://dummyjson.com/products/1')
  //     .then((res) => res.json())

  //     .then((json) => console.log(json));

  //   return respone;
  // };

  //then / catch
  // fetchingUser(1)
  //   .catch((title) => console.log(title))
  //   .catch((err) => err.message);

  // useLayoutEffect vs useEffect => useEffect is async and useLayoutEffect sync
  // React.useLayoutEffect(() => {
  //   if (isClicked) {
  //     const randowm = Math.floor(Math.random() * 10);
  //     setPaddingBix(randowm);
  //   }
  // }, [isClicked]);

  // depounce function
  // const deppoce = (fu, delay) => {
  //   let checkId;

  //   return () => {
  //     if (checkId) {
  //       clearTimeout(checkId);
  //     }
  //     checkId = setTimeout(() => {
  //       fu();
  //     }, delay);
  //   };
  // };

  return (
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>

    <>
      <div>hdhdh</div>
    </>
  );
}

export default App;

