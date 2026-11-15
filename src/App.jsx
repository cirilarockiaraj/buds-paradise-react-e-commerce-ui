import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import bannerImage from "./assets/banner.png";
import Products from "./components/Products";
import products_list from "./data/product.json";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className="container">
      <Header navigations={products_list.navigations} cart={cart} />
      <div className="body-container">
        {/* Banner */}
        <Banner bannerImage={bannerImage}/>
        <br />
        <div className="category-container">
          <div className="category-head">
            <h2>Shop by Category</h2>
            <a href="#">
              View All <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="category-body">
            {products_list.shop_by_category.map((item, index) => (
              <Category key={index} product={item} />
            ))}
          </div>
        </div>
        <br />
        <div className="category-container">
          <div className="category-head">
            <h2>Featured Products</h2>
            <a href="#">
              View All <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="product-body">
            {products_list.feature_products.map((item) => (
              <Products product={item} cart={cart} setCart={setCart} />
            ))}
          </div>
        </div>
      </div>
      <Footer navigations={products_list.navigations}/>
    </div>
  );
}

export default App;
