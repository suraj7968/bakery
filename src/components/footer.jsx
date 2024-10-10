import React from 'react'

const footer = () => {
  return (
    <div>
        {/* footer */}
        <footer id="footer"    data-aos="fade-up"
            data-aos-duration="1500">
            <h1 className="text-center">Cake Bakery</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, accusantium.</p>
            <div className="icons text-center">
            <box-icon type='logo' name='twitter'></box-icon>
            <box-icon name='facebook-circle' type='logo' ></box-icon>
            <box-icon name='google' type='logo' ></box-icon>
            <box-icon name='skype' type='logo' ></box-icon>
            <box-icon name='instagram' type='logo' ></box-icon>
               
            </div>
            <div className="copyright text-center">
               &copy; Copyright <strong>Cake Bakery</strong> .All Rights Reserved
            </div>
            <div className="credite text-center">
               Designed By <a href="#"><span>Niharika Bairagi</span></a>
            </div>
         </footer>
         {/* footer */}
    </div>
  )
}

export default footer