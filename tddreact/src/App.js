import './App.css';

function App() {

  function increment(input){return input +1;}
function decrement(input){return input -1;}
function halve (input){return input /2;}

const API_URL ='https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

const pipline=[
    increment,increment,decrement,increment,halve,increment
];
const initial_value= 1;

const final_result =pipline.reduce((acc,fn)=> fn(acc),initial_value);

const result_end =pipline.reduceRight((acc,fun)=>fun(acc),initial_value);

console.log(final_result,result_end);


const respnsePromise = fetch(API_URL +'films');

respnsePromise.then(response=>{
    return  console.log(response.length)
})

  return (
    <div className="App">
      <header className="App-header">
<p className='titleTest'>testing </p>
      </header>
    </div>
  );
}

export default App;
