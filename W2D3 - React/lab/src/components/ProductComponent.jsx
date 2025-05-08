import { useState } from "react";

export const ProductComponent = ({ name, price, inStock }) => {
  const [status, setStatus] = useState(inStock);
  return (
    <div>
      <h3 style={{ color: status ? "green" : "red" }}>{name}</h3>
      <p>{price}</p>

      <span style={{ color: status ? "blue" : "red" }}>
        {status ? "True" : "False"}
      </span>
      <button onClick={() => setStatus(!status)}>
        {status ? "True" : "False"}
      </button>
    </div>
  );
};
