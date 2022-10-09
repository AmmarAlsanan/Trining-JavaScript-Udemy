import './App.css';
import React, { useTransition } from 'react';
import { Todo } from './ui/todo/todoActions';
import { WrapperList } from './ui/todo/wapperList';
import { Button, Col, Row, Spin } from 'antd';

function App({ children }) {
  // useTransition
  // const [isPindding, startAction] = useTransition();
  const [counter, setcounter] = React.useState(0);
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
    <div className="App">
      {/* <div
        style={{
          margin: '10%',
          height: '30rem',
          width: '40rem',
          backgroundColor: 'red',
          borderRadius: '20px',
          textAlign: 'center',
          marginTop: `${paddingBox}px`,
        }}
      >
        {isClicked}
      </div> */}
      <Row style={{ margin: '30px' }}>
        <Col>
          <div>{counter}</div>
        </Col>
        <Col>
          <Button onClick={() => setcounter(counter + 1)}>click me </Button>
        </Col>
        <Col>
          {React.Children.map(children, (child) => (
            <>
              <Button className="Row">{child}</Button>
            </>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default App;
