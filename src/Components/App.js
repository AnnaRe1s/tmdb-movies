import { Route, Routes } from "react-router-dom";

// Import Components
import Header from "../Pages/Header";
import PageDetails from "../Pages/PageDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/details/:id" element={<PageDetails />} />
    </Routes>
  );
}
