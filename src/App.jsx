import './App.css';
import TodoContent from './component/TodoContent';
import TodoFrame from './component/TodoFrame';
import TodoTitle from './component/TodoTitle';
import { DarkmodeProvider } from './context/DarkmodeContext.jsx';
import { StatusProvider } from './context/StatusContext.jsx';

function App() {
  return (
    <DarkmodeProvider>
      <TodoFrame>
        <StatusProvider>
          <TodoTitle/>
          <TodoContent/>
        </StatusProvider>
      </TodoFrame>
    </DarkmodeProvider>
  );
}

export default App;
