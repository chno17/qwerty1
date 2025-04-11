import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 컴포넌트 이름을 대문자로 고쳐야 한다!
function Home() {
  return <p>home</p>;
}

function Sub() {
  return <p>sub</p>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">home</Link> 
        <Link to="/sub">sub</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </Router>
  );
}

export default App;
