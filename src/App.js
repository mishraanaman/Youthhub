import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Shorts from './components/Shorts';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },{
        path: "/shorts",
        element: <Shorts/>
      },
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <RouterProvider router={appRouter} />
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
