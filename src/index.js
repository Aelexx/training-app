import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDom from 'react-dom/client';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cheap from "./pages/Cheap";
import Speak from "./pages/Speak";
import Watch from "./pages/Watch";
import Custom from "./pages/Custom";
import Hint from "./pages/Hint";
import Safe from "./pages/Safe";
import NoPages from "./pages/NoPages";
import "./index.css";
import "./Navigation.css";



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="cheap" element={<Cheap />} />
          <Route path="speak" element={<Speak />} />
          <Route path="watch" element={<Watch />} />
          <Route path="custom" element={<Custom />} />
          <Route path="hint" element={<Hint />} />
          <Route path="safe" element={<Safe />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
