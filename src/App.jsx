import './App.css';
import TodoContent from './component/TodoContent';
import TodoFrame from './component/TodoFrame';
import TodoTitle from './component/TodoTitle';

function App() {
  return (
    <TodoFrame>
      <TodoTitle/>
      <TodoContent/>
    </TodoFrame>
  );
}

export default App;
