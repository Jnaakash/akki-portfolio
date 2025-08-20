import Navbar from "./components/Navbar"
import Intro from "./components/intro"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
    return(
        <>
        <div className="App"> 
           <Navbar/>
           <Intro/>
           <About/>
           <Project/>
           <Contact/>r
           <Footer/>
        </div>
        </>
    );
}

export default App;