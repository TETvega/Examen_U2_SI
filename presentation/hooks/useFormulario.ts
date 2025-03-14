import { View, Text } from 'react-native'
import React from 'react'

interface Product{
    id: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
    createdDate: Date;
    observations: string;
  
  
  }

 interface Data {
    productos: Product[]
 } 


const useFormulario = (Product) => {
      
    
      
      const [name, setName] = useState("");
      const [price, onChangePrice] = useState('');
      const [category, setCategory] = useState('');
      const [quantity, setquantity] = useState('');
      const [observations , setObservatios] = useState('')
      const [id, setid] = useState('')
    
    
      const manejarEnvio = () => {
        if(id.trim()=== ""){
          Alert.alert("Error no puede tener un Id en Blanco")
        }
        if (name.trim() === "") {
          Alert.alert("Error", "Por favor ingresa algún texto");
          return
        }
        if (category.trim() === ""){
          Alert.alert("La categoria no puede estar vacia")
        }
        if(Number(price) <= 0 || isNaN(Number(price)) ){
    
          Alert.alert("Error el precio Tiene que ser un numero y no puede ser negativo ")
          return
        }
    
        if( Number.isInteger(quantity) == false && Number(price) <= 0  ){
          Alert.alert("Error La cantidad tiene que ser un numero entero positivo")
        }
    
        // const existinID = data.find( (p):Product => (p.id === id):Pro )
      };
    
  return (

  )
}

export default useFormulario