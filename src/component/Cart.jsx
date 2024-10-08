import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state); // Redux state'dan savatcha mahsulotlarini oling
  const dispatch = useDispatch(); // Dispatch qilish uchun

  const handleButton = (product, actionType) => {
    dispatch({ type: actionType, payload: product });
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <h3>Savatchangiz bo'sh</h3> // Savatcha bo'sh bo'lsa, xabar ko'rsatish
      ) : (
        cartItems.map((product) => (
          <div className="row" key={product.id}>
            <div className="col-md-4">
              <img src={product.image} alt={product.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className='lead fw-bold'>
                {product.qty} X ${product.price} = $
                {product.qty * product.price}
              </p>
              <button className='btn btn-outline-dark me-4' onClick={() => handleButton(product, 'DELITEM')}>
                <i className="fa fa-minus"></i>
              </button>
              <button className="btn btn-outline-dark" onClick={() => handleButton(product, 'ADDITEM')}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
