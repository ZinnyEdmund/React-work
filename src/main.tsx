import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { AuthProvider } from './context/AuthContext';

// Get the root element safely
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}