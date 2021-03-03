// import logo from './logo.svg';
import './App.css';
import Autocomplete from './Components/Autocomplete';
import DynamicCalculate from './Components/DynamicCalculate';

function App() {
  return (
    <div className=''>
      <DynamicCalculate/>
      <div><h1>----------------------------------------------------------------------------------------------</h1></div>
      <Autocomplete/>
    </div>
  );
}

export default App;
