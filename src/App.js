import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Index from "./pages/index.js";
import About from './pages/about.js';
import Service from './pages/service';
import Contact from './pages/contact'
import Project from './pages/project'
import OurTeam from "./pages/Pages/ourTeam.js";
import Test from "./pages/Pages/test.js"; 
 
import NotFound from "./pages/Pages/notFound.js";

export default function App() {
  return (
    
   <>
   <Router>
    <Routes>
      <Route path="/" element = {<Index />} />
      <Route path="/about" element = {<About />} />
      <Route path ="/service" element={<Service />} />
      <Route path ="/contact" element={<Contact />} />
      <Route path = "/project" element = {<Project />} />
      <Route path="/ourTeam" element = {<OurTeam />} /> 
      <Route path="/test" element = {<Test />} /> 
      <Route path="/notFound" element={<NotFound />} /> 
      </Routes>
   </Router>
   </>
      
  )
} 
 