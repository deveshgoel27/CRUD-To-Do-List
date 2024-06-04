import './App.css';
import { ToDoProvider } from './component/ToDoContext/ToDoContext';
import ToDoList from './component/ToDoList';

function App() {
  return (
    <>
        <ToDoProvider>
        <ToDoList/>
        </ToDoProvider>
    </>
  );
}

export default App;
