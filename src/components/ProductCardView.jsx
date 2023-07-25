/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export const ProductCardView = ({handler, id, name, description, price}) => {

  const navigate = useNavigate();


  const onAddProduct = (prodcut) => {
    console.log(prodcut);
    handler(prodcut);
    //al dar click en agregar se ira a la pestaña carro de compra
    navigate('/cart');
    //al dar click en agregar se ira a la pestaña catalogo
    // navigate('/cart');

  }
  return (
    <>
    <div className="card">
            <div className="card-body">
              <h5 className="card-title">{name} </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"> $ {price}</p>
              <button className="btn btn-primary"
              onClick={() => onAddProduct({id, name, description, price})}>Agregar</button>

            </div>
          </div>
    </>
  )
}
