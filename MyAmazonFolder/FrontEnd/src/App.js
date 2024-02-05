import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Registration from "./Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import LoginPageAmz from "./LoginPageAmz";
import { YourAccount } from "./YourAccount";
import { Address } from "./Address";
import { AddAddress } from "./AddAddress";
import { Orders } from "./Orders";
import { Security } from "./Security";
import Headphones from "./Headphones";
import { Appliances } from "./Appliances";
import HomeDecor from "./HomeDecor";
import HomeNeeds from "./HomeNeeds";
import AmazonBrands from "./AmazonBrands";
import TVs from "./TVs";
import FriendlyFashion from "./FriendlyFashion";
import Automotive from "./Automotive";
import SearchRes from "./SearchRes";
import ContextProvider from "./ContextProvider";
import SearchPro from "./SearchPro";
import IndividualPro from "./IndividualPro";
import Cart from "./Cart";
import ViewCart from "./ViewCart";
import Wishlist from "./Wishlist";
import Header from "./Header";
import Hearder2 from "./Hearder2";
import AllCategories from "./AllCategories";
import CustomerService from "./CustomerService";
import PrimeMembership from "./PrimeMembership";
import Profile from "./Profile";
import JoinPrime from "./JoinPrime";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/LoginPageAmz" element={<LoginPageAmz />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/YourAccount" element={<YourAccount />} />
            <Route path="/Address" element={<Address />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Security" element={<Security />} />
            <Route path="/AddAddress" element={<AddAddress />} />
            <Route path="/Headphones" element={<Headphones />} />
            <Route path="/Appliances" element={<Appliances />} />
            <Route path="/HomeDecor" element={<HomeDecor />} />
            <Route path="/HomeNeeds" element={<HomeNeeds />} />
            <Route path="/AmazonBrands" element={<AmazonBrands />} />
            <Route path="/TVs" element={<TVs />} />
            <Route path="/FriendlyFashion" element={<FriendlyFashion />} />
            <Route path="/Automotive" element={<Automotive />} />
            <Route path="/SearchRes" element={<SearchRes />} />
            <Route path="/SearchPro" element={<SearchPro />} />
            <Route path="/IndividualPro" element={<IndividualPro />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/ViewCart" element={<ViewCart />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/Hearder2" element={<Hearder2 />} />
            <Route path="/AllCategories" element={<AllCategories />} />
            <Route path="/CustomerService" element={<CustomerService />} />
            <Route path="/PrimeMembership" element={<PrimeMembership />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/JoinPrime" element={<JoinPrime />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
