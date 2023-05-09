import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import SideNavbar from './components/SideNavbar';
import SortBy from './components/Sorting';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SortBy/>
      <SideNavbar/>
     <ProductList/>
    </div>
  );
}

export default App;
