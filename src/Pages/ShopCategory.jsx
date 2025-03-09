import { useContext } from "react"
import { shopContext } from "../Context/ShopContext"
import dropDown from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item"
import './CSS/ShopingCategory.css'

const ShopCategory = ({banner, category}) => {

  const {all_product} = useContext(shopContext)
  // const a = useContext(shopContext)
  return (
    <div className="shopCategory-container">

        <img className="shopCotegory-banner" src={banner} alt="" />
      
      <div className="shopCategory-index-sort">
        <p>
          <span>Showing 1-12 </span>out of 36 Products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropDown} alt="" />
        </div>
      </div>
      <div className="shopCategory-items">
          {
            all_product.map((item, i) => {
              if (category === item.category) {
                return <Item key={i} id={item.id} image={item.image} name={item.name} newPrice={item.new_price} oldPrice={item.old_price} />
              } else {
                return null
              }
            })
          }
      </div>
      <div className="shopCategory-exploreMore">
        Explore More
      </div>

    </div>
  )
}

export default ShopCategory