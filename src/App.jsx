import './App.css';
import TodoContent from './component/TodoContent';
import TodoFrame from './component/TodoFrame';
import TodoTitle from './component/TodoTitle';
import { StatusProvider } from './context/StatusContext.jsx';

function App() {
  return (
    <TodoFrame>
      <StatusProvider>
        <TodoTitle/>
        <TodoContent/>
      </StatusProvider>
    </TodoFrame>
  );
}

export default App;
