import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        All Code Logs
      </Link>
      <div className="center menu">
        <Link to="/logs/new" className="item">
          Create a new Code Log
        </Link>
      </div>
    </div>
    )
  }
}

export default Header
