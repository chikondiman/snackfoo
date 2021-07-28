

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
    <td> {count}</td>

  </tr>
  <tr>
    <td>General Mills Chex Mix</td>
    <td>0</td>
  </tr>
</table>
</table>

</div>
      </div>
   );
  }

  
  export default Component 


