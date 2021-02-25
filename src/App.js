import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setName] = useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setName(data))
},[])
  const products = [{name:'Laptop',quantity:21},{name:'Mobile',quantity:26},{name:'Tablet',quantity:22},{name:'Desktop',quantity:31}]
  const match = [554,657,455];
  const BangladeshPlayer = [{name:'Sakib',age:32},{name:'Tamim',age:32},{name:'Mushi',age:32},{name:'Mashrafi',age:35},{name:'Mustafiz',age:23},{name:'Mahmudullah',age:34},{name:'Rubel',age:29},{name:'Sabbir',age:28},{name:'Soumya',age:27},{name:'Liton',age:26}];
  return (
    <div className="App">
      <header className="App-header">
          <Nayok name="Sakib" match={match[0]}></Nayok>
          <Nayok name='Tamim' match={match[2]}></Nayok>
          <Nayok name='mushi' match={match[1]}></Nayok>
          <MatchPlay></MatchPlay>
            {
              BangladeshPlayer.map(player => <Nayok name={player.name}></Nayok>)
            }

            {
              products.map(product => <Product name={product.name}quantity={product.quantity}></Product>)
            }
         {
           users.map(user=><ApiUser name={user.name} email={user.email}></ApiUser>)
         }
      </header>
    </div>
  );
}
function ApiUser(props){
  return (<div>
    <h3>{props.name}</h3>
    <h6>{props.email}</h6>
  </div>)
}
function Product(props){
  const style = {
    backgroundColor:'cyan',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid gray',
    borderRadius: '10px',
    color: 'black'
  }
  return (
    <div style={style}>
      <h2>Product Name {props.name}</h2>
      <h2>Product Quantity {[props.quantity]}</h2>
    </div>
  )
}

function Nayok(props){
  const nayokStyle = {
    border: '1px solid gray',
    borderRadius: '15px',
    backgroundColor: 'Salmon',
    padding: '20px',
    margin: '10px 0'
  }
  return <div style={nayokStyle}>
      <h3>I am  Bangladeshi Cricket Player {props.name || 'King Corbin'}</h3>
      <h5>I have done {props.match || 400} match</h5>
    </div>
}

function MatchPlay(){
  const [count, setCount] = useState(1);
  const handleClick = () => setCount(count+1)
  const buttonStyle = {
    fontSize: '18px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'Salmon'
  }
  return ( <div>
    <button onClick={handleClick} style={buttonStyle}>Add Match</button>
    <h5>No of Match {count}</h5>
    <MatchDisplay movie={count}></MatchDisplay>
  </div>
  )
}
function MatchDisplay(props){
    return <h5>I have played {props.movie} match</h5>
}
export default App;
