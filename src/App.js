import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home";
import CardPage from "./pages/cardPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":cardId" element={<CardPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
