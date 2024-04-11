import React from "react";

export default function Card(props) {
  let options = props.options; 
let priceOptions = Object.keys(options || {});
 // const priceOptions = ["half", "full"]
let foodItems = props.foodItems

 const handleAddtoCart = () => {
   
 }
  return (
    <div> 
      <div className="card" style={{ width: "18rem", marginLeft:"10px", marginTop:"10px"}}
      >
        <img src={props.foodItems.img} className="card-img-top" alt="..." style={{height:"180px", objectFit:"fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.FoodName}</h5>
          <div>
            <select
              className="m-2 h-100 w-20 bg-success text-black rounded"
              style={{ select: "#FF0000" }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 w-20 bg-success text-black rounded"
              style={{ select: "#FF0000" }}
            >
              {priceOptions.map((i) => {
                return (
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">
               total price
            </div>
            <hr>
            </hr>
            <button className="btn btn-success justify-content-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
