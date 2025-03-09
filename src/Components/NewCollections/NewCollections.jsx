import new_collections from "../Assets/new_collections"
import Item from "../Item/Item"
import './NewCollections.css'


const NewCollections = () => {
    return (
        <div className='newCollections'>
            <h1>new collections</h1>
            <hr />
            <div className="newCollections-item">
                {new_collections.map((item, i) => {
                    return <Item key={i} id={item.id} image={item.image} name={item.name} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollections