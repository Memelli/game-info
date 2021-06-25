import './App.css';
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/About'
import GameInfo from './pages/GameInfo'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/sobre" component={Sobre} exact></Route>
        <Route path="/game/:id" component={GameInfo} exact></Route>
      </Switch>
      
    </>
  );
}

export default App;
