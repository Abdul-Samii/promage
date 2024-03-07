import { BrowserRouter, Route, Routes,  } from "react-router-dom";


import ProjectsContextContainer from "./contexts/ProjectsContext";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";

const App = () => {
  return (
    <BrowserRouter>
      <ProjectsContextContainer>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/tasks/:id" element={<Tasks />} />
        </Routes>
      </ProjectsContextContainer>
    </BrowserRouter>
  )
}
export default App;
