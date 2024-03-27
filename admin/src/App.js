import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Event from './components/Events';
import store from './redux/store'
import { Provider } from 'react-redux';



function App() {
  return (

    <div className="App">

      <Provider store={store}>

        <Sidebar />

        <Event />

      </Provider>


    </div>
  );
}

export default App;
