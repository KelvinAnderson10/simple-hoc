import LabelToggle from "../../components/LabelToggle"

const ProductCard = (props) => {
    const {data} = props
    return(
        <div>
            <p>
                <b>ID</b> {data.productId}
            </p>
            <div>
                <b>Name</b> <LabelToggle title={data.productName}></LabelToggle>
            </div>
        </div>
    )
}

export default ProductCard;