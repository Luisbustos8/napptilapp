import './index.css'
import { AppProvider } from './providers/app';
import { AppRoutes } from './Routes/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <AppProvider>
      <ToastContainer />
        <AppRoutes />
    </AppProvider>
  );
}

export default App;
