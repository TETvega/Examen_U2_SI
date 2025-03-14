import { useState } from "react";

let Categories = ["Mesas" , "Pc" , "Swiches"]
let Products = []

let nextId = 2;
export default function List() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setquantity] = useState('');
  const [observations , setObservatios] = useState('')
  const [id, setid] = useState('')
  const [categories , setCategories] = useState(categories)
  const [Products, setProducts] = useState(Products);

  function notFocus(price) {

    if(Number(price) <= 0) {
      alert("Error no es un numero positivo")

    }
    
  }

  function notFocusName(name) {
    if(name.trim()=== "") alert("Error no puede estar vacio")
    
  }


  function handleClick() {
    const insertAt = 0; 
    const nextProducts = [
      // Elementos antes del punto de inserción:
      ...Products.slice(0, insertAt),
      // Nuevo ítem:
      { id: nextId++, name: name, quantity:quantity , price:price , category:category , observations:observations },
      // Elementos después del punto de inserción:
      ...Products.slice(insertAt)
    ];
    setProducts(nextProducts);
    setName('');
    setPrice("");
    setCategory('');
    setquantity('');
    setObservatios('');
    setid('');
  }


  return (
    <>
      <h1>Escultores inspiradores:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setProducts([
          ...Products,
          { id: nextId++, name: name }
        ]);
      }}>Añadir</button>
      <ul>
        {Products.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
