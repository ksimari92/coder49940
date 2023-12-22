import  Card  from './Card'

const ItemListContainer = ({greeting, productos}) => {

    return (
        <>
        <p>{greeting}</p>
        <ul>
            {productos.map(producto => <Card nombre={producto.nombre} precio={producto.precio} />)} 
        </ul>
        </>
    )
}

export default ItemListContainer