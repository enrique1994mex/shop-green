import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StoreProvider } from './context/StoreContext.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StoreProvider>
			<App />
		</StoreProvider>
	</React.StrictMode>
)
