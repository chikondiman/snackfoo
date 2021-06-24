import logo from './logo.svg';
import './styles.css';

import React, { useState } from 'react';



function App() {


  class VoteSnack extends React.Component {
    constructor(props) {
      super(props);
      this.state = { snack: "oreo", vote: 5 };
      this.changeName = this.changeName.bind(this);
    }
   
  
    addVote(vote) {
      this.setState({ vote: vote + 1 });
    }
   
  
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



<button onClick="addVote()" className="button">Nabisco Oreo Cookies</button> 

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
    <th> Vote </th>
 
  </tr>
  <tr>
    <td>Nabisco Oreo Cookies</td>
    <td>{this.state.vote}</td>

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
