import './index.css'
import { AppProvider } from './providers/app';
import { Layout } from './components/Layout/Layout';
import { AppRoutes } from './Routes/router';


function App() {
  return (
    <AppProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppProvider>
  );
}

export default App;
