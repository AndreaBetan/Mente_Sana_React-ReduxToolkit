import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from './store'

import './styles.css'
import { AppRoutes } from './AppRoutes';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  </Provider>
)

