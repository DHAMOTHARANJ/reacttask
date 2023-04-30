import React from 'react';
import './App.css';

function App() {
  const cartData = [
    {
      access : "Free",
      price : "$0",
      month : "/month",
      userCount : "✔ Single User",
      check : "✔",
      nocheck : "✖",
      storage : "✔ 5GB Storage",
      line3 : "✔ Unlimited Public Projects",
      line4 : "✔ Community Access",
      line5 : "✖ Unlimited Private Projects",
      line6 : "✖ Dedicated Phone Support",
      line7 : "✖ Free Subdomain",
      line8 : "✖ Monthly Status Reports"
    },
    {
      access : "PLUS",
      price : "$9",
      month : "/month",
      userCount : "✔ 5 User",
      check : "✔",
      nocheck : "✖",
      storage : "✔ 50GB Storage",
      line3 : "✔ Unlimited Public Projects",
      line4 : "✔ Community Access",
      line5 : "✔ Unlimited Private Projects",
      line6 : "✔ Dedicated Phone Support",
      line7 : "✔ Free Subdomain",
      line8 : "✖ Monthly Status Reports"
    },
    {
      access : "PRO",
      price : "$49",
      month : "/month",
      check : "✔",
      nocheck : "✖",
      userCount : "✔ Unlimited Users",
      storage : "✔ 150GB Storage",
      line3 : "✔ Unlimited Public Projects",
      line4 : "✔ Community Access",
      line5 : "✔ Unlimited Private Projects",
      line6 : "✔ Dedicated Phone Support",
      line7 : "✔ Unlimited Free Subdomains",
      line8 : "✔ Monthly Status Reports"
    }
  ]
   
  return (
    <div className="App">
      {
        cartData.map((items)=>(
          <Cart
          access = {items.access}
          price = {items.price}
          month = {items.month}
          userCount = {items.userCount}
          storage = {items.storage}
          line3 = {items.line3}
          line4 = {items.line4}
          line5 = {items.line5}
          line6 = {items.line6}
          line7 = {items.line7}
          line8 = {items.line8}
          check = {items.check}
          nocheck = {items.nocheck}
          />
        ))
      }
    </div>
  );
}

export default App;
function Cart(props) {
  return(
    <div className='bglayer'>
    <div className='cartContent'>
      <div id='header'>
      <h5 id='access'>{props.access}</h5>
      <div id='price'>{props.price}<span>{props.month}</span></div>
      <hr></hr>
      </div>
      <div id='accessability'>
      <div id="lines">{props.userCount}</div>
      <div id="lines">{props.storage}</div>
      <div id="lines">{props.line3}</div>
      <div id="lines">{props.line4}</div>
      <div id="lines">{props.line5}</div>
      <div id="lines">{props.line6}</div>
      <div id="lines">{props.line7}</div>
      <div id="lines">{props.line8}</div>
      </div>
      <div id='button'><button id="btn">BUTTON</button></div>
    </div>
    </div>
  )
}