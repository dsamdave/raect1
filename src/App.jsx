
import "./App.css";

import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import Navigation from "./Components/Navigation";
import { Summary } from "./Components/Summary";
import FormPage from "./Pages/Form";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const App = () => {





  return (

    <div >

      <h1>Header</h1>
      <Navigation />

      <Summary />

      <Routes>

        <Route  path="/" element={<Home />}  />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />


      </Routes> 
      <ToastContainer position="bottom-right" />  

      <h3>Footer</h3>
    </div>
  )
};

export default App;
