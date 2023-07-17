import './App.css';
import ArrayUsestate from './Components/ArrayUsestate';
import InputUsestate from './Components/InputUsestate';
import UsestateForm from './Components/UsestateForm';
import UsestateHooks from './Components/UsestateHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArrayUsestate />
        <UsestateForm />
        <InputUsestate />
        <UsestateHooks />
      </header>
    </div>
  );
}

export default App;
