import React from "react";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header style={HeaderStyle}>
      <h1>Todo List</h1>
      <Link style={LinkStyle} to='/'> Home </Link> |
      <Link style={LinkStyle} to='/about'> About </Link>
    </header>
  );
};

const HeaderStyle ={
    background:'#333',
    color:'#fff',
    padding:'5px 9px',
    textAlign:'center',
}
const LinkStyle ={
  color:'#fff',
  textDecarotion:'none'
}
export default Header;
