import React from 'react'

const order = () => {
  return (
    <div>
        <div class="col-lg-10 offset-lg-1">
        <table class="table mt-5" style={{fontSize:"20px"}}>
            <thead>
                <tr>
                    <th style={{color: "white"}}>Name</th>
                    <th style={{color: "white"}}>Number</th>
                    <th style={{color: "white"}}>Email</th>
                    <th style={{color: "white"}}>Address</th>
                    <th style={{color: "white"}}>Flavour</th>
                    <th style={{color: "white"}}>Size</th>
                    <th style={{color: "white"}}>Quantity</th>
                    <th style={{color: "white"}}>Payment Method</th>
                    <th style={{color: "white"}}>Name on Cake</th>
                    <th style={{color: "white"}}>Image</th>
                    <th style={{color: "white"}}>Delivery Charge</th>
                    <th style={{color: "white"}}>Total Bill</th>
                </tr>
            </thead>
            <tbody id="table" style={{color: "white"}}>

            </tbody>
        </table>
    </div>
    </div>
  )
}

export default order