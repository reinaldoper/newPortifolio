import React, { Component } from 'react'
import SIdebar from './SIdebar'
import data from '../Data/dataProjetos';

export default class projetos extends Component {
  render() {
    const result = data.map((data) => (
      <div key={data.id}>
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} className='map-img'/>
      </div>
    ));
    return (
      <div>
        <SIdebar />
        <h1 id='projetos'>Imagens de alguns projetos</h1>
        <ol className='image-projetos'>
          {result}
        </ol>
      </div>
    )
  }
}
