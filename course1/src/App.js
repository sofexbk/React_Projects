import './App.css';
import Products from './components/Products';
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import About from './components/About';
import ShowProduct from './components/ShowProduct';
import  { BrowserRouter as Router ,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
       <Navbar/>
       <Routes>  
        <Route path="/" element={<Products/>} />
        <Route path="/produit/:id/:slug" element={<ShowProduct/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>
    </Router>
    </>
  );
}
//khas dima  ikon wahd div mjmo3 fih kolchi
/// wa can add fragments import fragment wla tkhali parentheisi khawyin <> </>
// dima pascal case am3alem Navbar
export default App;
