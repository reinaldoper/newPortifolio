import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export default class SIdebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <Link to='/' className='active'>HOME</Link>
          <Link to='/sobre' className='link'>SOBRE</Link>
          <Link to='/contato' className='link'>CONTATO</Link>
          <Link to='/projetos' className='link'>PROJETOS</Link>
        </div>
    )
  }
}
