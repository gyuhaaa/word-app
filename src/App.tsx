import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DailyWord from "./pages/DailyWord";
import Home from "./pages/Home";
import AnotherDailyWord from "./pages/AnotherDailyWord";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/another-daily-word/:day" element={<AnotherDailyWord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
