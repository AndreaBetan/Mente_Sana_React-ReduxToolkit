import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles.css'
import { AppRoutes } from './AppRoutes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

