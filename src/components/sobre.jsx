import React, { Component } from 'react';
import SIdebar from './SIdebar';

export default class sobre extends Component {
  render() {
    return (
      <div>
        <SIdebar />
        <div className='sobre'>
          <h1>Oi, meu nome é Reinaldo Pereira dos Santos</h1>
          <p>Engenheiro de software formado pela faculdade <strong>Unicesumar</strong>, apaixonado por tecnologia e tudo que envolve,
            <br></br>
            atualmente estudante de tecnologia e desenvolvimento WEB na <strong>Trybe</strong>, onde comecei em abril de 2022 e devo me formar em abril de 2023.
            <br></br></p>

          <p>Profissional com mais de 18 anos de experiência em Eletrotécnica e automação industrial , procurando novos desafios na carreira, proativo, pensamento critico e dinamismo são alguns dos meus pontos fortes.

            Comecei a graduação na área de programação pela <strong>faculdade federal UFGD de Dourados/MS</strong> em Sistemas de Informação, após 3 anos de curso, migrei para faculdade Unicesumar como Engenharia de Software, na qual me formei no final de 2021.

            Estudante de desenvolvimento Web na Trybe, procurando oportunidades na área de programação para poder de alguma forma melhorar a vida das pessoas através do meio digital.
            Apaixonado por tecnologia e tudo que envolve, conhecimentos de linguagens de programação (React.js, javaScript). Programação de softwares embarcados(Arduíno), linguagem de marcação de texto HTML, estilos CSS, framework bootstrap, context.Api, hooks, Redux.
            Conhecimentos em docker, aplicação back-end múltiplas camadas, nodeJs com express, tests com jest.
            <br></br>
            <h2>Habilidades no frontEnd:</h2>
            FrontEnd: ReactJs, Redux, ContextAPi, Hooks, HTML, CSS, JavaScript, Tests.
            <br></br>
            <h2>Habilidades no backEnd:</h2>
            BackEnd: NodeJs, Express, JavaScript, MySql, MongoDb, MSC, typeScript, Mocha, Sinon, Chai.
            <br></br>
            Metodologias Ágeis de desenvolvimento de software.
            Inglês técnico para leitura.
            Espanhol básico .
          </p>
        </div>
      </div>
    )
  }
}
