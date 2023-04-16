import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store ={store}>
      <>
    <Header/>
    <Body/>
    </>
  </Provider>

  );
}
/**
 * Head
 * Body
 *   Sidebar
 *     Menu items
 *   Main Container
 *     Buttons List
 *     Video Container
 *     Video Card
 * 
 * 
 */
export default App;
