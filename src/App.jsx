import './App.css'
import Counter from './assets/counter';
import Team from './assets/team';
import Users from './users';

function App() {

  function handleClick(){
    alert('button click');
  }
  const handleClick2 = () =>{

  }
  const addToFive = (num) =>{
      alert(num + 5);
  }

 return (
    <>
      <h1>React core concepts 2</h1>
 
      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me 2</button>
      <button onClick={() => {alert('third clicked')}}>third</button>
      <button onClick={() => addToFive(4)}>four</button>
    </>
  )
}
export default App
