import React from "react";
import "./menu.css";


function BookPageCard({ key, name }) {
  // console.log(image,name)
  return (
    <div className="menuItem">
      <article class="information [ card ]">
<span class="tag">Top Book</span>
<h2 class="title">{name}</h2>
<p class="name">writer</p>
<p class="name">publisher</p>
<button class="button">
  <span>Add to watch</span>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
  </svg>
</button>
</article>
    </div>
  );
}

export default BookPageCard;