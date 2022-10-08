import './App.css';


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
jfjfj

    </div>
  );
}

export default App;
