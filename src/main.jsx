
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextApi } from './components/ContextApi.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import firebase from 'firebase/compat/app'
createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <ContextApi>
      <App />
    </ContextApi>
  </Provider>
)

