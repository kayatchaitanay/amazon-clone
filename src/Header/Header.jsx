import React from "react";
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = ()=>{
    if (user) {
      auth.signOut();
    }
  }

  return (
    <>
       <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazonLogo"
          className="headerLogo"
        />
      </Link>

        <div className="headerSearch">
          <input className="headerSearchBar" type="text" />
          <SearchIcon className="headerSearchIcon" />
        </div>

        <div className="headerNav">
          <Link to={!user && '/login'} className="headerOption" onClick={handleAuthentication}>
            <span className="headerOptionLine1">{user ? user.email : 'Hello Guest'}</span>
            <span className="headerOptionLine2">{user ? 'SignOut' : 'SignIn'}</span>
          </Link>

          <Link to='/orders' className="headerOption">
            <span className="headerOptionLine1">Return</span>
            <span className="headerOptionLine2">& Orders</span>
          </Link>

          <div className="headerOption">
            <span className="headerOptionLine1">your</span>
            <span className="headerOptionLine2">Prime</span>
          </div>

          <Link to="/checkout" className="headerBasketOption">
            <ShoppingCartIcon className="headerBasketIcon" />
            <span className="headerOptionLine2 headerBasketCount">{basket?.length}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
