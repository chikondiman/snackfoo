import React from 'react';




export default class Poll extends React.Component

{
  
  constructor(props) {
    super(props)
    this.state = {
      vote: 0,
      count: 0,
      snack: "Nabisco Oreo Cookies"
    }
  

  

    function castVote() {
      this.state.vote = this.state.vote + 1
    }

};


  render() {
   return 
(

 <button onClick={this.castVote} className="button">{this.state.snack}</button> 

);

  }