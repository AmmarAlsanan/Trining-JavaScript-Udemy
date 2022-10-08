import './App.css';
import { Todo } from './ui/todo/todoActions';
import { WrapperList } from './ui/todo/wapperList';

function App() {
  //async /await
  const fetchingUser = async (size) => {
    const respone = fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())

      .then((json) => console.log(json));

    return respone;
  };

  //then / catch
  fetchingUser(1)
    .catch((title) => console.log(title))
    .catch((err) => err.message);

  console.log(fetchingUser(2));

  return (
    <div className="App">
      <div
        style={{
          margin: '10%',
          height: '30rem',
          width: '40rem',
          backgroundColor: 'red',
          borderRadius: '20px',
          textAlign: 'center',
        }}
      ></div>
    </div>
  );
}

export default App;
