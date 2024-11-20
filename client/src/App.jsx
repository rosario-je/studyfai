import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages import
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Notes from "./Pages/Notes";
import Quizzes from "./Pages/Quizzes";
import Signin from "./Pages/Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/quizzes" element={<Quizzes />} />
      </Routes>
    </div>
  );
}

export default App;
