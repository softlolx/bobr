import ReactDOM from 'react-dom/client';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import { AppRouter } from 'app/providers/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <AppRouter>
      <App />
    </AppRouter>
  </ThemeProvider>
);
