import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const numeros1 = [1,2,3,4];
  const numeros2 = [5,6,7,8];

  const numerosTotal = [...numeros1, ...numeros2];
  const otroArreglo = [...numeros1, 5]

  console.log(otroArreglo);



  const persona = {
    nombre: "Karen",
    apellido: "Simari"
  }

  const personaConProfesion = {
    ...persona,
    profesion: "Programadora"
  }

  console.log(personaConProfesion)

  //destructuracion

  const {apellido, profesion, nombre} = personaConProfesion;

  console.log(nombre);
  console.log(apellido);
  console.log(profesion);

  // const numeros1 = [1,2,3,4];

  const [num1, num2, num3] = numeros1;


  console.log(num1)

  const arregloMapeado = numeros1.map(num => "Soy el numero " + num);

  console.log(arregloMapeado)

  const mayorA2 = numeros1.filter(num => num > 2);

  console.log(mayorA2);



  


  return (
    <>
     Hola mundo

    </>
  )
}

export default App
