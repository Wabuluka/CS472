import { useCallback, useEffect, useState } from "react";
import { ProductListComponent } from "./components/ProductsListComponent";
import { products } from "./data/products";

function App() {
  const [productList, setProductList] = useState(products);

  const getProducts = useCallback(() => {
    setProductList(products);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return <ProductListComponent products={productList} />;
}

export default App;
