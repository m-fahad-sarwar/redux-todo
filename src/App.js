import './App.css';
import Home from './pages/Home';
import CompletedPage from './pages/CompletedPage'
import AssignedToMe from "./pages/AssignedToMe";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Task from './pages/Task'
function App() {

  // const [menuHandeler, setMenuHandeler] = useState(true)
  return (
    <div className="App">
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="completed" element={<CompletedPage />} />
      <Route path="assigned" element={<AssignedToMe />} />
      <Route path="task" element={<Task />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
