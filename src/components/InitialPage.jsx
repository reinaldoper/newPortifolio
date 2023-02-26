import React, { Component } from 'react';
import eu from '../images/eu.png';
import topo from '../images/topo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import SIdebar from './SIdebar';
import tecnologias from '../Data/tecnologias';
import links from '../Data/dataLinks';
import carousel from '../Data/carousel';


export default class InitialPage extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  render() {
    const carou = carousel.map((i) => (
      <Carousel.Item interval={1500} key={i.id}>
        <img
          className='img-carrosel'
          src={i.src}
          alt={i.alt}
        />
      </Carousel.Item>
    ))
    const tec = tecnologias.map((component) => (
      <div key={component.id} className='div-tec'>
        <h6>{component.titulo}</h6>
        <img src={component.src} alt={component.descricao} />
      </div>
    ));
    const link = links.map((link) => (
      <div key={link.id}>
        <h6>{link.titulo}</h6>
        <a href={link.href}><img src={link.image} alt={link.alt} className='img-src' /></a>
      </div>
    ));
    return (
      <div>
        <header>
          <nav className="navbar">
            <ul className="elementos">
              <h2>PÁGINA OFICIAL</h2>
              {/* inicio da renderização do carousel */}
              <Carousel>
                {carou}
              </Carousel>
            </ul>
          </nav>
        </header>
        {/* importação do componente sidebar */}
        <SIdebar />
        <div class="content">
          <div className="container-img">

            <div className='carousel'>
              <h4>Desenvolvedor fullStack!</h4>
              <div className='images'>
                {link}
              </div>
            </div>
            <img src={eu} alt="Images" className='img' />
          </div>
          <ol className='tecnologias'>
            {tec}
          </ol>
          <button type='button'
            className='button' onClick={this.scrollToTop}><img src={topo} alt='topo' /></button>
          <h4>Copyright &copy; 2023</h4>
        </div>
      </div>
    )
  }
}

