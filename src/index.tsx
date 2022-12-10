import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ResultContextProvider from './Store/ResultContextProvider';
import { AuthContextProvider } from './Store/AuthContext';
import ThemeContextProvider from './Store/ThemeContextprovider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <ThemeContextProvider>
  <AuthContextProvider>
  <ResultContextProvider>
    <App />
  </ResultContextProvider>
  </AuthContextProvider>
  </ThemeContextProvider>
  </BrowserRouter>
);


