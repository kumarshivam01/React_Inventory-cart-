import logo from './logo.svg';
import './App.css';
import Todo from './collections/Todo';
import Data from './Data';
function App() {
  function cart(val,idx,arr){
    // console.log(val)
    return(
      <Todo 
        img = {val.img}
        price = {val.price}
        name = {val.name}
       />
    )
  }
  return (
    <div className="App">
     {/* <Todo/> */}
     {Data.map(cart)}
    </div>
  );
  
}

export default App;
