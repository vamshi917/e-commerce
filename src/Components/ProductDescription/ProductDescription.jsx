import './ProductDescription.css';

const ProductDescription = () => {
    return (
        <div className="product-description-container">

            <div className="product-description">
                <div className="description">
                    Description
                </div>
                {/* <div className="product-description-reviews"> */}
                <div className="description fade">
                    Reviews(122)
                </div>
            </div>

            <div className="product-description-content">
               

                <p>An e-commerce website is an online platform that faciltates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                <p>E-commerce websites typically dlisplay products or services along with detailed descriptions, images, prices, and any availoble variations (eg, sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>

        </div>
    )
}

export default ProductDescription