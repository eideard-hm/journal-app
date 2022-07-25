import AppRouter from './router/AppRouter';
import { AppTheme } from './theme';

const App = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};

export default App;
