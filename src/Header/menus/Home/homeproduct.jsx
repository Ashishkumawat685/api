import React, { useState } from "react";
import { Product } from "./ProductsArray";
import { Link } from "react-router-dom";
const HomeProducts = () => {
  const [allproduct, setallproduct] = useState(Product);
  const [filterproduct, setfilterproduct] = useState(allproduct);

  const all_value = () => {
    setfilterproduct(allproduct);
  };

  const menu_value = (e) => {
    const searchvalue = e.target.innerText;
    const searchdata = allproduct.filter(
      (items) => items.category.toLowerCase() === searchvalue.toLowerCase()
    );
    // console.log(items.category);
    if (searchvalue) {
      setfilterproduct(searchdata);
    } else {
      setfilterproduct(allproduct);
    }
  };

  return (
    <>
      <section className="HomeProducts">
        <div className="ProductsMenu">
          <ul>
            <li onClick={all_value}>All</li>
            <li onClick={menu_value}>beauty</li>
            <li onClick={menu_value}>fragrances</li>
            <li onClick={menu_value}>furniture</li>
            <li onClick={menu_value}>groceries</li>
          </ul>
        </div>
        <div className="categories">
          {filterproduct.slice(0, 10).map((Product_data) => {
            return (
              <>
                <div className="category">
                  <img src={Product_data.thumbnail} alt="Men's Jeans" />
                  <h3>{Product_data.title}</h3>
                  {/* <h3>{Product_data.category}</h3> */}
                  <h3>
                    Rating:
                    <span
                      style={{
                        color: Product_data.rating >= 3 ? "green" : "red",
                      }}
                    >
                      {Product_data.rating}
                    </span>
                  </h3>
                  <h3>{Product_data.warrantyInformation}</h3>
                  <p className="category_description">
                    {Product_data.description.split(" ").slice(0, 20).join(" ")}
                  </p>
                  <Link to={`/ProductDetails/${Product_data.id}`}>
                    <button>More Details</button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export { HomeProducts };
