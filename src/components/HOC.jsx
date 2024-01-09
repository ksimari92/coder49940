import {useEffect} from 'react'

//Creamos una funcion que recibe un componente como parametro y declaramos la logica
const conLogica = (Componente)=> {

    return (props) => {
            useEffect(()=>{
                console.log(`Esta va a ser la logica, fusionada con el componente: ${Componente.name}`)
            },[])

            return <Componente {...props} />
    }
}

//Componente funcional
export const ComponenteFuncional = ()=> {
    return (
        <div>Este es mi componente funcional</div>
    )
}


export const ComponenteFuncionalConLogica = conLogica(ComponenteFuncional);