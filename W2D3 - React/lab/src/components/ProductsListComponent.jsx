import { ProductComponent } from "./ProductComponent";

export const ProductListComponent = ({ products }) => {
  console.log(products);
  return products.map((product, index) => (
    <ProductComponent {...product} key={index} />
  ));
};
