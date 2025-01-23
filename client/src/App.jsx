import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages import
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Notes from "./Pages/Notes";
import Quizzes from "./Pages/Quizzes";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import SummarizeNote from "./Pages/SummarizeNote";
import NotePage from "./Pages/NotePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/summarize" element={<SummarizeNote />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/notes/create" element={<NotePage />} />
      </Routes>
    </div>
  );
}

export default App;
