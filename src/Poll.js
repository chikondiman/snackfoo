

import React, { useState } from 'react';

function Component() {
    const [snack1, setCount1] = useState(0);
    const [snack2, setCount2] = useState(0);

    return (
     <div>

        <p>You clicked {snack1} times</p>
       <button onClick={(snack1) => setCount1(snack1 + 1)}>
        Click me
        </button>

        
      </div>
   );
  }

  
  export default Component 


