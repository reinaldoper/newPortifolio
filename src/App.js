import initialPage from './components/InitialPage';
import sobre from './components/sobre';
import contato from './components/contato';
import projetos from './components/projetos';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={initialPage} />
      <Route exact path="/contato" component={contato} />
      <Route exact path="/sobre" component={sobre} />
      <Route exact path="/projetos" component={projetos} />
    </Switch>
  );
}

export default App;
