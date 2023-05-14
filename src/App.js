
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import RPCsetup from './components/RPCsetup';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
<Routes>
  <Route exact path ="/" element = {<Home /> } />
  <Route exact path ="/register" element = {<Register /> } />
  <Route exact path ="/rpcsetup" element = {<RPCsetup /> } />
</Routes>
<Footer />
    </div>
  );
}

export default App;
