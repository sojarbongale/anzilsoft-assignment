import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstAssignment from "./components/first-assignment/FirstAssignment";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SecondAssignment from "./components/second-assignment/SecondAssignment";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FirstAssignment />} />
        <Route path="/first-assignment" element={<FirstAssignment />} />
        <Route path="/second-assignment" element={<SecondAssignment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
