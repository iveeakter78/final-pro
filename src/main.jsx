
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Store.js'
import { ContextApi } from './components/ContextApi.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>
  </Provider>
)

