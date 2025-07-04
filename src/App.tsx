import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { TaskContext, TaskContextProvider } from './contexts/TaskContext';

export function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}
