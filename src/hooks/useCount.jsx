import { useState } from "react";

export const useCount = (initial = 0, min, max) => {

    if(initial < min || initial > max) initial = min

    const [count, setCount] = useState(initial);

    const decrement = () => {
        if(count> min) setCount(prev => prev -1);
    }

    const increment = () => {
        if(count< max) setCount(prev => prev +1);
    }

    const reset = () => {
        setCount(initial)
    }

    return {count, decrement, increment, reset}
}



const Box = ({title, children}) => {
    
    return(
        <div>
            <h2>{title}</h2>
            <div>
                {children}
            </div>
        </div>
    )
}


{/* <Box title="Mi titulo">
    <p>parrafo</p>
    <button>boton</button>
</Box>


<Box title="Mi titulo 2">
    <p>parrafo</p>
    <button>boton</button>
</Box> */}