import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({items, onDeleteRem}) {
  

  function handleDelete(id){
    const remItems = items.filter(item=>{
      return (item.id !== id)
  })
    console.log(remItems);
    onDeleteRem(remItems)
  } 

  const displayItems = items.map(item=>(
    <div key={item.id}>
      <ListingCard 
        item={item} 
        id={item.id}
        onDelete={handleDelete}
        />
    </div>
  ))
  return (
    <main>
      <ul className="cards">
        {displayItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;