import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";


interface Product{
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  createdDate: Date;
  observations: string;


}

const Index = () => {

  const [data ,setData] =useState([])

  
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
    <View style={styles.container}>
      <Text style={styles.titulo}>SI EXA 2 . Dev</Text>
      


      {/* Codigo del Producto */}
      <Text>Id del Producto</Text>
      <TextInput
        
        style={styles.input}
        placeholder="A6Fr324"
        value={id}
        onChangeText={setid}
      />


      {/* Codigo del Producto */}
      <Text>Nombre del Producto</Text>
      <TextInput
        
        style={styles.input}
        placeholder="Sillas"
        value={name}
        onChangeText={setName}
      />

      <Text>Categoria del Producto</Text>
      {/* Categoria del Producto */}
      <TextInput
        style={styles.input}
        placeholder= "Mobiliario" 
        value={category}
        onChangeText={setCategory}
      />



      {/* Precio del Producto */}
      <Text>Precio de Producto</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="12.89"
        value={price}
        onChangeText={onChangePrice}
      />


      {/*   Cantidad de Producto */}
      <Text>Cantidad de Producto</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="12"
        value={quantity}
        onChangeText={setquantity}
      />

    <Text>Observaciones</Text>
    <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="12"
        value={observations}
        onChangeText={setObservatios}
      />
      


      <TouchableOpacity style={styles.boton} onPress={manejarEnvio}>
        <Text style={styles.textoBoton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  // input: {
  //   backgroundColor: "white",
  //   borderWidth: 1,
  //   borderColor: "#ddd",
  //   borderRadius: 5,
  //   padding: 10,
  //   fontSize: 16,
  //   marginBottom: 20,
  // },
  boton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    padding: 12,
    alignItems: "center",
  },
  textoBoton: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
