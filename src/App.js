import { RouterProvider } from 'react-router';
import './App.css';
import { routers } from './Pages/Routers/Router/Router';

function App() {
  return (
    <div className=''>
      <div className="max-w-[1400px] mx-auto">
        <RouterProvider router={routers} />
      </div>
    </div>
  );
}

export default App;
