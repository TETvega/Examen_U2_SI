import { create } from "zustand";


/**
 * a. Código de producto (alfanumérico, 10 caracteres máximo)
b. Nombre del producto (texto, obligatorio)
c. Categoría (selector con al menos 3 opciones)
d. Cantidad (numérico, valor mínimo 1)
e. Precio unitario (numérico con dos decimales)
f. Fecha de ingreso (selector de fecha)
g. Observaciones (texto multilínea, opcional)
 */


/**
 * ? Para la Gestion de Nuevas Categorias en un futuro
 * * Esta Tendra desde el Inicio Datos
 */
interface Category{
    name:string
}

/**
 * ? Interfaz directa de un Producto 
 * * Cuenta con todos los elementos solicitados
 */
interface Product{
    id: string;
    name: string;
    category: Category;
    quantity: number;
    price: number;
    createdDate: Date;
    observations: string;


}

/**
 * ? Interfaz de nuestro almacenamiento o BD por simulacion
 * * Consta de 2 Partes importantes Productos y Categorias
 */
interface DataProducts{
    data: Product[];
    categories: Category[];

    addProduct: (Product : Product) => void;

}

/**
 * ? Permite saber la cantidad de Productos que tenemos 
 * * Nuestro simulador de logica basicamente
 */
export const useProducts = create<DataProducts>((set) => ({
    data : [], // Iniciamos con el arreglo vacio
    categories: [ {name:"Mobiliario"}, {name:"Limpieza" }, {name: "Peleria y Utiles"} ],  // Iniciamos con 3 categorias

    // funcion para agregar un producto
    addProduct: ({
        id ,
        name ,
        category ,
        quantity,
        price,
        createdDate,
        observations}: Product) =>
             set(
                (state) => ({
                    const existingProduct = state.data.find((p) => p.id === id);

                })
             )
        // Momento donde dijo no usar zustand y todo murio pipipi
        
}))





interface CartProduct {
  id: number;
  name: string;
  quantity: number;
}


/**
 * ? Definimos la interfaz del estado global del carrito
 * 
 */
interface CartState {
  cart: CartProduct[]; // Array de productos en el carrito

  addProduct: (id: number, name: string) => void; // Agregar producto o sumar cantidad
  removeProduct: (id: number) => void; // Restar cantidad o eliminar producto
  clearCart: () => void; // Vaciar carrito
}

/**
 * 
 * ? Store del carrito ejemplo
 * * Permite saber la cantidad de productos 
 */
export const useCartStore = create<CartState>((set) => ({
  cart: [], // Estado inicial vacío

  // Agregar producto al carrito
  addProduct: (id, name) =>
    set((state) => {
      // Para saber si exist un carrito 
      const existingProduct = state.cart.find((p) => p.id === id);

      if (existingProduct) {
        // Si ya existe, aumentar la cantidad
        return {
          // si encuentra el id le aumenta 1 si no deja el producto
          cart: state.cart.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        // Si no existe, agregar nuevo producto con cantidad 1
        return { cart: [...state.cart, { id, name, quantity: 1 }] };
      }
    }),

  // Eliminar producto del carrito
  removeProduct: (id) =>
    set((state) => ({
      cart: state.cart
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0), // Elimina si la cantidad llega a 0
    })),

    /**
     * ? Vaciar carrito
     */ 
  clearCart: () => set({ cart: [] }),
}));


