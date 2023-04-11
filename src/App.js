import logo from './logo.svg';
import './index.css'
import { AppProvider } from './providers/app';
import { Layout } from './components/Layout/Layout';
import { HomeProduct } from './features/products/HomeProducts';


function App() {
  return (
    <AppProvider>
      <Layout>
        <HomeProduct />
      </Layout>
    </AppProvider>
  );
}

export default App;
