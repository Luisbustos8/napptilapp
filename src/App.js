import './index.css'
import { AppProvider } from './providers/app';
import { AppRoutes } from './Routes/router';


function App() {
  return (
    <AppProvider>
        <AppRoutes />
    </AppProvider>
  );
}

export default App;
