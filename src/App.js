import logo from './logo.svg';
import './styles.css';

import React, { useState } from 'react';


function App() {


  function VoteSnack() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
  
  }

  
  return (
    <div className="App">

  
      <header className="App-header">

     
      </header>
    <div className="white">
  <th >Snack Voting</th>
  <tr className="t2">Vote on 3 snacks you want to see in this month’s rotation</tr>

  <tr className="t3">Votes remaininig: 0</tr>
  </div>
      
 
<table>
 
<td>

<h2>Available Items
</h2>

<div className="container">



<button onClick={() => setCount(count + 1)} className="button">Nabisco Oreo Cookies</button> 

<button className="button">General Mills Chex Mix</button>

<button className="button">Clif Chocolate Chip Energy Bar</button>

<button className="button">Cheetos Chips</button>

<button className="button">Baked Lays Potato Chips</button>

<button className="button">Hersheys Milk Chocolate</button>

<button className="button">Jack Links Beef Jerky</button>

<button className="button">Planters Salted Peanuts</button> 
</div>

</td>
<table>



  <tr>
    <th>Selection</th>
    <th>{count} </th>
 
  </tr>
  <tr>
    <td>Nabisco Oreo Cookies</td>
    <td>0</td>

  </tr>
  <tr>
    <td>General Mills Chex Mix</td>
    <td>0</td>
  </tr>
</table>
</table>

</div>
  );
}

export default App;
