import React from 'react'

const home = () => {
  return (
    <div className="container-fluid ">
         

         {/*Home start */}
         <div className="home">
            <div className="content" data-aos="zoom-out-right">
               <h3>Delicious
                  <br/>Cakes Bakery
               </h3>
               <h2>Category <span className="changecontent"></span></h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
                  <br/>Lorem ipsum dolor sit amet consectetur.
               </p>
               <a href="#" className="btn">Order Now</a>
            </div>
            <div className="img"  data-aos="zoom-out-left">
               <img src="./image/background.png" alt=""/>
            </div>
         </div>
         {/*-hom end*/}
         {/*-Gallary start*/}
         <section id="gallary" data-aos="fade-up" data-aos-duration="1500">
  <div className="container">
    <h1 style={{ color: 'white' }}>OUR GALLARY</h1>
    <div className="row" style={{ marginTop: '30px' }}>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="overlay">
            <h3 className="text-center" style={{ color: 'rgba(161, 109, 14, 1)' }}>Donuts</h3>
          </div>
          <img src="./image/o1.png" alt="Donuts" />
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="overlay">
            <h3 className="text-center" style={{ color: 'rgba(161, 109, 14, 1)' }}>Ice Cream</h3>
          </div>
          <img src="./image/o2.png" alt="Ice Cream" />
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="overlay">
            <h3 className="text-center" style={{ color: 'rgba(161, 109, 14, 1)' }}>Cup Cake</h3>
          </div>
          <img src="./image/o3.png" alt="Cup Cake" />
        </div>
      </div>
    </div>
    
    <div className="row" style={{ marginTop: '30px' }} data-aos="fade-up" data-aos-duration="1500">
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="overlay">
            <h3 className="text-center" style={{ color: 'rgba(161, 109, 14, 1)' }}>Delicious Cake</h3>
          </div>
          <img src="./image/o4.png" alt="Delicious Cake" />
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="overlay">
            <h3 className="text-center" style={{ color: 'rgba(161, 109, 14, 1)' }}>Chocolate Cake</h3>
          </div>
          <img src="./image/o5.png" alt="Chocolate Cake" />
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <div className="overlay">
            <h3 className="text-center" style={{ color: 'rgba(161, 109, 14, 1)' }}>Slice Cake</h3>
          </div>
          <img src="./image/o6.png" alt="Slice Cake" />
        </div>
      </div>
    </div>
  </div>
</section>

         {/*-Gallary end*/}
         {/* banner */}
         <div className="banner" data-aos="fade-up" data-aos-duration="1500">
  <div className="content">
    <h3>Delicious Cake</h3>
    <h2>UPTO 50% OFF</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quod.</p>
    <div id="btnorder">
      <button>Order Now</button>
    </div>
  </div>
  <div className="img">
    <img src="./image/banner-background.png" alt="Banner Background" />
  </div>
</div>

         {/* banner end */}
         {/* top cards */}
         <div className="container" id="box" data-aos="fade-up" data-aos-duration="1500">
  <div className="row">
    <div className="col-md-4 py-3 py-md-0">
      <div className="card">
        <img src="./image/box1.jpg" alt="Box 1" />
      </div>
    </div>
    <div className="col-md-4 py-3 py-md-0">
      <div className="card">
        <img src="./image/box2.jpg" alt="Box 2" />
      </div>
    </div>
    <div className="col-md-4 py-3 py-md-0">
      <div className="card">
        <img src="./image/box3.jpg" alt="Box 3" />
      </div>
    </div>
  </div>
</div>

         {/* top cards end */}
         {/* product cards */}
         <section id="product-cards"    data-aos="fade-up"
            data-aos-duration="1500">
            <div className="container">
               <h1>CAKES</h1>
               <div className="row" style={{marginTop: "50px"}}>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c1.png" alt=""/>
                        <div className="card-body">
                           <h3>Cream Cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star "></i>
                              <i className="bx bxs-star "></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.100 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c2.png" alt=""/>
                        <div className="card-body">
                           <h3>Choco Cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star "></i>
                              <i className="bx bxs-star "></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.120 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c3.png" alt=""/>
                        <div className="card-body">
                           <h3>Slice Cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star "></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.100 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c4.png" alt=""/>
                        <div className="card-body">
                           <h3>Fruit Cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.400  <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row" style={{marginTop: "50px"}}    data-aos="fade-up"
                  data-aos-duration="1500">
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c5.png" alt=""/>
                        <div className="card-body">
                           <h3>Brown Cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star "></i>
                              <i className="bx bxs-star "></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.550 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c6.png" alt=""/>
                        <div className="card-body">
                           <h3>Slice Cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star "></i>
                              <i className="bx bxs-star "></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.600 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c7.png" alt=""/>
                        <div className="card-body">
                           <h3>Fruit Cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star "></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.700 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c8.png" alt=""/>
                        <div className="card-body">
                           <h3>Choco Cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.750 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="product-cards"    data-aos="fade-up"
            data-aos-duration="1500">
            <div className="container">
               <h1>BIRTHDAY CAKE</h1>
               <div className="row" style={{marginTop: "50px"}}>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c9.png" alt=""/>
                        <div className="card-body">
                           <h3>Birthday cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.800 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c10.png" alt=""/>
                        <div className="card-body">
                           <h3>Bir Cup cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.350 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c11.png" alt=""/>
                        <div className="card-body">
                           <h3>Birthday cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>Rs.750 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 py-3 py-md-0">
                     <div className="card">
                        <div className="overlay">
                           <button type="button" className="btn btn-secondary" title="Quick View"><i><img src="./image/views.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Wishlist"><i><img src="./image/heart.png" alt="" width="30px"/></i></button>
                           <button type="button" className="btn btn-secondary" title="Add to Cart"><i><img src="./image/add.png" alt="" width="30px"/></i></button>
                        </div>
                        <img src="./image/c12.png" alt=""/>
                        <div className="card-body">
                           <h3>Cup cake</h3>
                           <div className="star">
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                              <i className="bx bxs-star checked"></i>
                           </div>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                           <h6>$50.10 <span><button>Add Cart</button></span></h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
          {/* product cards end*/}
         {/* about */}
         <div className="container" id="about"    data-aos="fade-up"
            data-aos-duration="1500">
            <h1>ABOUT US</h1>
            <div className="row">
               <div className="col-md-6 py-3 py-md-0">
                  <div className="card">
                     <img src="./image/about.png" alt=""/>
                  </div>
               </div>
               <div className="col-md-6 py-3 py-md-0">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias explicabo nulla dicta perferendis cupiditate autem assumenda unde fugit? Corrupti ipsa fugiat similique voluptate temporibus, cupiditate cumque iusto? Necessitatibus suscipit qui molestias odit ad aspernatur harum aliquid ipsam nisi, culpa quae, magnam dolores cupiditate velit exercitationem ratione deleniti dignissimos labore quia esse ea quos consequuntur perferendis aliquam. Est assumenda doloremque nobis, tenetur fuga similique eligendi nihil non officia possimus aliquid animi nisi ipsum qui veritatis repellat harum accusamus odit iusto laudantium voluptatum ipsa ut fugit veniam. Voluptates sint molestiae officia consequuntur iure repudiandae autem reiciendis, perspiciatis veritatis soluta quia velit necessitatibus.</p>
                  <div id="bt"><button>Read More...</button></div>
               </div>
            </div>
         </div>
         {/* about */}
         {/* contact  */}
         <div className="container" id="contact"    data-aos="fade-up"
            data-aos-duration="1500">
            <h1>CONTACT US</h1>
            <div className="row">
               <div className="col-md-4 py-1 py-md-0">
                  <div className="form-group">
                     <input type="text" className="form-control" id="usr" placeholder="Name"/>
                  </div>
               </div>
               <div className="col-md-4 py-1 py-md-0">
                  <div className="form-group">
                     <input type="email" className="form-control" id="eml" placeholder="Email"/>
                  </div>
               </div>
               <div className="col-md-4 py-1 py-md-0">
                  <div className="form-group">
                     <input type="number" className="form-control" id="phn" placeholder="Phone"/>
                  </div>
               </div>
            </div>
            <div className="form-group">
               <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
            </div>
            <div id="messagebtn"><button>Send Message</button></div>
         </div>
         {/* contact end */}
         
         <a href="#" className="arrow"><i><img src="./image/up-arrow.png" alt="" width="50px"/></i></a>
      </div>
  )
}

export default home