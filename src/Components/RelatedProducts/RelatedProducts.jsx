import "./RelatedProducts.css";
import dataProducts from '../Assets/data'
import Items from '../Item/Item'


const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts_item">
        {
            dataProducts.map((item,i)=>{
                return <Items key={i} id={item.id} image={item.image} name={item.name} newPrice={item.new_price} oldPrice={item.old_price}/>
            })
        }
      </div>
    </div>
  );
};

export default RelatedProducts;
