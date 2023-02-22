import React, { Component } from 'react';
import eu from '../images/eu.png';
import mercado from '../images/mercado.png';
import musicas from '../images/musicas.png';
import times from '../images/times.png';
import login from '../images/tela-login.png';
import partidas from '../images/partidas.png';
import classificacao from '../images/tela-classificacao.png';
import stackOverflow from '../images/stackOver.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import topo from '../images/topo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import SIdebar from './SIdebar';


export default class InitialPage extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  render() {
    return (
      <div>
        <header>
          <nav className="navbar">
            <ul className="elementos">
              <h2>PÁGINA OFICIAL</h2>
              {/* inicio da renderização do carousel */}
              <Carousel>
                <Carousel.Item interval={1500}>
                  <img
                    className='img-carrosel'
                    src={mercado}
                    alt="Images One"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img
                    className='img-carrosel'
                    src={musicas}
                    alt="Image1 Two"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img
                    className='img-carrosel'
                    src={times}
                    alt="Image1 Two"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img
                    className='img-carrosel'
                    src={classificacao}
                    alt="Image1 Two"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img
                    className='img-carrosel'
                    src={partidas}
                    alt="Image1 Two"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img
                    className='img-carrosel'
                    src={login}
                    alt="Image1 Two"
                  />
                </Carousel.Item>
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
                <a href="https://stackoverflow.com/users/21267050/reinaldo-pereira-dos-santos"
                  ><img src={stackOverflow} alt="StackOverFlow" className='img-src'/></a>
                <a href="https://www.linkedin.com/in/reinaldo-pereira/"
                  ><img src={linkedin} alt='linkedin' className='img-src'/></a>
                <a href="https://github.com/reinaldoper"
                  ><img src={github} alt='git' className='img-src'/></a>
                <a href="mailto:reinaldoper83@gmail.com?subject=Hello%20again">
                  <img src={gmail} alt='gmail' className='img-src'/></ a>
                  
              </div>
            </div>
            <img src={eu} alt="Images" className='img' />
          </div>
          <button type='button'
           className='button' onClick={this.scrollToTop}><img src={topo} alt='topo'/></button>
          <h4>Copyright &copy; 2023</h4>
        </div>
      </div>
    )
  }
}

