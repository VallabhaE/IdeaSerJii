import React from "react"

function Footer() {
    var year = new Date().getFullYear();
    return (
      <footer><p className='footer'>Copyright @ {year}</p></footer>
    );
  }


  export default Footer;