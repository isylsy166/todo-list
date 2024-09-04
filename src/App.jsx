import './App.css';
import TodoContent from './component/TodoContent';
import TodoFrame from './component/TodoFrame';
import TodoTitle from './component/TodoTitle';
import { CaptureProvicer } from './context/CaptureContext.jsx';
import { DarkmodeProvider } from './context/DarkmodeContext.jsx';
import { GroupProvider } from './context/GroupContext.jsx';
import { StatusProvider } from './context/StatusContext.jsx';

function App() {



  return (
    <CaptureProvicer>
      <DarkmodeProvider>
        <GroupProvider>
          <TodoFrame>
            <StatusProvider>
              <TodoTitle/>
              <TodoContent/>
            </StatusProvider>
          </TodoFrame>
        </GroupProvider>
      </DarkmodeProvider>
    </CaptureProvicer>
  );
}

export default App;
