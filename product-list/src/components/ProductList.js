import React, { useState } from 'react';
import './style.css';

function ProductList() {
  
  return (
    <div>

      <list id="product-items">
       <div className="card">
           <img src="https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className="card-text">Elegant designed Fiber Plant...</h1>
                  <p className="text">Decoration</p>
                </div>
                   <div className="star">
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa-star-half" >(245)</i>
                   </div>
                   <div className="product-price">
                    <p> ${13.5}</p>
                    <p><s>${19.5}</s></p>
                    <span style={{color : "green"}}>{32}% off</span>
                   </div>
        </div>
       <div className="card">
           <img src="https://img.freepik.com/premium-psd/foil-coffee-bag-packaging-mockup_439185-1875.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className="card-text">Coffee Powder Better Morn...</h1>
                  <p className="text">Decoration</p>
                </div>
                <div className="star">
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa-star-half" >(45)</i>
                   </div>
                   <div className="product-price">
                    <p className="price"> ${43.5}</p>
                   </div>
        </div>
       <div className="card" >
           <img src="https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className="card-text">Decrotative insta camera toy...</h1>
                  <p className="text">Decoration</p>
                </div>
                <div className="star">
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa-star-half" >(245)</i>
                   </div>
                   <div className="product-price">
                    <p> ${13.5}</p>
                    <p><s>${19.5}</s></p>
                    <span style={{color : "green"}}>{32}% off</span>
                   </div>
        </div>
       </list>
       <list-1 id="product-items">
       <div className="card">
           <img src="https://images.pexels.com/photos/842155/pexels-photo-842155.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className="card-text">Elegant designed Fiber Plant...</h1>
                  <p className="text">Decoration</p>
                </div>
                   <div className="star">
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa-star-half" >(245)</i>
                   </div>
                   <div className="product-price">
                    <p> ${13.5}</p>
                    <p><s>${19.5}</s></p>
                    <span style={{color : "green"}}>{32}% off</span>
                   </div>
        </div>
       <div className="card">
           <img src="https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className="card-text">Coffee Powder Better Morn...</h1>
                  <p className="text">Decoration</p>
                </div>
                <div className="star">
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa-star-half" >(245)</i>
                   </div>
                   <div className="product-price">
                    <p> ${13.5}</p>
                    <p><s>${19.5}</s></p>
                    <span style={{color : "green"}}>{32}% off</span>
                   </div>
        </div>
       <div className="card" >
           <img src="https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className="card-text">Decrotative insta camera toy...</h1>
                  <p className="text">Decoration</p>
                </div>
                <div className="star">
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa-star-half" >(245)</i>
                   </div>
                   <div className="product-price">
                    <p> ${13.5}</p>
                    <p><s>${19.5}</s></p>
                    <span style={{color : "green"}}>{32}% off</span>
                   </div>
        </div>
       </list-1>

       <list-2 id="product-items">
       <div className="card">
           <img src="https://images.pexels.com/photos/672706/pexels-photo-672706.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className="card-text">Elegant designed Fiber Plant...</h1>
                  <p className="text">Decoration</p>
                </div>
                   <div className="star">
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa-star-half" >(45)</i>
                   </div>
                   <div className="product-price">
                    <p className="price"> ${43.5}</p>
                   
                   </div>
        </div>
       <div className="card">
           <img src="https://img.freepik.com/premium-psd/foil-coffee-bag-packaging-mockup_439185-1875.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className="card-text">Coffee Powder Better Morn...</h1>
                  <p className="text">Decoration</p>
                </div>
                <div className="star">
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa-star-half" >(45)</i>
                   </div>
                   <div className="product-price">
                    <p className="price"> ${43.5}</p>
                   </div>
        </div>
       <div className="card" >
           <img src="https://images.pexels.com/photos/842155/pexels-photo-842155.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h1 className="card-text">Decrotative insta camera toy...</h1>
                  <p className="text">Decoration</p>
                </div>
                <div className="star">
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa fa-star"></i>
                    <i class="fa-solid fa-star-half" >(245)</i>
                   </div>
                   <div className="product-price">
                    <p> ${13.5}</p>
                    <p><s>${19.5}</s></p>
                    <span style={{color : "green"}}>{32}% off</span>
                   </div>
        </div>
       </list-2>
    </div>
  )
}

export default ProductList
