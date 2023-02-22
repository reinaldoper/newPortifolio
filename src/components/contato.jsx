import React, { Component } from 'react'
import SIdebar from './SIdebar'

export default class contato extends Component {
  render() {
    return (
      <div>
        <SIdebar />
        <blockquote className='sobre'>
          <h1>Principais contatos:</h1>
          <h2>EMAIL:</h2>
          <p>reinaldoper83@gmail.com</p>
          <br></br>
          <br></br>
          <h2>LINKEDIN:</h2>
          <p>https://www.linkedin.com/in/reinaldo-pereira/</p>
          <br></br>
          <br></br>
          <h2>GITHUB:</h2>
          <p>https://github.com/reinaldoper</p>
        </blockquote>
      </div>
    )
  }
}
