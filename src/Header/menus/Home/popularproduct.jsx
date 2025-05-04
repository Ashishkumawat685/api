import React, { useState } from "react";
import { Product } from "./ProductsArray";
import { Quantity } from "./ProductQuantity";

function PopularProduct() {
  return (
    <>
      <section class="popular_Product">
        <div class="popular_content">
          <div class="popular_heading">
            <h1>Popular products</h1>
          </div>
          <div class="popular_menu">
            <ul>
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Milk &amp; Dairies</a>
              </li>
              <li>
                <a href="#">Pet Foods</a>
              </li>
              <li>
                <a href="#">Meat</a>
              </li>
              <li>
                <a href="#">Vegetables</a>
              </li>
              <li>
                <a href="#">Fruits</a>
              </li>
            </ul>
          </div>
          <div class="popular_items">
            {Product.map((popular) => {
              return (
                <>
                  <div class="popular_item_box">
                    <h5 class="Head_new">New</h5>
                    <div class="item_box_img">
                      <img src={popular.thumbnail} />
                    </div>
                    <div class="item_box-text">
                      <h6>snack</h6>
                      <h4>{popular.title}</h4>

                      <div class="item_box-rating">
                        <i class="fa-solid fa-star">⭐⭐⭐⭐☆</i>

                        <span>{popular.rating}</span>
                        <h3>coe</h3>
                      </div>
                      <Quantity price={popular.price} />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export { PopularProduct };
