import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Titulo from './components/Titulo'
import Contador from './components/Contador'

function App() {

  // const numeros1 = [1,2,3,4];
  // const numeros2 = [5,6,7,8];

  // const numerosTotal = [...numeros1, ...numeros2];
  // const otroArreglo = [...numeros1, 5]

  // // const numeros3 =  [1,2,3,4, 5,6,7,8]

  // console.log(otroArreglo);



  // const persona = {
  //   nombre: "Karen",
  //   apellido: "Simari"
  // }

  // const personaConOtroApellido = {
  //   ...persona,
  //   apellido: "Gonzalez"
  // }

  // console.log(personaConOtroApellido)

  // const personaConProfesion = {
  //   ...persona,
  //   profesion: "Programadora"
  // }

  // console.log(personaConProfesion)

  // //destructuracion

  // const {apellido, profesion, nombre} = personaConProfesion;

  // console.log(nombre);
  // console.log(apellido);
  // console.log(profesion);

  //  const numeros1 = [1,2,3,4];

  // // const [num1, num2, num3] = numeros1;


  // // console.log(num1)

  // const arregloMapeado = numeros1.map(num => "Soy el numero " + num);

  // console.log(arregloMapeado)

  // arregloMapeado.forEach(posicion => console.log(posicion))

  // const mayorA2 = numeros1.filter(num => num > 2);

  // console.log(mayorA2);

  //SUGAR-SYNTAX

  //   let i = 0;
  //   // i++

  //   let f = i += 2;

  //   console.log(f);


  // let condicion = 5;

  // condicion > 10 ? console.log("La condicion es verdadera") : console.log("La condicion es falsa");

  const styles = {
    border: "1px solid black",
    fontSize: 10
  }



  return (

    <>
     {/* <Titulo nombre="Titulo 1" cantidad={25} numero={0} />
     <Titulo nombre="Titulo 2" cantidad={30} numero={1}/>
     <Titulo numero={2}/>
     <Titulo numero={3}/>
     <Titulo numero={4}/> */}
     <Contador/>
    </>



  )
}

export default App
