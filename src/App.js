import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';

function App() {
  const appRouter = createBrowserRouter([{
    path:'/',
    element:<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>
    },{
      path:"/watch",
      element:<Watch/>
    }]
  }])
  return (
      <Provider store={store}>
        <Header/>
        <RouterProvider router={appRouter}>

        </RouterProvider>
      </Provider>
  );
}

export default App;
