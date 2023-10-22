import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer";
import Filter from "./components/Filter";



function App() {
  return (
    <div className="bg-slate-950 overflow-y-auto">
    <Navbar/>
    <Filter/>
    <Dashboard/>
    <Footer/>
    </div>
  );
}

export default App;
