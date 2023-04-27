import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const API = 'https://jsonplaceholder.typicode.com/users';

  const resPromise = fetch(API);
  const result = resPromise.then((response) => {
    returns response.json().then((data) => {
      return data;
    });
  });

  console.log(result);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <div>{}</div>
    </div>
  );
}

export default App;
