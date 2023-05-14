
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import RPCsetup from './components/RPCsetup';
import Register from './components/Register';
import Footer from './components/Footer';
import Logoutresponse from './components/Logoutresponse'


function App() {
  return (
    <div className="App">
<Routes>
  <Route exact path ="/" element = {<Home /> } />
  <Route path ="/register" element = {<Register /> } />
  <Route path ="/rpcsetup" element = {<RPCsetup /> } />
  <Route path ="/logoutresponse" element = {<Logoutresponse /> } />
</Routes>
<Footer />
    </div>
  );
}

export default App;
