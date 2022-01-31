import { Route, Routes } from "react-router-dom";


// Import Components
import Header from "./Header/Header";



export default function App() {
  return (
<Routes>
  <Route path="/" element={<Header/>}  />
</Routes>
  );
}

 
