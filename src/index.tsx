import ReactDOM from 'react-dom/client';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import App from './app/App';
import 'shared/config/i18n/i18n';
import './app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StoreProvider>
);
