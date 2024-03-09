import React from "react";
import "./menu.css";


function BookPageCard({ key, name }) {
  // console.log(image,name)
  return (
    <div className="menuItem">
        {/* <div style={{ backgroundImage: `url(${image})` }}> </div> */}
        <h1> {name} </h1>
        {/* <p> ${price} </p> */}
        <p>writer</p>
        <p>publisher</p>
    </div>
  );
}

export default BookPageCard;