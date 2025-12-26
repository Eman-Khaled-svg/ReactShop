import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { ProductProvider } from './context/ProductContext';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './all.min.css'

createRoot(document.getElementById('root')).render(
 <ProductProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</ProductProvider>
)
