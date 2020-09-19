import React from "react";
import { Link } from "react-router-dom";

const ShowProducts = (props) => {
  const data = props.data;

  //DELETE FUNCTION

  const deleteProduct = async (id) => {
    let respuesta = window.confirm(
      `Are you sure you wanna delete the product ${data.product_name}?? `
    );
    if (respuesta) {
      try {
        const response = await fetch(
          `/admin/products/${id}`,
          {
            method: "DELETE",
          }
        );
        console.log(response)
      } catch (error) {
        console.error(error);
      }
      props.refresh(Math.random());
    }
  };

  return (
    <tr>
      <th>{data.id}</th>
      <th>{data.product_name}</th>
      <th>{data.category}</th>
      <th>{data.unit_price}</th>
      <th>
        <img src={`${data.image}`} alt="" />
      </th>
      <th>{data.description}</th>

      <th>
        <Link to={`/admin/products/update/${data.id}`}>
          <button className="button-update">UPDATE</button>
        </Link>
      </th>
      <th>
        <button
          onClick={() => deleteProduct(data.id)}
          className="button-delete"
        >
          DELETE
        </button>
      </th>
    </tr>
  );
};

export default ShowProducts;
