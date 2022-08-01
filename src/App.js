import logo from './logo.svg';
import './App.css';
import ProductList from './features/product/ProductList';
import data from './products.json'

function App() {
  return (
    <div>
      <ProductList data={data.products}></ProductList>
    </div>
  );
}

export default App;
