import './App.css';
import Header from './component/Headr'
import Home from './component/Home'
import MovieDetails from './component/MovieDetails'
import PageNotFound from './component/PageNotFound'
import Footer from './component/Footer'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Homes from './component/Homes';
function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>
         <Route path="/" element={<Homes/>}/>
      </Routes>
      <Footer/>
    </Router> 
      
    </div>
  );
}

export default App;
