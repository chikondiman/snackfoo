import React from 'react';

class Snacks extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: 'Nabisco Oreo Cookies' };
    }


    ReactDOM.render(<Snacks />, document.getElementById('app'));