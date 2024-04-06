import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Navbar titles="TextUtils"/>
    <div className='container'>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
        <TextForm heading="Enter your text here for analyze below"/>
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
