import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="chats/:chat_uid" element={<Home />} />
          <Route path="chats/new" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;