// components
import Header from "./components/Header/Header";
// views
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Briefcase from "./views/Briefcase/Briefcase";
import Contact from "./views/Contact/Contact";
// context
import { HeaderContextProvider } from "./components/Header/context/HeaderContextProvider";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col justify-evenly items-center text-white relative overflow-x-hidden">
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      

      <Home />
      <About />
      <Briefcase />
      <Contact />
      
    </div>
  )
}

