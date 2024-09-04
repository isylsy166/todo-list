import './App.css';
import TodoContent from './component/TodoContent';
import TodoFrame from './component/TodoFrame';
import TodoTitle from './component/TodoTitle';
import { CaptureProvicer } from './context/CaptureContext.jsx';
import { DarkmodeProvider } from './context/DarkmodeContext.jsx';
import { StatusProvider } from './context/StatusContext.jsx';

function App() {



  return (
    <CaptureProvicer>
      <DarkmodeProvider>
          <TodoFrame>
            <StatusProvider>
              <TodoTitle/>
              <TodoContent/>
            </StatusProvider>
          </TodoFrame>
      </DarkmodeProvider>
    </CaptureProvicer>
  );
}

export default App;
