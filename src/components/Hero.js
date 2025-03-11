import React from "react";
import '../styles/Content.css'; 

function Header() {
    return(
<section className="hero">
<h1>Welcome to Our Hotel</h1>
<p>Experience the best hospitality in town</p>
<button><a href="/registration" >Book A Stay </a></button>
</section>
    );
}

export default Header;
