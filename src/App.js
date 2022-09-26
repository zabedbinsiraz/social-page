import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import CommunitySingle from "./social-pages/CommunitySingle";


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CommunitySingle />}>
      </Route>
      
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
