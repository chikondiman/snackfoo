import React from 'react';



class Poll extends React.Component

{
  
  constructor(props) {
    super(props)
    this.state = {
      vote: 0,
      count: 0,
      snack: this.props.snack
    }

      
  const snack = this.props.snack;
  const count = this.props.count;
  const vote = this.props.count;


  }
  render() {


    
        return(
          <div>
              <h1>Snack: {this.snack}</h1>
              <h1>Votes: {this.vote}</h1>
          </div>
       );
        }
    


      }
export default Poll; 