import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/theme.css';
import './styles/global.css';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouters';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter></MainRouter>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
