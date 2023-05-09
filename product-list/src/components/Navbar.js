import React from 'react'
function Navbar() {
  const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUppercase();
    const storeitems = document.getElementById("product-items");
    const product = document.querySelectorAll(".card");
    const pname = storeitems.getElementsByTagName("h1");

    for(var i = 0 ; i<pname.length ; i++){
      let match = product[i].getElementsByTagName("h1")[0];
      if(match) {
        let textvalue = match.textcontent || match.innerHTML

        if(textvalue.toUppercase().indexof(searchbox) > -1){
          product[i].style.display = "";
        } else {
          product[i].style.display = "none";
        }
      }
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h1 style={{color:"red", marginLeft:"30%" , fontWeight:"900"}}>W</h1>
    <h1 style={{color: "green" , fontWeight:"900"}}>2</h1>
    <h1 style={{color : "red" , fontWeight:"900"}}>N</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex" role="search">
        <input className="form-control me-1 mx-5" type="search" placeholder="Search" id= "search-item" aria-label="Search" onKeyUp={search}/>
      </form>
       <h6 className="mx-5">Categories</h6>
        <i className="fa-solid mx-4 fa-bell"></i>
        <div>
                      <img alt="team images" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="cursor-pointer" style={{color: "transparent" ,borderRadius: "50%"}}  className="border-1"
                     
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
                      </div>
    </div>
  </div>
</nav> 
    </div>
  )
}
export default Navbar