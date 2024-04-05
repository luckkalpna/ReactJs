import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar titles="TextUtils"/>
    <div className='container'>
    <TextForm heading="Enter your text here for analyze below"/>
    </div>
    </>
  );
}

export default App;
