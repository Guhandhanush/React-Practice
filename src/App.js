import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';
import './App.css';

import UseEffect from './Components/FunctionComponents/UseEffect';
import store from './Store/Store';
import Dispatch from './Dispatch/Dispatch';
import UsestateHooks from './Components/FunctionComponents/UsestateHooks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseEffect />
        {/* <Provider store={store}>
          <Dispatch />
        </Provider> */}

      </header>
    </div>
  );
}

export default App;
