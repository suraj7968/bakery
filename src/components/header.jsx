import React from 'react'

const header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(161, 109, 14, 1)' }}>
  <div className="container-fluid" style={{ backgroundColor: 'rgba(161, 109, 14, 1)' }} id="navi">
    <img src="./image/logo.png" width="50px" alt="logo" />
    <a className="navbar-brand" href="/" style={{ color: 'white', fontWeight: 'bold' }}>
      Cake Bakery
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><img src="./image/menu.png" alt="menu" width="30px" /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{ color: 'white', fontWeight: 'bold' }}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallary" style={{ color: 'white', fontWeight: 'bold' }}>
            Gallary
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false" style={{ color: 'white', fontWeight: 'bold' }}>
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#product-cards" style={{ color: 'black' }}>Birthday Cake</a></li>
            <li><a className="dropdown-item" href="#product-cards" style={{ color: 'black' }}>Chocolate Cake</a></li>
            <li><a className="dropdown-item" href="#product-cards" style={{ color: 'black' }}>Party Cake</a></li>
            <li><a className="dropdown-item" href="#product-cards" style={{ color: 'black' }}>Slice Cake</a></li>
            <li><a className="dropdown-item" href="#product-cards" style={{ color: 'black' }}>Cup Cake</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about" style={{ color: 'white', fontWeight: 'bold' }}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact" style={{ color: 'white', fontWeight: 'bold' }}>
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./order.html" style={{ color: 'white', fontWeight: 'bold' }}>
            Order
          </a>
        </li>
      </ul>
      <div className="icons" style={{ paddingLeft: '18%' }}>
        <img src="./image/user.png" alt="user" width="20px" />
        <img src="./image/heart.png" alt="heart" width="20px" />
        <img src="./image/add.png" alt="add" width="24px" />
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default header