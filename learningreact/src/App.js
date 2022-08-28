import logo from './logo.svg';
import './App.css';
import { AddNumber } from './ui/components';
import axios from 'axios'



function App() {

  //async /await 
      const fetchingUser = async (size) => {
        
        const respone = fetch('https://dummyjson.com/products/1')
  
          .then(res => res.json())
          
          .then(json => console.log(json))
        

            
        return respone
      }


  
  //then / catch 
  fetchingUser(1).catch(title => console.log(title)).catch(err => err.message)
  
  console.log(fetchingUser(2))


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <AddNumber />
      </header>

    </div>
  );
}

export default App;
