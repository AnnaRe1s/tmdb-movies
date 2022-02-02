import { Route, Routes } from "react-router-dom";
import Details from "./Details/PageDetails";

// Import Components
import Header from "./Header/Header";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
