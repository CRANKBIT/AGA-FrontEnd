// External imports
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'

// Local imports
import App from './app/router'
import reportWebVitals from './utils/web-vitals'
import './styles/main.css'
import { store } from './app/store'

const htmlRoot = document.getElementById('root') as HTMLElement
const reactRoot = ReactDOM.createRoot(htmlRoot)

reactRoot.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

if (process.env.REACT_APP_REPORT_WEB_VITALS === 'true') {
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // eslint-disable-next-line no-console
  reportWebVitals(console.log)
}
