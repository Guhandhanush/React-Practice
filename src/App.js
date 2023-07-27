import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux';
import './App.css';
/* import ArrayUsestate from './Components/ArrayUsestate';
import InputUsestate from './Components/InputUsestate'; */
import UseEffect from './Components/UseEffect';
import store from './Store/Store';
import Dispatch from './Dispatch/Dispatch';
/* import UsestateForm from './Components/UsestateForm';
import UsestateHooks from './Components/UsestateHooks'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ArrayUsestate />
        <UsestateForm />
        <InputUsestate />
        <UsestateHooks /> 
        */}
        <UseEffect />
        <Provider store={store}>
          <Dispatch />
        </Provider>
      </header>
    </div>
  );
}

export default App;
