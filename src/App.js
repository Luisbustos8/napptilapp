import logo from './logo.svg';
import './index.css'
import { AppProvider } from './providers/app';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <AppProvider>
      <Layout>
        
      </Layout>
    </AppProvider>
  );
}

export default App;
