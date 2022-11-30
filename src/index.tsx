import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ResultContextProvider from './Store/ResultContextProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <ResultContextProvider>
    <App />
  </ResultContextProvider>
  </BrowserRouter>
);


