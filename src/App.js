import './App.css';
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import GameInfo from './pages/GameInfo'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/game/:id" component={GameInfo} exact></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
