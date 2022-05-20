import React, {useState } from "react";

function ListingCard({item, id, onDelete}) {
  const [isFavorite, setisFavorite] = useState(true)

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE",
    })
    .then(res=>res.json())
    .then(()=>{
      console.log(item);
      onDelete(id)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={()=>setisFavorite(!isFavorite)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setisFavorite(!isFavorite)}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;