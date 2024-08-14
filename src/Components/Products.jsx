import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./products.css";
import banner from '../image/p-banner.jpg';
import { Link } from 'react-router-dom';

const Products = () => {
  const [cate, setCate] = useState([]);
  const [filteredCate, setFilteredCate] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setCate(res.data);
        setFilteredCate(res.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  const filterItem = (category) => {
    if (category === 'All') {
      setFilteredCate(cate);
    } else {
      const updatedList = cate.filter((curElem) => curElem.category === category);
      setFilteredCate(updatedList);
    }
  };

  const addToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, { ...item, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div className='img-product'>
        <img src={banner} alt=''/>
      </div>
      <div className='collec'><h2>OUR COLLECTION BEST ITEM</h2></div><hr />
      <div className="buttons">
        <button className="nav-items" onClick={() => filterItem("All")}>All</button>
        <button className="nav-items" onClick={() => filterItem("men's clothing")}>Men's Clothing</button>
        <button className="nav-items" onClick={() => filterItem("women's clothing")}>Women's Clothing</button>
        <button className="nav-items" onClick={() => filterItem("jewelery")}>Jewelery</button>
        <button className="nav-items" onClick={() => filterItem("electronics")}>Electronics</button>
      </div>
      <div className="content">
        {filteredCate.map((item, index) => (
          <div key={index} className="card">
            <span className="Products">{item.Products}</span>
            <div className="image">
              <img src={item.image} alt="Product" />
            </div>
            <hr />
            <div className='st'>
              <span className="title">{item.title.slice(0, 30)}...</span>
              <span className="price">Price: $ {item.price}</span>
            </div>
            <div className='display'>
              <Link to='/Productdisplay'><button className='btn-buy'>Detail</button></Link>
              <Link to='/Cart'><button className='btn-buy' onClick={() => addToCart(item)}>Add Cart</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
