import React from "react";
import "./home.css";
import Product from "../Product/Product";

const Home = () => {



  return (
    <>
      <div className="home">
        <div className="homeContainer">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
              alt="amazonBanner"
              className="homeImage"
            />


          <div className="homeRow" >
            <Product
              title="Amkette Evo Fox Fireblade Gaming Wired Keyboard with LED Backlit, 19 Anti-Ghosting Keys, and Windows Lock Key (TKL, Black)"
              price={999}
              img="https://m.media-amazon.com/images/I/71CjJ3+bVoL._AC_UY218_.jpg"
              rating={5}
              key='1'
              id='1'
            />
            <Product
              title="Dell XPS 9700 17Inch FHD Display Laptop (10th Gen i7-10750H / 16 GB / 1TB SSD / 4 GB GTX Graphics/ Win 10 + MS Office / Silver) D560027WIN9S"
              price={234990}
              img="https://m.media-amazon.com/images/I/61EFSUw+BrL._AC_UY218_.jpg"
              rating={4}
              key='2'
              id='2'
            />
            {/* Product */}
          </div>


          <div className="homeRow" >
            {/* Product */}
            <Product
              title="iPad Mini 7.9 inch Wi-Fi+Cellular  64 GB Space Grey+Apple Pencil (1st Generation)"
              price={54395}
              img="https://m.media-amazon.com/images/I/81ABZaXfPsL._AC_UY218_.jpg"
              rating={3}
              key='3'
              id='3'
            />

            <Product
              title="Thor Hammer Keychain"
              price={99}
              img="https://m.media-amazon.com/images/I/41c3prMUnjL._AC_UL320_.jpg"
              rating={3}
              key='4'
              id='4'
            />

            <Product
              title="Clean Code"
              price={799}
              img="https://m.media-amazon.com/images/I/41zoxjP9lcL._AC_UY218_.jpg"
              rating={4}
              key='5'
              id='5'
            />
          </div>


          <div className="homeRow" >
            <Product
              title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
              price={154990}
              img="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg"
              rating={5}
              key='6'
              id='6'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
