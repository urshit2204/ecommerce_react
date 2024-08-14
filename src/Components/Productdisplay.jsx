import React from 'react'
import star_icon from "../image/star_icon.png"
import star_dull_icon from "../image/star_dull_icon.png"

const Productdisplay = (props) => {
    const { product } = props;
    return (
        <div>
            <div className="productdisplay">
                <div className="product-left">
                    <div className="product-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-img">
                        <img className='product-main-img' src={product.image} alt="" />
                    </div>
                </div>
                <div className="product-right">
                    <h1>{product.name}</h1>
                    <div className="product-right-star">
                        <img src={star_icon.image} alt="" />
                        <img src={star_icon.image} alt="" />
                        <img src={star_icon.image} alt="" />
                        <img src={star_icon.image} alt="" />
                        <img src={star_dull_icon.image} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="product-right-prices">
                        <div className="product-right-prices-old">${product.old_price}</div>
                        <div className="product-right-prices-new">${product.new_price}</div>
                    </div>
                    <div className="product-right-disxription">
                        Achieve your personal best with our high-performance running shoes. Designed with advanced cushioning and support, they provide unparalleled comfort and stability for every stride, making them the perfect choice for serious runners.
                    </div>
                    <div className="product-right-size">
                        <h1>Select Size</h1>
                        <div className="product-right-size">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button>ADD TO CART</button>
                    <p className='product-right-category'><span>Category :</span>Women , T-Shirt , Crop Top</p>
                    <p className='product-right-category'><span>Tags :</span>Modern , Latest</p>
                </div>
            </div>
        </div>
    )
}

export default Productdisplay
