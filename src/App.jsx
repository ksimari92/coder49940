import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo'
import Contador from './components/Contador'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  const productos = [
    { id: 1, nombre: 'Producto A', precio: 20.0 },
    { id: 2, nombre: 'Producto B', precio: 30.0 },
    { id: 3, nombre: 'Producto C', precio: 25.0 }
  ];

  const detalles = productos.map(producto =>  `${producto.id} - ${producto.nombre} $${producto.precio}`)
 

  console.log(detalles)
  //PROMESAS
  // const tarea = new Promise ((resolve, reject)=> {
  //   resolve("Resuelta");
  // })

  // tarea.then(result => {
  //   console.log(result)
  // }, err => {
  //     console.log(err)
  // })
  // .catch(err => {
  // console.log("Ha habido un error " + err);
  // })
  // .finally(() => {
  //   console.log("El proceso ha terminado")
  // })


  return (

    <>
     {/* <ul>
      {productos.map((producto, index) => <li key={index}> {producto.id} - {producto.nombre} {producto.precio}</li>)}
     </ul> */}
     <NavBar/>
     <ItemListContainer productos={productos} greeting="Mensaje de bienvenida!!!"/>
    </>



  )
}

export default App
