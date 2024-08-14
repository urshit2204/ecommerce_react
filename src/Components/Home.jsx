import React from 'react'
import '../Components/home.css'
import hand from '../image/hand.png'
import arrow_icon from '../image/arrow.png'
import bannerimg from '../image/banner-img.png'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [cate, setCate] = useState([]);
  const [filteredCate, setFilteredCate] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
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
  return (
    <div>
      <div className='hero'>
        <div className="hero-left">
          <h2>NEEW ARRIVALS ONLY</h2>
          <div>
            <div className='hand-icon'>
              <p>new</p>
              <img src={hand} alt='' />
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
          </div>
          <div className='latest-btn'>
            <div>
              Latest Collection
            </div>
            <img src={arrow_icon} alt='' />
          </div>
        </div>
        <div className="hero-right">
          <img className='home-img' src={bannerimg} alt='' />
        </div>
      </div><hr /><br />
      <div className='collec'><h2>OUR COLLECTION</h2></div>
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
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home;
