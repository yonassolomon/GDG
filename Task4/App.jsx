import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homee from "./taskk4/Homee";
import About from "./taskk4/About";
import Contact from "./taskk4/Contact";
import Notfound from "./taskk4/404page";
import Homee from "./taskk4/taskk4.1/home";
import About from "./taskk4/taskk4.1/about";
import Contactt from "./taskk4/taskk4.1/contact";

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homee/>} />
          <Route path="/aabout-us" element={<About/>}/>
          <Route path="contact-us/:id" element={<Contact/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App
