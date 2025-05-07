import { useState } from "react";
import { ProductListComponent } from "./components/ProductsListComponent";
import { products } from "./data/products";

function App() {
  const [productList, setProductList] = useState(products);

  return <ProductListComponent products={productList} />;
}

export default App;
