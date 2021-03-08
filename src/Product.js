import './styles/Product.css'

function Product(props) {
    return (
        <div className="product">
            <img src={props.imgSrc} alt={props.altText}></img>
            <h3>{props.title}</h3>
            <h4>${props.price}</h4>
        </div>
    )
}

export default Product;